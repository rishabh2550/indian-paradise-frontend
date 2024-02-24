import { animate, state, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { AnimState } from './AnimState';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-read-more',
  templateUrl: './read-more.component.html',
  styleUrls: ['./read-more.component.scss'],
  animations: [
    trigger('collapse', [
      state('initial1', style({ height: '{{iniHeight}}px' }), {params: {iniHeight: 50}}),
      state('initial2', style({ height: '{{iniHeight}}px' }), {params: {iniHeight: 50}}),
      state('final1', style({ height: '*' })),
      state('final2', style({ height: '{{finHeight}}px' }), {params: {finHeight: 100}}),
      transition('initial1 => final1', animate('1s ease-in-out')),
      transition('final2 => initial2', animate('1s ease-in-out'))
    ])
  ]
})
export class ReadMoreComponent implements OnInit, AfterViewInit {

  @Input() text: string = '';
  truncatedText: string = '';
  fullText: string = '';
  showFullText: boolean = false;
  @ViewChild('animatedDiv') animatedDiv!: ElementRef;
  animIniHeight: number = 0;
  animFinHeight: number = 0;
  animState: AnimState = AnimState.INITIAL1;
  toggleText: string = 'Read More';

  maxTextLengthSmall: number = 120;
  maxTextLengthMedium: number = 215
  maxTextLengthLarge: number = 335;
  maxTextLengthXLarge = 985;
  windowWidth: number = 0;

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
    this.truncateText();
  }

  ngAfterViewInit(): void {
    this.animIniHeight = this.animatedDiv.nativeElement.offsetHeight;
    this.cd.detectChanges();
  }

  constructor(private cd: ChangeDetectorRef) {}

  private truncateText() {
    this.fullText = this.text;
    const words = this.fullText.split(' ');
    if(this.windowWidth < 768) {
      let i = 0;
      while(this.truncatedText.length <= this.maxTextLengthSmall && i< words.length) {
        this.truncatedText = this.truncatedText + words[i++] + ' ';
      }
    }else if(this.windowWidth < 992) {
      let i = 0;
      while(this.truncatedText.length <= this.maxTextLengthMedium && i< words.length) {
        this.truncatedText = this.truncatedText + words[i++] + ' ';
      }
    }else if(this.windowWidth < 1200) {
      let i = 0;
      while(this.truncatedText.length <= this.maxTextLengthLarge && i< words.length) {
        this.truncatedText = this.truncatedText + words[i++] + ' ';
      }
    }else {
      let i = 0;
      while(this.truncatedText.length <= this.maxTextLengthXLarge && i< words.length) {
        this.truncatedText = this.truncatedText + words[i++] + ' ';
      }
    }
  }

  public toggleReadMore() {
    this.toggleText = this.toggleText=='Read More' ? 'Read Less' : 'Read More';
    if(this.animState == AnimState.INITIAL1) {
      this.showFullText = !this.showFullText;
      this.animState = AnimState.FINAL1;
      setTimeout(()=>{
        this.animFinHeight = this.animatedDiv.nativeElement.offsetHeight;
        this.animState = AnimState.FINAL2;
      },1000);
    }else if(this.animState == AnimState.FINAL2) {
      console.log('animFinHeight ', this.animFinHeight);
      this.animState = AnimState.INITIAL2;
      setTimeout(()=>{
        this.animState = AnimState.INITIAL1;
        this.showFullText = !this.showFullText;
      }, 900);
    }
  }

}
