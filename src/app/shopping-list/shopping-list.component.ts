import { Component, OnInit, OnDestroy } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "./shopping-list.service";
import { Subscription, Subject } from "rxjs";
import { LoggingService } from '../logging.service';

@Component({
  selector: "app-shopping-list",
  templateUrl: "./shopping-list.component.html",
  styleUrls: ["./shopping-list.component.css"],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[];

  private igChangesSub: Subscription;

  constructor(
    private shoppingListSrevice: ShoppingListService,
    private loggingService: LoggingService
  ) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingListSrevice.getIngredients();
    this.igChangesSub = this.shoppingListSrevice.ingredientsChange.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
    this.loggingService.printLog("Hello from ShoppingListComponent ngOnInit");
  }

  onEditItem(index: number) {
    this.shoppingListSrevice.startedEditing.next(index);
  }

  ngOnDestroy() {
    this.igChangesSub.unsubscribe();
  }
}
