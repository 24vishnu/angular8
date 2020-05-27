import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipes.model';
import { AuthService } from '../auth/auth.service';

@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(
        private http: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService) {}

    storeRecipe() {
        const recipes = this.recipeService.getRecipes();
        return this.http.put('https://ng-recipe-course-6f4b8.firebaseio.com/recipes.json', recipes)
        .subscribe(
            response => {
                console.log(response);
            }
        );
    }

    fetchData() {
        return this.authService.user.pipe(
                take(1),
                exhaustMap(user => {
                    return this.http.get<Recipe[]>(
                        'https://ng-recipe-course-6f4b8.firebaseio.com/recipes.json',
                        {
                            params: new HttpParams().set('auth', user.token)
                        }
                        );
                }), map( recipes => {
                    return recipes.map( recipe => {
                        return {
                            ...recipe,
                            ingredients: recipe.ingredients ? recipe.ingredients : []
                        };
                    });
                }),
                tap(
                    recipes => this.recipeService.setRecipes(recipes)
                ));
    }

}
