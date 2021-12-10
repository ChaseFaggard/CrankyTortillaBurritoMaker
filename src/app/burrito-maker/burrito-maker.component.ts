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
    new BurritoIngredient("corn-tortilla", 2)
  ]

  constructor() { }

  ngOnInit(): void { }

}
