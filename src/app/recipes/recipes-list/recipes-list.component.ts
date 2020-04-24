import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.scss']
})
export class RecipesListComponent implements OnInit {
  public recipes: Recipe[] = [
    new Recipe('Chicken Stir Fry',
              'This is test recipe',
              'https://www.momontimeout.com/wp-content/uploads/2018/11/chicken-stir-fry-733x1103.jpg'),
    new Recipe('Chicken Stir Fry',
              'This is test recipe',
              'https://www.momontimeout.com/wp-content/uploads/2018/11/chicken-stir-fry-733x1103.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
