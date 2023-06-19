import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './pages/login/login.component';
import { MaterialModule } from './material/material.module';
import { MatTableFilterModule } from 'mat-table-filter';
import { MatPaginatorIntl } from "@angular/material/paginator";
import { MatpaginatorintlService } from './core/services/matpaginatorintl.service';
import { AtmSearchComponent } from './pages/atm-search/atm-search.component';
import { AtmControlComponent } from './pages/atm-control/atm-control.component';
import { AuthService } from './core/services/auth.service';
import { AuthGuard } from './core/guards/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AtmSearchComponent,
    AtmControlComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatTableFilterModule,
    SharedModule,
    TranslateModule.forRoot()
  ],
  providers: [
    AuthService, 
    AuthGuard,
    { provide: MatPaginatorIntl, useClass: MatpaginatorintlService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
