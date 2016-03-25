import {Component, EventEmitter } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `

    <h3 class="border">Create a Meal: </h3>

      <input placeholder="Name" class="input-md" #newName>
      <input placeholder="Details" class="input-md" #newDetails>
      <input placeholder="Calories" class="input-md" #newCalories>

    <button class="btn-lg btn-danger add"(click)="addMeal(newName, newDetails, newCalories)">Add a Meal</button>

  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<String[]>;
  constructor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(userName: HTMLInputElement, userDetails: HTMLInputElement, userCalories: HTMLInputElement) {
    this.onSubmitNewMeal.emit([userName.value, userDetails.value, userCalories.value]);

    userName.value = "";
    userDetails.value = "";
    userCalories.value= "";
  }
}
