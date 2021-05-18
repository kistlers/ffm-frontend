import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./pages/home/home.component";
import {TeamComponent} from "./pages/team/team.component";
import {PageNotFoundComponent} from "./shared/components/page-not-found/page-not-found.component";
import {SponsorenComponent} from "./pages/sponsoren/sponsoren.component";
import {SpieldatenComponent} from "./pages/spieldaten/spieldaten.component";
import {KontaktComponent} from "./pages/kontakt/kontakt.component";
import {AboutusComponent} from "./pages/aboutus/aboutus.component";
import {NewsComponent} from "./pages/news/news.component";
import {NewsDetailComponent} from "./pages/news/news-detail/news-detail.component";

const routes: Routes = [
    {path: "home", component: HomeComponent},
    {path: "team", component: TeamComponent},
    {path: "spieldaten", component: SpieldatenComponent},
    {path: "sponsoren", component: SponsorenComponent},
    {path: "kontakt", component: KontaktComponent},
    {path: "aboutus", component: AboutusComponent},
    {path: "news/:id", component: NewsDetailComponent},
    {path: "news", component: NewsComponent},
    {path: "", redirectTo: "/home", pathMatch: "full"},
    {path: "**", component: PageNotFoundComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
