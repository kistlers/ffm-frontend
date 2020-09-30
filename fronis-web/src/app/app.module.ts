import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./pages/home/home.component";
import { TeamComponent } from "./pages/team/team.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";
import { SpieldatenComponent } from "./pages/spieldaten/spieldaten.component";
import { NewsComponent } from "./pages/news/news.component";
import { AboutusComponent } from "./pages/aboutus/aboutus.component";
import { KontaktComponent } from "./pages/kontakt/kontakt.component";
import { SponsorenComponent } from "./pages/sponsoren/sponsoren.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TeamTableComponent } from "./pages/team/team-table/team-table.component";
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        TeamComponent,
        PageNotFoundComponent,
        SpieldatenComponent,
        NewsComponent,
        AboutusComponent,
        KontaktComponent,
        SponsorenComponent,
        TeamTableComponent,
        PlayerRowComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: httpTranslateLoader,
                deps: [HttpClient]
            }
        }),
        FormsModule,
        ReactiveFormsModule,
        MatDialogModule,
        BrowserAnimationsModule,
        MatButtonModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}

export function httpTranslateLoader(http: HttpClient): TranslateHttpLoader {
    return new TranslateHttpLoader(http);
}
