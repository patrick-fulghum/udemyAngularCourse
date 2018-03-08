import { Component, OnInit, Input, ElementRef, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();

  @Input() recipeDetails: Recipe;

  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'This is a test', '../../../assets/images/AVATAR.png'),
    new Recipe('Recipe 2', 'This is a test of a 2nd recipe', '../../../assets/images/AVATAR.png')
  ];

  constructor() { }

  ngOnInit() {
  }

  getRecipeDetails() {
    return this.recipeDetails;
  }

  onRecipeSelected(recipeElement: Recipe) {
    this.recipeWasSelected.emit(recipeElement);
  }

}
