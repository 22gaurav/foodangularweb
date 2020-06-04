import { Component, OnInit,
   ElementRef, ViewChild} from '@angular/core';

import{ Ingredient } from "../../shared/ingredient.model"
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
@ViewChild('nameInput')  nameInputRef:ElementRef;
@ViewChild('amountInput')  amountInputRef:ElementRef;
c:number=10;
  constructor( private slService:ShoppingListService) { }

  ngOnInit(): void {
  }
onAddItem(){
const ingName=this.nameInputRef.nativeElement.value;
const ingAmount=this.amountInputRef.nativeElement.value;
this.c=ingAmount+this.c;
const newIngredient=new Ingredient(ingName,this.c);
this.slService.addIngredient(newIngredient);
}
}
