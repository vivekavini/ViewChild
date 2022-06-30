import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  count:number=0
message !:string
increasebyvalue()
{
  this.count=this.count+1;
  this.message="conter:"+this.count;

}
decreasebyvalue()
{
this.count=this.count-1;
this.message="counter:"+this.count
}

}
