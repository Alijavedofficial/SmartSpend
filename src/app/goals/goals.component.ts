import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-goals',
  templateUrl: './goals.component.html',
  styleUrl: './goals.component.css'
})
export class GoalsComponent {
  goalForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.goalForm = this.fb.group({
      goalName: [''],
      goalAmount: [''],
      goalDate: [''],
      goalPriority: [''],
      goalCategory: [''],
      goalDescription: ['']
    })
  }


}
