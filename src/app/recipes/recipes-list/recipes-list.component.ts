import { Component, OnInit } from '@angular/core';
import { recipes } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 recipes1:recipes[];
  constructor(private recipeService:RecipeService) { 
    
  }

  ngOnInit(): void {
    this.recipes1=this.recipeService.getRecipes();
  }
  
}
