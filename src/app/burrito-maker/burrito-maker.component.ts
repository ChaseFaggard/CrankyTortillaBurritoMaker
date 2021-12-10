import { Component, OnInit } from '@angular/core';
import BurritoIngredient from './BurritoIngredient';
import { FormState } from './FormState';

@Component({
  selector: 'burrito-maker',
  templateUrl: './burrito-maker.component.html',
  styleUrls: ['./burrito-maker.component.scss']
})
export class BurritoMakerComponent implements OnInit {

  ingredients:BurritoIngredient[] = [
    new BurritoIngredient("flour-tortilla", FormState.STEP_1),
    new BurritoIngredient("corn-tortilla", FormState.STEP_1),
  ]

  state:FormState = FormState.START

  constructor() { }

  ngOnInit(): void { }

  public get FormState(): typeof FormState { return FormState }

  /* Initate burrito making process */
  start():void {
    this.state = FormState.STEP_1
  }

  

}
