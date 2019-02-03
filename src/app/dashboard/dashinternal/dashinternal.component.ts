import { Employee } from './../employee';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dashinternal',
  templateUrl: './dashinternal.component.html',
  styleUrls: ['./dashinternal.component.css']
})
export class DashinternalComponent implements OnInit {
  @Input() employee: Employee;
  constructor() { }
  selectedStatus: boolean;
  ngOnInit() {
  }

  divSelected(selectedStatus) {
    this.selectedStatus = selectedStatus;
  }

}
