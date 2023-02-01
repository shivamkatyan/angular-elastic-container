import { ChangeDetectionStrategy, Component, HostBinding } from '@angular/core';

@Component({
  selector: 'elastic-container',
  template: `
    <div (elasticContainer)="height = $event">
      <ng-content></ng-content>
    </div>
  `,
  styles: [
    `
    :host {
      display: block;
      transition: height .3s
    }
  `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ElasticContainerComponent {
  @HostBinding('style.height.px')
  height = NaN;
}
