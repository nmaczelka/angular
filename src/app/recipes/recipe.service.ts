import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    recipes: Recipe[] = [
        new Recipe("Test Recipe", "Recipe description", "https://pinchofyum.com/wp-content/uploads/Lo-Mein-Recipe.jpg",[new Ingredient('Meat', 1), new Ingredient('French fries', 20)]),
        new Recipe("Test Recipe2", "Recipe description2", "https://pinchofyum.com/wp-content/uploads/Lo-Mein-Recipe.jpg", [new Ingredient('Beans', 23),new Ingredient('Onion', 4)])
      ];

      constructor(private shoppingListService: ShoppingListService){}

      getRecipes(){
        return this.recipes.slice();
      }

     addINgredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
     } 
}