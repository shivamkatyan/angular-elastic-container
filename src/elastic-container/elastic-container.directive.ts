import { Directive, ElementRef, Output } from '@angular/core';
import {
  MUTATION_OBSERVER_INIT,
  MutationObserverService,
} from '@ng-web-apis/mutation-observer';
import { ResizeObserverService } from '@ng-web-apis/resize-observer';
import { merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Directive({
  selector: '[elasticContainer]',
  providers: [
    ResizeObserverService,
    MutationObserverService,
    {
      provide: MUTATION_OBSERVER_INIT,
      useValue: {
        childList: true,
        characterData: true,
        subtree: true,
      },
    },
  ],
})
export class ElasticContainerDirective {
  @Output()
  readonly elasticContainer = merge(this.resize$, this.mutation$).pipe(
    debounceTime(0),
    map(() => this.elementRef.nativeElement.clientHeight),
    distinctUntilChanged()
  );

  constructor(
    private readonly elementRef: ElementRef<HTMLElement>,
    private readonly resize$: ResizeObserverService,
    private readonly mutation$: MutationObserverService
  ) {}
}
