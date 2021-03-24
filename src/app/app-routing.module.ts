import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HrmLoginComponent } from './pages/hrm-login/hrm-login.component';

const routes: Routes = [
  {path: 'login', component: HrmLoginComponent, pathMatch: 'full'},
  {path: '', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule)},
  {path: 'hrm', loadChildren: () => import('./modules/hrm/hrm.module').then(m => m.HrmModule)},
  {path: 'settings', loadChildren: () => import('./modules/shared/shared.module').then(m => m.SharedModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
