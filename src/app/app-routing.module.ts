import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoutingModule } from 'src/auth/auth-routing.module';
import { ProfileRoutingModule } from 'src/profile/profile-routing.module';
import { NotfoundComponent } from '../shared/components/notfound/notfound.component';
  import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: '', component: AppComponent
  },
  {
    path: '**', component: NotfoundComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthRoutingModule,
    ProfileRoutingModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
