import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginButtonComponent } from './login-button/login-button.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { MatButtonModule, MatIconModule, MatDialogModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  declarations: [
    LoginButtonComponent,
    LoginDialogComponent
  ],
  exports: [
    LoginButtonComponent,
    LoginDialogComponent
  ],
  entryComponents: [
    LoginButtonComponent,
    LoginDialogComponent
  ]
})
export class LoginModule { }
