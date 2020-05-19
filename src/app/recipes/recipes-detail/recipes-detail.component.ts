import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.scss']
})
export class RecipesDetailComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(private recipeService: RecipeService,
              private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // const id = +this.route.snapshot.params.id;
    // this.recipe = this.recipeService.getRecipe(id);

    this.route.params.subscribe(
      (param: Params) => {
        this.id = +param.id;
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
    // this.recipeService.recipeSelector.subscribe(
    //   (recipe: Recipe) => this.recipe = recipe
    // );

  }
  onAddToShoppingList() {
    this.recipeService.addInShoppingList(this.recipe.ingredients);
  }

  onEditRecipe() {
    this.router.navigate(['edit'], {relativeTo: this.route});
    // this.router.navigate(['../', this.id, 'edit'], {relativeTo: this.route});
  }

  onDeleteRecipe() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['../'], {relativeTo: this.route});
    // this.router.navigate(['recipes']);
  }
}
