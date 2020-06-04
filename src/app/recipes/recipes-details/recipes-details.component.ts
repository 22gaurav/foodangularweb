import { Component, OnInit} from '@angular/core';
import { recipes } from '../recipes.model'
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Params } from '@angular/router';
@Component({
  selector: 'app-recipes-details',
  templateUrl: './recipes-details.component.html',
  styleUrls: ['./recipes-details.component.css']
})
export class RecipesDetailsComponent implements OnInit {
 recipe:recipes;
 id: number;
  constructor(private recipeService:RecipeService,
              private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
   this.route.params.subscribe(
     (params:Params) =>{
       this.id=+params['id'];
       this.recipe=this.recipeService.getRecipe(this.id);
     }
   );
    }
   OnAddToShoppingList(){
   this.recipeService.AddIngredientstoShoppingList(this.recipe.ingredients);
  }
}


