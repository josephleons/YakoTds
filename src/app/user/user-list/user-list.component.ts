import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../service/user.service';
import { User } from '../../model/user';

@Component({
  selector: 'app-user-list',
  standalone: false,
  
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent implements OnInit{
  users:User[]=[];
  userService:UserService = inject(UserService);
  
  ngOnInit(): void {
    this.fetchUsers();
 
  }

  private fetchUsers(){
    this.userService.getAllUser()
    .subscribe((response)=>{
      this.users = response;
    })
  }


  ondeleteRecord(id:string | undefined){
    this.userService.DeleteUser(id);
  }
}
