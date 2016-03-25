import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';
import { EditMealDetailsComponent } from './edit-meal-details.component';
import { NewMealComponent } from './new-meal.component';
import { CaloriePipe } from './calorie.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  outputs: ['onMealSelect'],
  pipes: [CaloriePipe],
  directives: [MealComponent, EditMealDetailsComponent, NewMealComponent],
  template: `


    <label class="whiteText"> sort by Calories </label>

      <select (change)="onChange($event.target.value)">
        <option value="lessThan300">Less than 300 Calories</option>
        <option value="moreThan300">More Than 300 Calories</option>
        <option value="all"> Show All</option>
      </select>

    <meal-display *ngFor="#currentMeal of mealList | calorie:filterDone"
      (click)="mealClicked(currentMeal)"
      [class.selected]="currentMeal === selectedMeal"
      [meal]="currentMeal">
    </meal-display>

    <edit-meal-details *ngIf="selectedMeal" [meal]="selectedMeal">
    </edit-meal-details>
    <new-meal (onSubmitNewMeal)="createMeal($event)"></new-meal>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public onMealSelect: EventEmitter<Meal>;
  public selectedMeal: Meal;
  public filterDone: string = "all";

  constructor() {
    this.onMealSelect = new EventEmitter();
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
    this.onMealSelect.emit(clickedMeal);
  }
  createMeal([mealName, mealDetails, mealCalories]): void {
    this.mealList.push(
      new Meal(mealName, mealDetails, mealCalories)
    );
  }
  onChange(filterOption) {
    this.filterDone = filterOption;
  }
}
