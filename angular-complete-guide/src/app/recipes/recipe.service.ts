import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'Test recipe 1',
      'Its delicious',
      'https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Tomato', 2)]
    ),
    new Recipe(
      'Test recipe 2',
      'Its yum',
      'https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg',
      [new Ingredient('Cheese', 1), new Ingredient('Corriander', 2)]
    ),
    new Recipe(
      'Test recipe 3',
      'Its extraordinary',
      'https://images.freeimages.com/images/large-previews/a31/colorful-umbrella-1176220.jpg',
      [new Ingredient('Butter', 1), new Ingredient('Potato', 2)]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipe(index: number) {
    return this.recipes.slice()[index];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
