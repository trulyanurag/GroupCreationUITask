import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateGroupComponent } from './component/create-group/create-group.component';
import { GroupListComponent } from './component/group-list/group-list.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [{
  path:'',
  component: HomeComponent,
  pathMatch: 'full',

},
{
  path:'users',
  component: CreateGroupComponent,
  pathMatch: 'full',

},
{
  path:'groups',
  component: GroupListComponent,
  pathMatch: 'full',

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
