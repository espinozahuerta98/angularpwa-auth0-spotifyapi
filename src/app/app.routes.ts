import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { ArtistaComponent } from './components/artista/artista.component'
import { HomeComponent } from './components/home/home.component'
import { ProtegidaComponent } from './components/protegida/protegida.component';
import { SearchComponent } from './components/search/search.component'
import { AuthGuard } from './services/auth.guard';

export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'search', component:SearchComponent},
  {path:'protegida', component: ProtegidaComponent, canActivate: [AuthGuard]},
    {path:'artist/:id', component:ArtistaComponent},
    {path:'', pathMatch:'full', redirectTo:'home'},
    {path:'**', pathMatch:'full', redirectTo:'home'}

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }