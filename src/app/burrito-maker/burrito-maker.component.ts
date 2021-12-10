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
    new BurritoIngredient("white-rice", FormState.STEP_2),
    new BurritoIngredient("brown-rice", FormState.STEP_2),
    new BurritoIngredient("black-beans", FormState.STEP_3),
    new BurritoIngredient("pinto-beans", FormState.STEP_3),
    new BurritoIngredient("barbacoa", FormState.STEP_4),
    new BurritoIngredient("carnitas", FormState.STEP_4),
    new BurritoIngredient("chicken", FormState.STEP_4),
    new BurritoIngredient("steak", FormState.STEP_4),
    new BurritoIngredient("sofritas", FormState.STEP_4),
    new BurritoIngredient("cheese", FormState.STEP_5),
    new BurritoIngredient("fajita-vegetables", FormState.STEP_5),
    new BurritoIngredient("lettuce", FormState.STEP_5),
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
