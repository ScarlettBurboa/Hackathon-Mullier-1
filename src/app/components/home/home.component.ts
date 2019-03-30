import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { Works } from '../../../models/works';
import { WORKS } from './workslist';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  works = WORKS;
  constructor() {}

  ngOnInit() {}
}
