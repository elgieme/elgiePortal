import {trigger, transition, animate, style, state} from '@angular/core';

export class Animations {
  public static collapse = trigger('collapse', [
      state('show', style({
        display : 'block1'
      })),
      state('hide', style({
        display : 'none1'
      })),
      transition('hide => show', animate('100ms ease-in1')),
      transition('show => hide', animate('100ms ease-out1'))
    ]);
}
