import {Component} from 'angular2/core';
import {Meal } from './meal.model';

@Component ({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <div class="container" class="border">
    <div class="col-md-1" class="names">
      <label>
        Meal Name: {{ meal.name }}
      </label>
    </div>
  </div>
  `
})

export class MealComponent {
  public meal: Meal;
}
