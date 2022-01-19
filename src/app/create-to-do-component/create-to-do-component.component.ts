import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-to-do-component',
  templateUrl: './create-to-do-component.component.html',
  styleUrls: ['./create-to-do-component.component.scss'],
})
export class CreateToDoComponentComponent implements OnInit {
  submitted = false;
  constructor(private fb: FormBuilder) {}
  taskFrom: FormGroup;
  ngOnInit(): void {
    this.taskFrom = this.fb.group({
      taskname: ['', Validators.required],
      taskdiscription: ['', Validators.required],
      repeattask: ['', Validators.required],
    });
  }
  onFromSumbit() {
    this.submitted = true;
    if (this.taskFrom.invalid) {
      return;
    }
    console.log('done');
  }
  get f() {
    return this.taskFrom.controls;
  }
}
