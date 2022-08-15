import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddsComponent } from './dashboard/pages/adds/adds.component';
import { CellsComponent } from './dashboard/pages/cells/cells.component';
import { SearchComponent } from './dashboard/pages/search/search.component';
import { UserComponent } from './dashboard/pages/user/user.component';

const routes: Routes = [

  {
    path: '',
    component:DashboardComponent,
    children: [

      {
        path: '', component: DashboardComponent
      },

      {
        path: 'adds', 
        component: AddsComponent
      },
  
      {
        path: 'cells', 
        component: CellsComponent
      },  

      {
        path: 'search', 
        component: SearchComponent
      },  

      {
        path: 'user', 
        component: UserComponent
      }, 
      {
        path: '**', redirectTo: 'auth'
      },    

    ]
   
  },


  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProtectedRoutingModule { }
