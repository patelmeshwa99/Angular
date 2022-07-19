import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe 1', 'Its delicious', 'https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg'),
    new Recipe('Test recipe 2', 'Its yum', 'https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg'),
    new Recipe('Test recipe 3', 'Its extraordinary', 'https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
