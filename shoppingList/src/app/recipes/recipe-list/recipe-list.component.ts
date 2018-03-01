import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Recipe 1', 'This is a test', '../../../assets/images/AVATAR.png'),
    new Recipe('Recipe 2', 'This is a test of a 2nd recipe', '../../../assets/images/AVATAR.png')
  ];


  constructor() { }

  ngOnInit() {
  }

}
