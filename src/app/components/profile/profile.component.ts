import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router'; // Import Router
import { UserDataService } from '../../shared/services/user-data.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  
  userData: any = null;
  @Output() onEditClick = new EventEmitter<void>();

  constructor(
    private userService: UserDataService,
    private router: Router // Inject Router
  ) {}

  ngOnInit() {
    this.userService.userData$.subscribe(data => {
      this.userData = data;
    });
  }

  edit() {
    // Navigate to form with a state object indicating "Edit Mode"
    this.router.navigate(['/form'], { state: { isEdit: true } });
  }

  printProfile() {
    window.print();
  }
}