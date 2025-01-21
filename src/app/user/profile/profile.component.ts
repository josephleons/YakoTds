import { Component } from '@angular/core';
import { Account } from '../../model/Account';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-profile',
  standalone: false,
  
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
 users:Account[]=[];
  constructor(private profileService:UserService){}
  
  ngOnInit(): void {
    this.profileService.getAllUser();
  }
}
