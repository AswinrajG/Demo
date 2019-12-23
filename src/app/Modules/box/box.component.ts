import { Component, Input } from '@angular/core';
import { TruncateModule } from '@yellowspot/ng-truncate';
import { trigger, state, style, animate, transition } from '@angular/animations';
import {Router} from "@angular/router";

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
  animations: [
    trigger('changeDivSize', [
      state('initial', style({
        opacity:"0",
      })),
      state('final', style({
        opacity:"1",
      })),
      transition('initial=>final', animate('2500ms ease-in')),
      transition('final=>initial', animate('1000ms'))
    ])]
})
export class BoxComponent {
  @Input() Data: string
  @Input() image: string
  @Input() title: string;
  @Input() urls: string;
  public limit: number = 130;
  truncating = true;

  currentState:any='initial';
  elevation : string = ""
  truncatingStyle : string = "";
  constructor(private router: Router) { 
    this.transition();
  }

  ngOnInit()
  {
    this.truncatingStyle = this.truncating ? 'collapse' : 'expand';
  }

  transition(){
  setTimeout(()=>
  {
    this.currentState = 'final'
  },100) 
};

changeStyle($event){
  this.elevation = $event.type == 'mouseover' ? 'shadow' : '';
}


goToAssetDetails()
{
  console.log("The URLS are",this.urls);
  if(this.urls != "")
  {
    this.router.navigate([this.urls]);
  }
}


}
