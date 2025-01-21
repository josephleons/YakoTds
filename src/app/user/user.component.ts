import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { Account } from '../model/Account';
import { User } from '../model/user';
import { response } from 'express';

@Component({
  selector: 'app-user',
  standalone: false,

  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  users: User[]=[];
  userService:UserService = inject(UserService)

  ngOnInit() {
  }

  createUserAccount(data:Account){
    this.userService.creatAccount(data);
    }

  }

