import { FormControl } from '@angular/forms';
import { SIORating } from './siorating';
import { EmailRating } from './emailrating';
import { LeaveRating } from './leaverating';
import { Employee } from './employee';
import { RecipeItemComponent } from './../recipes/recipe-list/recipe-item/recipe-item.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  selectedStatus: boolean;
  position = new FormControl('after');
  display: boolean;

  view: any[] = [];
	colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

  showLegend = true;
   showLabels = true;
  explodeSlices = true;
  doughnut = false;

  constructor() { }

  ngOnInit() {
    this.initColors();
  }

  divSelected(selectedStatus) {
    this.selectedStatus = selectedStatus;
  }

  displayChild(){
    if(this.display){
      this.display = false;
    }else{
      this.display = true;
    }
  }

  public topEmployee = new Employee('Richard', 'Senior Manager', '12/01/2018', 'Cloud Account', 'assets/image1.png',7, 5, 4, false, false, 7, [new EmailRating(1, '20/11/2018'), 
new EmailRating(0.5, '22/11/2018'), new EmailRating(-0.5, '18/11/2018'), new EmailRating(-0.2, '24/11/2018'), 
new EmailRating(-1, '26/11/2018')], 7, [new LeaveRating(10, '20/11/2018'), new LeaveRating(0, '21/11/2018'),
new LeaveRating(10, '22/11/2018'), new LeaveRating(10, '23/11/2018'), new LeaveRating(10, '24/11/2018'),
new LeaveRating(10, '25/11/2018'), new LeaveRating(10, '26/11/2018'), new LeaveRating(0, '27/11/2018'),
new LeaveRating(10, '28/11/2018'), new LeaveRating(10, '29/11/2018'), new LeaveRating(10, '30/11/2018')], 7, [
  new SIORating(8, '20/11/2018'), new SIORating(8, '21/11/2018'), new SIORating(8, '22/11/2018'), new SIORating(8, '23/11/2018'),
  new SIORating(6, '24/11/2018'), new SIORating(6, '25/11/2018'), new SIORating(6, '26/11/2018'), new SIORating(5, '27/11/2018'),
  new SIORating(5, '28/11/2018'), new SIORating(5, '29/11/2018'), new SIORating(5, '30/11/2018')
], [new Employee('James', 'Cloud Designer', '12/01/2018', 'Cloud DevOps', 'assets/image1.png',8, 8, 8, false, false, 7, [new EmailRating(1, '20/11/2018'), 
new EmailRating(0.5, '22/11/2018'), new EmailRating(-0.5, '18/11/2018'), new EmailRating(-0.2, '24/11/2018'), 
new EmailRating(-1, '26/11/2018')], 7, [new LeaveRating(10, '20/11/2018'), new LeaveRating(0, '21/11/2018'),
new LeaveRating(10, '22/11/2018'), new LeaveRating(10, '23/11/2018'), new LeaveRating(10, '24/11/2018'),
new LeaveRating(10, '25/11/2018'), new LeaveRating(10, '26/11/2018'), new LeaveRating(0, '27/11/2018'),
new LeaveRating(10, '28/11/2018'), new LeaveRating(10, '29/11/2018'), new LeaveRating(10, '30/11/2018')], 7, [
  new SIORating(8, '20/11/2018'), new SIORating(8, '21/11/2018'), new SIORating(8, '22/11/2018'), new SIORating(8, '23/11/2018'),
  new SIORating(6, '24/11/2018'), new SIORating(6, '25/11/2018'), new SIORating(6, '26/11/2018'), new SIORating(5, '27/11/2018'),
  new SIORating(5, '28/11/2018'), new SIORating(5, '29/11/2018'), new SIORating(5, '30/11/2018')
], [new Employee('Lily', 'Java Developer', '12/01/2018', 'Cloud DevOps', 'assets/image11.jpg',8, 8, 8, false, false, 7, [new EmailRating(1, '20/11/2018'), 
new EmailRating(0.5, '22/11/2018'), new EmailRating(-0.5, '18/11/2018'), new EmailRating(-0.2, '24/11/2018'), 
new EmailRating(-1, '26/11/2018')], 7, [new LeaveRating(10, '20/11/2018'), new LeaveRating(0, '21/11/2018'),
new LeaveRating(10, '22/11/2018'), new LeaveRating(10, '23/11/2018'), new LeaveRating(10, '24/11/2018'),
new LeaveRating(10, '25/11/2018'), new LeaveRating(10, '26/11/2018'), new LeaveRating(0, '27/11/2018'),
new LeaveRating(10, '28/11/2018'), new LeaveRating(10, '29/11/2018'), new LeaveRating(10, '30/11/2018')], 7, [
  new SIORating(8, '20/11/2018'), new SIORating(8, '21/11/2018'), new SIORating(8, '22/11/2018'), new SIORating(8, '23/11/2018'),
  new SIORating(6, '24/11/2018'), new SIORating(6, '25/11/2018'), new SIORating(6, '26/11/2018'), new SIORating(5, '27/11/2018'),
  new SIORating(5, '28/11/2018'), new SIORating(5, '29/11/2018'), new SIORating(5, '30/11/2018')
], []), new Employee('Snape', 'UI Developer', '12/01/2018', 'Cloud DevOps', 'assets/image1.png',8, 8, 8, false, false, 7, [new EmailRating(1, '20/11/2018'), 
new EmailRating(0.5, '22/11/2018'), new EmailRating(-0.5, '18/11/2018'), new EmailRating(-0.2, '24/11/2018'), 
new EmailRating(-1, '26/11/2018')], 7, [new LeaveRating(10, '20/11/2018'), new LeaveRating(0, '21/11/2018'),
new LeaveRating(10, '22/11/2018'), new LeaveRating(10, '23/11/2018'), new LeaveRating(10, '24/11/2018'),
new LeaveRating(10, '25/11/2018'), new LeaveRating(10, '26/11/2018'), new LeaveRating(0, '27/11/2018'),
new LeaveRating(10, '28/11/2018'), new LeaveRating(10, '29/11/2018'), new LeaveRating(10, '30/11/2018')], 7, [
  new SIORating(8, '20/11/2018'), new SIORating(8, '21/11/2018'), new SIORating(8, '22/11/2018'), new SIORating(8, '23/11/2018'),
  new SIORating(6, '24/11/2018'), new SIORating(6, '25/11/2018'), new SIORating(6, '26/11/2018'), new SIORating(5, '27/11/2018'),
  new SIORating(5, '28/11/2018'), new SIORating(5, '29/11/2018'), new SIORating(5, '30/11/2018')
], [])]), new Employee('Harry', 'DB Developer', '12/01/2018', 'Cloud DevOps', 'assets/image1.png',8, 8, 8, false, false, 7, [new EmailRating(1, '20/11/2018'), 
new EmailRating(0.5, '22/11/2018'), new EmailRating(-0.5, '18/11/2018'), new EmailRating(-0.2, '24/11/2018'), 
new EmailRating(-1, '26/11/2018')], 7, [new LeaveRating(10, '20/11/2018'), new LeaveRating(0, '21/11/2018'),
new LeaveRating(10, '22/11/2018'), new LeaveRating(10, '23/11/2018'), new LeaveRating(10, '24/11/2018'),
new LeaveRating(10, '25/11/2018'), new LeaveRating(10, '26/11/2018'), new LeaveRating(0, '27/11/2018'),
new LeaveRating(10, '28/11/2018'), new LeaveRating(10, '29/11/2018'), new LeaveRating(10, '30/11/2018')], 7, [
  new SIORating(8, '20/11/2018'), new SIORating(8, '21/11/2018'), new SIORating(8, '22/11/2018'), new SIORating(8, '23/11/2018'),
  new SIORating(6, '24/11/2018'), new SIORating(6, '25/11/2018'), new SIORating(6, '26/11/2018'), new SIORating(5, '27/11/2018'),
  new SIORating(5, '28/11/2018'), new SIORating(5, '29/11/2018'), new SIORating(5, '30/11/2018')
], [new Employee('Ron', 'Backend Developer', '12/01/2018', 'Cloud DevOps', 'assets/image1.png',8, 8, 8, false, false, 7, [new EmailRating(1, '20/11/2018'), 
new EmailRating(0.5, '22/11/2018'), new EmailRating(-0.5, '18/11/2018'), new EmailRating(-0.2, '24/11/2018'), 
new EmailRating(-1, '26/11/2018')], 7, [new LeaveRating(10, '20/11/2018'), new LeaveRating(0, '21/11/2018'),
new LeaveRating(10, '22/11/2018'), new LeaveRating(10, '23/11/2018'), new LeaveRating(10, '24/11/2018'),
new LeaveRating(10, '25/11/2018'), new LeaveRating(10, '26/11/2018'), new LeaveRating(0, '27/11/2018'),
new LeaveRating(10, '28/11/2018'), new LeaveRating(10, '29/11/2018'), new LeaveRating(10, '30/11/2018')], 7, [
  new SIORating(8, '20/11/2018'), new SIORating(8, '21/11/2018'), new SIORating(8, '22/11/2018'), new SIORating(8, '23/11/2018'),
  new SIORating(6, '24/11/2018'), new SIORating(6, '25/11/2018'), new SIORating(6, '26/11/2018'), new SIORating(5, '27/11/2018'),
  new SIORating(5, '28/11/2018'), new SIORating(5, '29/11/2018'), new SIORating(5, '30/11/2018')
], [])])]);

employeeData = [
  {
    'name': 'Team Email',
    'value': this.topEmployee.team_email_cumulative
  },
  {
    'name': 'Team Swipe I/O',
    'value': this.topEmployee.team_leave_cumulative
  },
  {
    'name': 'Team Leave',
    'value': this.topEmployee.team_sio_cumulative
  }
];

initializeColors(employeeValue) {
  // email check
  console.log('>>>>>>>>>>>>> ' + employeeValue);
  if (employeeValue >= 7 && employeeValue <= 10) {
    return '#5AA454';
  }else if (employeeValue > 4 && employeeValue < 7) {
    return '#C7B42C';
  }else {
    return '#A10A28';
  }
}

initColors() {
  this.colorScheme.domain[0] = this.initializeColors(this.topEmployee.team_email_cumulative);
  this.colorScheme.domain[1] = this.initializeColors(this.topEmployee.team_leave_cumulative);
  this.colorScheme.domain[2] = this.initializeColors(this.topEmployee.team_sio_cumulative);
}
}
