import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'burrito-maker',
  templateUrl: './burrito-maker.component.html',
  styleUrls: ['./burrito-maker.component.scss']
})
export class BurritoMakerComponent implements OnInit {

  ingredients:BurritoIngredient[] = []

  constructor() { }

  ngOnInit(): void { }

}
