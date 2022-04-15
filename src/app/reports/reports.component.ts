import { Component, OnInit } from '@angular/core';
import data from '../../assets/json/data.json';

enum Timeframe {
  daily,
  weekly,
  monthly,
}

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss'],
})
export class ReportsComponent implements OnInit {
  reports = data;
  selectedTimeframe: keyof typeof Timeframe = 'weekly';

  constructor() {}

  ngOnInit(): void {}
}
