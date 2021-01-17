import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})

export class TableService{
    table =[];

    get() {
        return this.table;
    }
    add(item){
        this.table.push(item);
        console.log(this.table[0]);
    }

}

