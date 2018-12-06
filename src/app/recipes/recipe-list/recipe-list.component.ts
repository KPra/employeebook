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
  showInternalGraph: boolean;
  // ----------------------------------------------------------------------
  chartdata: boolean = true;

  countryCount = [];
  employeeData = [
    {
      'name': 'Email',
      'value': '8'
    },
    {
      'name': 'Swipe I/O',
      'value': '6.9'
    },
    {
      'name': 'Leave',
      'value': '3'
    }
  ];

  employeeNextLevelData = [
        {
          "value": 5174,
          "name": "2016-09-23T12:29:09.431Z"
        },
        {
          "value": 4715,
          "name": "2016-09-13T16:46:39.480Z"
        },
        {
          "value": 5852,
          "name": "2016-09-12T21:53:01.992Z"
        },
        {
          "value": 6336,
          "name": "2016-09-20T12:03:01.398Z"
        },
        {
          "value": 2780,
          "name": "2016-09-20T03:14:05.376Z"
        }
      ];

  // Chart
  view: any[] = [];
  viewDepth = [400, 300];
  showLegend = true;

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  showLabels = true;
  explodeSlices = true;
  doughnut = false;

  onSelect(event) {
    console.log(event.value.name);
    this.showInternalGraph = true;
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
    }else if (employeeValue >= 4 && employeeValue < 7) {
      return '#C7B42C';
    }else {
      return '#A10A28';
    }
  }

  initColors() {
    this.colorScheme.domain[0] = this.initializeColors(this.employeeData[0].value);
    this.colorScheme.domain[1] = this.initializeColors(this.employeeData[1].value);
    this.colorScheme.domain[2] = this.initializeColors(this.employeeData[2].value);
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
