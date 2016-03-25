import {Component, EventEmitter} from 'angular2/core';
import {MealListComponent} from './meal-list.component';
import {Meal} from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class="container">
    <h1 >Meal Tracker </h1>
    <meal-list
      [mealList]="meals"
      (onMealSelect)="mealWasSelected($event)">
    </meal-list>
  </div>
  `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("Fish Tacos", "Tacos with salsa, sour cream and cilantro", 330),
      new Meal("Steak", "Ribeye with mashed potatoes and green beans", 550),
      new Meal("Green Curry", "Spicy Green Curry with eggplant and chicken", 480)
    ];
  }
  mealWasSelected(clickedMeal: Meal): void {
    console.log(clickedMeal);
  }
}
