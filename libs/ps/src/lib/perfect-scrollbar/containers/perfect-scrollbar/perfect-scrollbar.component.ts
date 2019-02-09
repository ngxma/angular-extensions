import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  Inject,
  OnInit,
  Optional,
  ViewEncapsulation,
} from '@angular/core';

import {
  PERFECT_SCROLLBAR_CONFIG,
  PerfectScrollbarConfigInterface,
} from 'ngx-perfect-scrollbar';


@Component({
  selector: 'xma-perfect-scrollbar',
  templateUrl: './perfect-scrollbar.component.html',
  styleUrls: ['./perfect-scrollbar.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfectScrollbarComponent implements OnInit {

  @HostBinding('class.xma-perfect-scrollbar')
  public classes: boolean = true;

  constructor(
    @Optional() @Inject(PERFECT_SCROLLBAR_CONFIG) public config: PerfectScrollbarConfigInterface,
  ) { }

  public ngOnInit(): void { }

}
