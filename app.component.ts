import { Component ,OnInit,ViewChild} from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '@viewchild with component.';
@ViewChild(ChildComponent) _ChildCmpt !:ChildComponent;

Incr()
{
  this._ChildCmpt.increasebyvalue();
}
Dec()
{
  this._ChildCmpt.decreasebyvalue();
}

}
