
import { Component, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../../service/user.service';
import { Account } from '../../model/Account';

@Component({
  selector: 'app-create-account',
  standalone: false,
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})


export class CreateAccountComponent {
@ViewChild('userForm')form:NgForm
@Output() EmmitUserData:EventEmitter <Account> = new EventEmitter<Account>();

  onSaveFormUser(userForm){
      this.EmmitUserData.emit(userForm);
      console.log(userForm)
  }
  
}
