import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateToDoComponentComponent } from './create-to-do-component/create-to-do-component.component';

const routes: Routes = [{ path: '', component: CreateToDoComponentComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
