import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeItemComponent} from './recipe-item/recipe-item.component';
import {FormControl} from '@angular/forms';
import {NgxChartsModule} from '@swimlane/ngx-charts';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() receivedRecipe: RecipeItemComponent;
  @Output() emitSelectedRecipeFromList = new EventEmitter();
  @Output() emitShowDetails = new EventEmitter();
  display: boolean;
  @Input() showDetails = true;
  selectedStatus: boolean;
  popoverDisabled = false;
  isEmitting = false;
  position = new FormControl('after');
  bellstatus: boolean;
  @Input() highRiskColor;
  name = '';
  value = '';
  // ----------------------------------------------------------------------
  chartdata: boolean = true;

  countryCount = [];
  employeeData: any;

  employeeNextLevelData: any[];

  // Chart
  view: any[] = [];
  viewDepth = [380, 300];
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  showLabels = true;
  explodeSlices = true;
  doughnut = false;

  onSelect(event) {
    console.log(event.value.name);
    if(event.value.name === 'Email') {
      this.employeeNextLevelData = [{
        name: this.receivedRecipe.name, series:
          [{name: this.receivedRecipe.email_detailed[0].data, value: this.receivedRecipe.email_detailed[0].rating}, {name: this.receivedRecipe.email_detailed[1].data, value: this.receivedRecipe.email_detailed[1].rating}, {name: this.receivedRecipe.email_detailed[2].data, value: this.receivedRecipe.email_detailed[2].rating}, {name: this.receivedRecipe.email_detailed[3].data, value: this.receivedRecipe.email_detailed[3].rating},
          {name: this.receivedRecipe.email_detailed[4].data, value: this.receivedRecipe.email_detailed[4].rating}]
      }];
      this.name = 'Date';
      this.value = 'Rating';
    }else if (event.value.name === 'Leave'){
      this.employeeNextLevelData = [{
        name: this.receivedRecipe.name, series:
          [{name: this.receivedRecipe.leave_detailed[0].data, value: this.receivedRecipe.leave_detailed[0].rating},{name: this.receivedRecipe.leave_detailed[1].data, value: this.receivedRecipe.leave_detailed[1].rating} , {name: this.receivedRecipe.leave_detailed[2].data, value: this.receivedRecipe.leave_detailed[2].rating}, {name: this.receivedRecipe.leave_detailed[3].data, value: this.receivedRecipe.leave_detailed[3].rating},
          {name: this.receivedRecipe.leave_detailed[4].data, value: this.receivedRecipe.leave_detailed[4].rating}, {name: this.receivedRecipe.leave_detailed[5].data, value: this.receivedRecipe.leave_detailed[5].rating}, {name: this.receivedRecipe.leave_detailed[6].data, value: this.receivedRecipe.leave_detailed[6].rating}, {name: this.receivedRecipe.leave_detailed[7].data, value: this.receivedRecipe.leave_detailed[7].rating},
            {name: this.receivedRecipe.leave_detailed[8].data, value: this.receivedRecipe.leave_detailed[8].rating},{name: this.receivedRecipe.leave_detailed[9].data, value: this.receivedRecipe.leave_detailed[9].rating}, {name: this.receivedRecipe.leave_detailed[10].data, value: this.receivedRecipe.leave_detailed[10].rating}
            ]
      }];
      this.name = 'Date';
      this.value = 'Availability';
    }else if(event.value.name === 'Swipe I/O'){
      this.employeeNextLevelData = [{
        name: this.receivedRecipe.name, series:
          [{name: this.receivedRecipe.sio_detailed[0].data, value: this.receivedRecipe.sio_detailed[0].rating}, {name: this.receivedRecipe.sio_detailed[1].data, value: this.receivedRecipe.sio_detailed[1].rating}, {name: this.receivedRecipe.sio_detailed[2].data, value: this.receivedRecipe.sio_detailed[2].rating}, {name: this.receivedRecipe.sio_detailed[3].data, value: this.receivedRecipe.sio_detailed[3].rating},
          {name: this.receivedRecipe.sio_detailed[4].data, value: this.receivedRecipe.sio_detailed[4].rating}, {name: this.receivedRecipe.sio_detailed[5].data, value: this.receivedRecipe.sio_detailed[5].rating}, {name: this.receivedRecipe.sio_detailed[6].data, value: this.receivedRecipe.sio_detailed[6].rating}, {name: this.receivedRecipe.sio_detailed[7].data, value: this.receivedRecipe.sio_detailed[7].rating},
            {name: this.receivedRecipe.sio_detailed[8].data, value: this.receivedRecipe.sio_detailed[8].rating},{name: this.receivedRecipe.sio_detailed[9].data, value: this.receivedRecipe.sio_detailed[9].rating},{name: this.receivedRecipe.sio_detailed[10].data, value: this.receivedRecipe.sio_detailed[10].rating}
          ]
      }];
      this.name = 'Date';
      this.value = 'Duration';
    }else if(event.value.name === 'IdleTime'){
      this.employeeNextLevelData = [{
        name: this.receivedRecipe.name, series:
          [{name: this.receivedRecipe.idle_detailed[0].data, value: this.receivedRecipe.idle_detailed[0].rating}, {name: this.receivedRecipe.idle_detailed[1].data, value: this.receivedRecipe.idle_detailed[1].rating}, {name: this.receivedRecipe.idle_detailed[2].data, value: this.receivedRecipe.idle_detailed[2].rating}, {name: this.receivedRecipe.idle_detailed[3].data, value: this.receivedRecipe.idle_detailed[3].rating},
            {name: this.receivedRecipe.idle_detailed[4].data, value: this.receivedRecipe.idle_detailed[4].rating}, {name: this.receivedRecipe.idle_detailed[5].data, value: this.receivedRecipe.idle_detailed[5].rating}, {name: this.receivedRecipe.idle_detailed[6].data, value: this.receivedRecipe.idle_detailed[6].rating}, {name: this.receivedRecipe.idle_detailed[7].data, value: this.receivedRecipe.idle_detailed[7].rating},
            {name: this.receivedRecipe.idle_detailed[8].data, value: this.receivedRecipe.idle_detailed[8].rating},{name: this.receivedRecipe.idle_detailed[9].data, value: this.receivedRecipe.idle_detailed[9].rating},{name: this.receivedRecipe.idle_detailed[10].data, value: this.receivedRecipe.idle_detailed[10].rating}
          ]
      }];
      this.name = 'Date';
      this.value = 'Hours';
    }
  }
  // ----------------------------------------------------------------------
  constructor() { }

  ngOnInit() {
  }

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
    this.colorScheme.domain[0] = this.initializeColors(this.employeeData[0].value);
    this.colorScheme.domain[1] = this.initializeColors(this.employeeData[1].value);
    this.colorScheme.domain[2] = this.initializeColors(this.employeeData[2].value);
    this.colorScheme.domain[3] = this.initializeColors(this.employeeData[3].value);
  }

  emitSelectedRecipe(data) {
    console.log('received ' + data.recipe.name);
    this.bellstatus = true;
    this.emitSelectedRecipeFromList.emit(data);
  }

  divSelected(selectedStatus) {
    this.selectedStatus = selectedStatus;
  }

  disableCardAndDisplayDetails() {
    if (!this.bellstatus) {
      if (this.popoverDisabled === false) {
        console.log('popoverDisabled true');
        this.popoverDisabled = true;
        this.isEmitting = true;
        this.emitShowDetails.emit('show');

        this.employeeData = [
          {
            'name': 'Email',
            'value': this.receivedRecipe.email_cumulative
          },
          {
            'name': 'Swipe I/O',
            'value': this.receivedRecipe.sio_cumulative
          },
          {
            'name': 'Leave',
            'value': this.receivedRecipe.leave_cumulative
          },
          {
            'name': 'IdleTime',
            'value': this.receivedRecipe.idle_cumulative
          }
        ];
        this.initColors();
      }
    }
    this.bellstatus = false;
    // else {
    //   console.log('popoverDisabled false');
    //   this.popoverDisabled = false;
    // }
  }

  enableCardAndHideDetails(){
    console.log('enableCardAndHideDetails called!')
    if(this.popoverDisabled === true){
      console.log('popoverDisabled false');
      this.popoverDisabled = false;
      this.isEmitting = false;
      this.emitShowDetails.emit('dshow');
    }
  }
}
