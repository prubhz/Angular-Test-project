import { Component, OnInit } from '@angular/core';
import {TableService} from '../table.service'
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  form: FormGroup; 
  mainLimit: number;
  mainRetention: number;
  typeOfExe: string;

  constructor(private tableService: TableService){}

  ngOnInit(): void {
    this.form = new FormGroup({
      ml: new FormControl('', Validators.required),
      mr: new FormControl('', Validators.required),
      TypeOfExe: new FormControl('')
    });
  }
  onSubmit(value){
    console.log(value);
    this.tableService.add(value);


  }

}
