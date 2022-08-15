import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProtectedRoutingModule } from './protected-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent } from './dashboard/pages/search/search.component';
import { AddsComponent } from './dashboard/pages/adds/adds.component';
import { UserComponent } from './dashboard/pages/user/user.component';
import { CellsComponent } from './dashboard/pages/cells/cells.component';

import { MaterialModule } from '../material/material.module';




@NgModule({
  declarations: [
       DashboardComponent,  
       SearchComponent,
       AddsComponent,
       UserComponent,
       CellsComponent,
      
  ],
  imports: [
    CommonModule,
    ProtectedRoutingModule,
    MaterialModule
  ]
})
export class ProtectedModule { }
