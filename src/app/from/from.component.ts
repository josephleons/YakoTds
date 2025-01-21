import { HttpClient } from '@angular/common/http';
import { Component, Input, ViewChild } from '@angular/core';
import { FormGroup, FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-from',
  standalone: false,
  
  templateUrl: './from.component.html',
  styleUrl: './from.component.css'
})
export class FromComponent {
  constructor(private http:HttpClient){}
@ViewChild('userform') userForm!: NgForm;

// Creat Employees Account 
onAccountCreate(users:any){
  return this.http.post('https://yako-careassist-default-rtdb.firebaseio.com/users.json', users).subscribe((data)=>{
    console.log(data)
  });
}
}
