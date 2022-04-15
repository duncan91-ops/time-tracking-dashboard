import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss'],
})
export class ReportComponent implements OnInit {
  @Input() report!: {
    title: string;
    icon: string;
    timeframes: {
      daily: {
        current: number;
        previous: number;
      };
      weekly: {
        current: number;
        previous: number;
      };
      monthly: {
        current: number;
        previous: number;
      };
    };
  };

  @Input() selectedTimeframe!: keyof typeof this.report.timeframes;

  constructor() {}

  ngOnInit(): void {}

  getBackground() {
    if (this.report.title === 'Work') {
      return 'yellow';
    } else if (this.report.title === 'Play') {
      return 'blue';
    } else if (this.report.title === 'Study') {
      return 'red';
    } else if (this.report.title === 'Exercise') {
      return 'green';
    } else if (this.report.title === 'Social') {
      return 'violet';
    } else {
      return 'orange';
    }
  }
}
