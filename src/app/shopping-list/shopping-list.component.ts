import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];
  private igChangesSub: Subscription;


  constructor(private shoppingListSrevice: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListSrevice.getIngredients();
    this.igChangesSub = this.shoppingListSrevice.ingredientsChange
    .subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients
      });
  }

  ngOnDestroy() {
    this.igChangesSub.unsubscribe();
  }

}
