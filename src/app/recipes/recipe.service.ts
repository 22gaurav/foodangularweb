import { EventEmitter, Injectable } from '@angular/core';
import { recipes } from './recipes.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service'

@Injectable()
export class RecipeService{
recipeSelected=new EventEmitter<recipes>();

    private recipes1:recipes[]=[
        new recipes('Big Fat burger','tasty special burger',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTpYI0pz35ui8IccQyanMZCy4c-ltJbOKjR8rY4GmrajOKIkgjX&usqp=CAU',
        [new Ingredient('cost',100),
        new Ingredient('delivery charge',20)
        ]
        ),
        
        new recipes('chiken','Super hot chicken',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3PEIJ3j0cZDxq5o_XV9CbiwHjaP6qir42BRt90im-YSjIZmlP&usqp=CAU',
        [
          new Ingredient('cost',199),
        new Ingredient('delivery charge',20)
        ]
        ),
        new recipes('dosa','Spicy dosa with south indian tinge',
        'https://www.holidify.com/images/cmsuploads/compressed/indian-1768906_1920_20180322173733.jpg',
        [
          new Ingredient('cost',150),
        new Ingredient('delivery charge',20)
        ]
        ),
        new recipes('chicken biryani','with spicy chatni',
        'https://c.tribune.com.pk/2017/12/1590373-biryani-1513939158.gif',
        [
          new Ingredient('cost',180),
        new Ingredient('delivery charge',20)
        ]
        ),
        new recipes('Pizza','with margharita cheese',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqwSVmzU-cvnJ7X11xrgKn40ELCVDN94AExLLP-bq4i5_C5v1A&usqp=CAU',
        [
          new Ingredient('cost',250),
        new Ingredient('delivery charge',20)
        ]
        ),
        new recipes('French fries','special combo',
        'https://www.listchallenges.com/f/items/f50faefe-c33e-4cf8-af58-e1ac706037a6.jpg',
        [
          new Ingredient('cost',99),
        new Ingredient('delivery charge',20)
        ]
        )
      ];
      constructor(private slService:ShoppingListService){

     }
      getRecipes() {
         return this.recipes1.slice();
      }
      getRecipe(index:number)
      {
        return this.recipes1[index];
      }
      AddIngredientstoShoppingList(ingredients: Ingredient[]){
     this.slService.addIngredients(ingredients);
      }
}