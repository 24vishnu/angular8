import { Recipe } from './recipes.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]> ();

    public recipes: Recipe[] = [
        new Recipe('Test recipe',
                  'This is test recipe',
                  'https://www.momontimeout.com/wp-content/uploads/2018/11/chicken-stir-fry-733x1103.jpg',
                  [
                    new Ingredient('chicken', 50),
                    new Ingredient('Fish Fry', 80)
                  ]),
        new Recipe('Another Test recipe',
                  'Butter panner',
                  'https://holycowvegan.net/wp-content/uploads/2019/11/tofu-paneer-butter-masala-6.jpg',
                  [
                    new Ingredient('paneer', 100),
                    new Ingredient('dal makhani', 60)
                  ]
                  )
        ];

    constructor(private shoppingService: ShoppingListService) {}
    getRecipes() {
        // return the exect same copy of array
        return this.recipes.slice();
    }

    addInShoppingList(ingredients: Ingredient[]) {
        this.shoppingService.addIngredients(ingredients);
    }

    getRecipe(id: number) {
      return this.recipes.slice()[id];
    }

    addRecipe(newRecipe: Recipe) {
      this.recipes.push(newRecipe);
      this.recipeChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
      this.recipes[index] = newRecipe;
      this.recipeChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
      this.recipes.splice(index, 1);
      this.recipeChanged.next(this.recipes.slice());
    }

    deleteIngredient(index: number) {
    }
}
