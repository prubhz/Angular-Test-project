import { Component, OnInit, Input } from '@angular/core';
import {TableService} from '../table.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  results =[];
  constructor(private tableService: TableService){}

  ngOnInit(): void {
    this.results = this.tableService.get();
  }


}
