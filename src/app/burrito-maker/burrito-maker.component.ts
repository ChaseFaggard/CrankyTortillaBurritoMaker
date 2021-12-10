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
    new BurritoIngredient("fajita-veggies", FormState.STEP_5),
    new BurritoIngredient("lettuce", FormState.STEP_5),
  ]

  selectedIngredients:BurritoIngredient[] = []

  state:FormState = FormState.START

  constructor() { }

  ngOnInit(): void { }

  public get FormState(): typeof FormState { return FormState }

  /* Initate burrito making process */
  start():void {
    this.state = FormState.STEP_1
  }

  nextStep(): void { 
    if (this.state !== FormState.STEP_1 || this.selectedIngredients.some(ingredient => ingredient.step === FormState.STEP_1)) {
      this.state++;
    }
  }

  previousStep():void { this.state-- }

  add(ingredient:BurritoIngredient):void {
    if (this.selectedIngredients.some(selectedIngredient => ingredient.name === selectedIngredient.name)) {
      this.selectedIngredients = this.selectedIngredients.filter(selectedIngredient => selectedIngredient.name !== ingredient.name);
    } else {
      if (ingredient.step === FormState.STEP_1 || ingredient.step === FormState.STEP_2) {
        const step = ingredient.step;
        if (!this.selectedIngredients.some(ingredient => ingredient.step === step)) {
          this.selectedIngredients.push(ingredient);
        }
      } else if (ingredient.step === FormState.STEP_4) {
        if (this.selectedIngredients.filter(selectedIngredient => selectedIngredient.step === FormState.STEP_4).length < 2) {
          this.selectedIngredients.push(ingredient);
        }
      } else {
        this.selectedIngredients.push(ingredient);
      }
    }
  }

  contains(ingredient:BurritoIngredient):boolean {
    return this.selectedIngredients.some(element => element.name === ingredient.name)
  }

}
