import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {
  user = {
    name1:'',
    email:'',
    age: null
  };
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log("Form submitted", this.user);
  }

}
