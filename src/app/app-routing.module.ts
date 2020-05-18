import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";

const appRoutes: Routes = [
  // { path: "", redirectTo: "/recipes", pathMatch: "full" },
  // {
  //   path: "recipes",
  //   loadChildren: "./recipes/recipe.module#RecipeModule",
  // },
  // {
  //   path: "shopping-list",
  //   loadChildren: "./shopping-list/shopping-list.module#ShoppingListModule",
  // },
  // {
  //   path: "auth",
  //   loadChildren: "./auth/auth.module#AuthModule",
  // },
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes",
    loadChildren: () =>
      import("./recipes/recipe.module").then((m) => m.RecipeModule),
  },
  {
    path: "shopping-list",
    loadChildren: () =>
      import("./shopping-list/shopping-list.module").then(
        (m) => m.ShoppingListModule
      ),
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
