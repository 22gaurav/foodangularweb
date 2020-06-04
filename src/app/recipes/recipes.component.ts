import { Component, OnInit } from '@angular/core';
import { recipes } from './recipes.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
SelectedRecipe : recipes;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
    this.recipeService.recipeSelected.subscribe(
      (recipe:recipes) => {
        this.SelectedRecipe=recipe;
      }
      );
  }

}
