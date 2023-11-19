import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'mc-register',
  templateUrl: './register.component.html',
  standalone: true,
  imports: [ReactiveFormsModule],
})
export class RegisterComponent {
  constructor(private fb: FormBuilder) {}

  form = this.fb.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  onSubmit() {
    console.log('form', this.form.getRawValue());
  }
}
