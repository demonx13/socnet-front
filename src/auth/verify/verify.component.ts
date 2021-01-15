import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {
  confirm = false;
  aSub: Subscription | undefined;
  ver = {uid: '', token: ''};

  constructor(private authService: AuthService, private route: ActivatedRoute) {
    this.ver.uid = this.route.snapshot.params.uid;
    this.ver.token = this.route.snapshot.params.token;
    console.log(this.ver);
  }

  ngOnInit(): void {
    this.send();
  }

  send(): void {
    this.aSub = this.authService.verify(this.ver).subscribe(
      () => this.confirm = true,
      () => this.confirm = false
    );
  }

}
