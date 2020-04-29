import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  public recipes: Recipe[] = [
    new Recipe('Test recipe',
              'This is test recipe',
              'https://www.momontimeout.com/wp-content/uploads/2018/11/chicken-stir-fry-733x1103.jpg'),
    new Recipe('Another Test recipe',
              'Butter panner',
              'https://holycowvegan.net/wp-content/uploads/2019/11/tofu-paneer-butter-masala-6.jpg')
    ];

  ngOnInit() {
  }

  onRecipeSelector(recipeData: Recipe) {
    this.recipeWasSelected.emit(recipeData);
  }
}
