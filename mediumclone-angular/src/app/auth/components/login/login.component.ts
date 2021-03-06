import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loginAction } from '../../store/actions/login.action';

import {
  isSubmittingSelector,
  validationErrorsSelector,
} from '../../store/selectors';
import { AppStateInterface } from '../../types/appState.interface';
import { BackendErrorsInterface } from '../../types/backendErrors.interface';
import { LoginRequestInterface } from '../../types/loginRequest.interface';

@Component({
  selector: 'mc-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isSubmitting$: Observable<boolean>;
  backendErrors$: Observable<BackendErrorsInterface | null>;

  constructor(
    private fb: FormBuilder,
    private store: Store<AppStateInterface>
  ) {}

  ngOnInit(): void {
    this.initializeForm(), this.initializeValues();
  }

  initializeValues(): void {
    //Here we get the values from the selector
    (this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))),
      (this.backendErrors$ = this.store.pipe(select(validationErrorsSelector)));
  }

  initializeForm(): void {
    console.log('Initialize Form');
    this.form = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const request: LoginRequestInterface = {
      user: this.form.value,
    };
    this.store.dispatch(loginAction({ request }));
  }
}
