import { Component, OnInit, ViewChild, EventEmitter, Output, OnChanges } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeListComponent } from './recipe-list/recipe-list.component';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  @ViewChild(RecipeListComponent)

  private recipeList: RecipeListComponent;
  private selectedRecipe: Recipe;

  constructor() { }

  ngOnInit() {
  }

}
