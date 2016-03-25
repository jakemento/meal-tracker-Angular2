import {Component, EventEmitter} from 'angular2/core';
import {Meal} from './meal.model';

@Component){
  selector: 'new-meal',
  outputs: ['onSubmitNewMeal'],
  template: `
  <div class="meal-form">
    <h3 class="border">Create a Meal: </h3>
    <div class="container">
      <input placeHolder="Name" class="col-sm-8 input-lg" #newName>
      <input placeHolder="Details" class="col-sm-8 input-lg" #newDetails>
      <input placeHolder="Calories" class="col-sm-8 input-lg" #newCalories>
    </div>
    <button (click)="addMeal(newName, newDetails, newCalories)" class="btn-success btn-lg add-button">Add a Meal</button>
  `
})

export class NewMealComponent {
  public onSubmitNewMeal: EventEmitter<string[]>;
  constuctor(){
    this.onSubmitNewMeal = new EventEmitter();
  }
  addMeal(mealName: HTMLInputElement, mealDetails: HTMLInputElement, mealCalories: HTMLInputElement) {
    this.onSubmitNewMeal.emit([mealName.value, meaDetails.value, mealCalories.value]);

    mealName.value = "";
    mealDetails.value ="";
    mealCalories.value="";
  }
}
