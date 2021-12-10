import { Component, OnInit } from '@angular/core';
import BurritoIngredient from './BurritoIngredient';

@Component({
  selector: 'burrito-maker',
  templateUrl: './burrito-maker.component.html',
  styleUrls: ['./burrito-maker.component.scss']
})
export class BurritoMakerComponent implements OnInit {

  ingredients:BurritoIngredient[] = [
    new BurritoIngredient("flour-tortilla", 1),
    new BurritoIngredient("corn-tortilla", 1),
    new BurritoIngredient("white-rice", 2),
    new BurritoIngredient("brown-rice", 2),
    new BurritoIngredient("black-beans", 3),
    new BurritoIngredient("pinto-beans", 3),
    new BurritoIngredient("barbacoa", 4),
    new BurritoIngredient("carnitas", 4),
    new BurritoIngredient("chicken", 4),
    new BurritoIngredient("steak", 4),
    new BurritoIngredient("sofritas", 4),
    new BurritoIngredient("cheese", 5),
    new BurritoIngredient("fajita-vegetables", 5),
    new BurritoIngredient("lettuce", 5),
  ]

  constructor() { }

  ngOnInit(): void { }

}
