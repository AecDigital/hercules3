import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '../../shared/services/authentication.service';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html'
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  user: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
) { 

  // redirect to home if already logged in
//    if (this.authenticationService.user) {
//      this.router.navigate(['/userPage']);
//  }
}


  ngOnInit(): void {
    this.authenticationService.logout();
    
    this.loginForm = this.formBuilder.group({
      user: ['', Validators.required],
      pass: ['', Validators.required]
  });

  // get return url from route parameters or default to '/'
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || 'herramientas/admin/datos-maestros/temas';
}

// convenience getter for easy access to form fields
get f() { return this.loginForm.controls; }

onSubmit() {
  this.submitted = true;

  // stop here if form is invalid
  if (this.loginForm.invalid) {
      return;
  }

  this.loading = true;
  this.authenticationService.login(this.f.user.value, this.f.pass.value)
      .pipe(first())
      .subscribe(
          data => {
            this.authenticationService.user.subscribe(usr => {
              this.user = usr;
              sessionStorage.setItem('session', JSON.stringify(this.user))
            });
              this.router.navigate([this.returnUrl], { state: { ...this.user } });
          },
          error => {
              this.loading = false;
          });
}
}



      

