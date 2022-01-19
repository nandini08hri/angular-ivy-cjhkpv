import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-done-list-component',
  templateUrl: './done-list-component.component.html',
  styleUrls: ['./done-list-component.component.scss'],
})
export class DoneListComponentComponent implements OnInit {
  constructor() {}
  check: boolean = false;
  ngOnInit(): void {}
  OnDefaultUserChange() {}
}
