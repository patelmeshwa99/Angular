import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'Its delicious', 'https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg'),
    new Recipe('Test recipe', 'Its delicious', 'https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg'),
    new Recipe('Test recipe', 'Its delicious', 'https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
