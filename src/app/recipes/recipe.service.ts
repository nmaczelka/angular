import { Recipe } from './recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {

    recipes: Recipe[] = [
        new Recipe("Paste Recipe", "Paste recipe description", "https://pinchofyum.com/wp-content/uploads/Lo-Mein-Recipe.jpg",[new Ingredient('Meat', 1), new Ingredient('French fries', 20)]),
        new Recipe("Burder Recipe", "Burger recipe description", "https://www.burgerking.nl/007_nl/products_nl/image-thumb__11054__product_detail/Product-VeggieKing-NL-2.png", [new Ingredient('Beans', 23),new Ingredient('Onion', 4)])
      ];

      constructor(private shoppingListService: ShoppingListService){}

      getRecipes(){
        return this.recipes.slice();
      }

      getRecipe(index: number){
        return this.recipes[index];
      }

     addINgredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
     } 
}