import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Type } from 'src/app/models/DialogType';
import { ErrorComponent } from 'src/app/shared/components/error/error.component';
import { InfoComponent } from 'src/app/shared/components/info/info.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  // encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit{
  form: FormGroup = this.formBuilder.group({
    username: ['admin', [Validators.required, this.noWhitespaceValidator]],
    password: ['admin', [Validators.required, this.noWhitespaceValidator]],
  });

  hidePassword = true;
  password?: string;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private translate: TranslateService,
    public dialog: MatDialog,
    private authService: AuthService
  ){}

  ngOnInit(): void {
  }

  login(): void{
    if ( this.form.valid){
      const username = this.form.value.username.trim();
      const password = this.form.value.password;

        if ( this.authService.login(username, password) ){
          this.router.navigate(['/busqueda-cajeros'])
        }else{
          this.translate.get('i18n_LOGIN.incorrect_credentials').subscribe((res: string) => {
            this.showInfoDialog(res, Type.Warning);
          });
        }
    }
  }

  showInfoDialog( text: string = '', type: Type = Type.Success ): MatDialogRef<InfoComponent>{
    return this.dialog.open( InfoComponent, {
      width: '600px',
      data: {
        text,
        type
      }
    });
  }
  showErrorDialog(): MatDialogRef<ErrorComponent>{
    return this.dialog.open( ErrorComponent, {
      width: '600px'
    });
  }

  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
}
