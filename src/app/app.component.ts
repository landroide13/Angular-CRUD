import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { Employee } from '../app/Models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  EmployeeList: Employee[] = [
    {id: 1, name: 'Eltro', country: 'NZ'},
    {id: 2, name: 'Ruy', country: 'JP'},
    {id: 3, name: 'Ken', country: 'USA'},
    {id: 4, name: 'Blank', country: 'BR'},
  ]

  selectedEm: Employee = new Employee();

  AddorEdit(){
    if(this.selectedEm.id === 0){
      this.selectedEm.id = this.EmployeeList.length + 1;
      this.EmployeeList.push(this.selectedEm);
    }
    this.selectedEm = new Employee();
  }

  openEdit(employee: Employee){
    this.selectedEm = employee;
  }

  delete(){
    this.EmployeeList = this.EmployeeList.filter(em => {
      return em !== this.selectedEm;
    })
    this.selectedEm = new Employee();
  }
  
}
