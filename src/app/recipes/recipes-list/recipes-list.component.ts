import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  public recipes: Recipe[];

    constructor(private recipeService: RecipeService) {}
  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
}
