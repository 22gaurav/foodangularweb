import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { recipes } from '../../recipes.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
 @Input() recipe : recipes; 
 @Input() index : number;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
  
  }
 
}
