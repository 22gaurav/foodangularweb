import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
ingredients:Ingredient[];

  constructor(private slService:ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients=this.slService.getIngredients();
    this.slService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[])=>
      {
        this.ingredients=ingredients;
      }
    );
  }

}
// injectShoppingList services in
//  app module provider(to get access in recipes also)