import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ATM Automation';

  constructor(
    private translate: TranslateService,
    private http: HttpClient) {

    let idioma: any = this.translate.getBrowserLang();
    this.translate.resetLang(idioma);
    this.translate.currentLoader = new TranslateHttpLoader(this.http, "./assets/i18n/", ".json");
    this.translate.reloadLang(idioma);
    this.translate.setDefaultLang(idioma == "en" ? "en" : "es");

  }
}
