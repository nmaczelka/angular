import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();


  recipes: Recipe[] = [
    new Recipe("Test Recipe", "Recipe description", "https://pinchofyum.com/wp-content/uploads/Lo-Mein-Recipe.jpg"),
    new Recipe("Test Recipe2", "Recipe description2", "https://pinchofyum.com/wp-content/uploads/Lo-Mein-Recipe.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
