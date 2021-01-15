import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Subscription} from 'rxjs';
import {ProfileService} from '../services/profile.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  form!: FormGroup;
  errorRes: object | null = null;
  aSub!: Subscription;
  id = 10;

  constructor(private fb: FormBuilder, private authService: ProfileService) { }

  ngOnInit(): void {
    this.form = this.fb.group( {
      username : [null, [Validators.required, Validators.minLength(4)]],
      first_name: [null, [Validators.required]],
      middle_name: [null, [Validators.required]],
      last_name: [null, [Validators.required]],
      phone: [null, [Validators.required]],
      bio: [null],
      github: [null],
      birthday: [null],
      gender: [null],
      technology: [[1], ], // this.fb.array([null, [Validators.required]]),
    });
  }

  submit(): void {
    this.aSub = this.authService.put(this.form.value, this.id).subscribe(
      () => alert('Save'),
      error => console.log(error.error)
    );
  }
}
