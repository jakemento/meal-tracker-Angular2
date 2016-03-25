import {Component} from 'angular2/core';
import {Meal} from './meal.model';

@Component({
  selector: 'edit-meal-details',
  inputs: ['keg'],
  template: `
  <br>
  <br>
  <h3> class="border">Edit Meal: </h3>
  <div class="meal-form">
    <input [(ngModel)]="meal.name" class="col-sm-8 input-lg"/>
    <input [(ngModel)]="meal.details" class="col-sm-8 input-lg"/>
    <input [(ngModel)]="meal.calories" class="col-sm-8 input-lg"/>
  </div>
  `
})
export class EditMealDetailsComponent {
  public meal: Meal;
}
