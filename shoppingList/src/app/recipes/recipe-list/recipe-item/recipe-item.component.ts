import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  @Input() recipe: Recipe;

  @Output() recipeDetails: EventEmitter<void> = new EventEmitter<void>();

  thisRecipe: Recipe;

  constructor() { }

  ngOnInit() {
    this.thisRecipe = this.recipe;
  }

  onRecipeSelection() {
    this.recipeDetails.emit();
  }

}
