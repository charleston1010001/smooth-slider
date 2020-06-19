import {AfterViewChecked, Component, OnInit} from '@angular/core';
// @ts-ignore
import Chart from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
  arr = [...Array(10).keys()];
  chartArray = [0, 1, 2];
  chart1 = null;
  chart2 = null;
  chart3 = null;

  ngOnInit() {}

  ngAfterViewChecked() {
    if (!this.chart1 || !this.chart2 || !this.chart3) {
      const buyerData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'sample data',
            backgroundColor: '#ACC26D',
            borderColor: '#734921',
            pointColor: '#fff',
            pointStrokeColor: '#9DB86D',
            data: [203, 156, 99, 251, 305, 247]
          }
        ]
      };
      const buyers: any = document.getElementById('chart-0');
      this.chart1 = new Chart(buyers, {
        type: 'line',
        data: buyerData
      });

      const pieData2 = {
        datasets: [{
          data: [20, 40, 10, 30],
          backgroundColor: ['orange', 'yellow', 'red', 'green']
        }],
        labels: ['yellow', 'red', 'green', 'blue']
      };
      const countries: any = document.getElementById('chart-1');
      this.chart2 = new Chart(countries, {
        type: 'pie',
        data: pieData2
      });

      const barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'sample data 1',
            backgroundColor: '#48A497',
            strokeColor: '#48A4D1',
            data: [456, 479, 324, 569, 702, 600]
          },
          {
            label: 'sample data 2',
            backgroundColor: 'rgba(73,188,170,0.4)',
            strokeColor: 'rgba(72,174,209,0.4)',
            data: [364, 504, 605, 400, 345, 320]
          }
        ]
      };
      const income: any = document.getElementById('chart-2');
      this.chart3 = new Chart(income, {
        type: 'bar',
        data: barData
      });
      // this.chartArray = [chart1, chart2, chart3];
      // console.log(this.chartArray);
    }
  }
}
