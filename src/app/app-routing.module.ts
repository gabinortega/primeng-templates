import { PrimeNgDemoComponent } from './primeng-demo/primeng-demo.component';
import { AngularDemoComponent } from './angular-demo/angular-demo.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'angular-demo', component: AngularDemoComponent },
  { path: 'primeng-demo', component: PrimeNgDemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
