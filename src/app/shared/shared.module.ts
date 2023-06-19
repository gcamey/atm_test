import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { MaterialModule } from '../material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { RouterModule, Routes } from '@angular/router';
import { ConfirmDeleteComponent } from './components/confirm-delete/confirm-delete.component';
import { InfoComponent } from './components/info/info.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    LoadingComponent,
    ConfirmDeleteComponent,
    InfoComponent,
    ErrorComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    TranslateModule.forRoot()
  ],
  exports:[
    LoadingComponent,
    ConfirmDeleteComponent,
    InfoComponent,
    ErrorComponent,
    HeaderComponent
  ]
})
export class SharedModule { }
