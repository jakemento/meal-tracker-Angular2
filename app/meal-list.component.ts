import {Component, EventEmitter } from 'angular2/core';
import {MealComponent } from './meal.component';
import {Meal } from './meal.model';
import {EditMealDetailsComponent} from './edit-meal-details.component';
// import {NewMealComponent} from './new-meal.component';
// import {CaloriePipe} from './calorie.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriePipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `

  <div class="meallister">
    <label class="whiteText"> sort by Calories </label>
    <div class ="biggerFont">
      <select (change)="onChange($event.target.value)">
        <option value="lessthan300">Less than 300 Calories</option>
        <option value="moreThan300">More Than 300 Calories</option>
        <option value="all" selected="selected">Show All</option>
      </select>
    </div>
    <meal-display *ngFor="#currentMeal of mealList | calorie:filterDone"
      (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal">
    </meal-display>
  </div>
  <div class="border">
    <div class="col-lg-6">
      <center> <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal> </center>
    </div>

    <div class="col-lg-6">
      <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
      </edit-meal-details>
    </div>
  </div>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterDone: string ="all";

  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal([name, details, calories]): void {
    this.mealList.push(
      new Meal(name, details, calories)
    );
  }
  onChange(filterOption) {
    this.filterDone = filterOption;
  }
}
