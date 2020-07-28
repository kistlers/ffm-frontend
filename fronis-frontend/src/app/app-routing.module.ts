import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { TeamComponent } from "./pages/team/team.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";

const routes: Routes = [
  {path: "home", component: HomeComponent},
  {path: "team", component: TeamComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
