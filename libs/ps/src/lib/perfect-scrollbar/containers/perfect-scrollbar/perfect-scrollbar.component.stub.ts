import {
  Component,
  OnInit,
} from '@angular/core';

import {
  PerfectScrollbarComponent,
} from './perfect-scrollbar.component';


@Component({
  selector: 'xma-perfect-scrollbar',
  template: `<ng-content></ng-content>`,
})
export class StubPerfectScrollbarComponent
  extends PerfectScrollbarComponent
  implements OnInit {

  public ngOnInit(): void { }

}
