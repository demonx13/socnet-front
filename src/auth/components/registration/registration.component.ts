import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AuthService} from '../../auth.service';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;
  errorRes: object | null = null;
  aSub!: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      username: new FormControl(
        null, [Validators.required, Validators.minLength(4)]
      ),
      email: new FormControl(
        null, [Validators.required, Validators.email, Validators.minLength(4)]
      ),
      password: new FormControl(
        null, [Validators.required, Validators.minLength(8)]
      )
    });
  }

  submit(): void {
    this.aSub = this.authService.registration(this.form.value).subscribe(
      () => alert('Send email'),
        (error: any) => console.log(error)
    );
  }
}

