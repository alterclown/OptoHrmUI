import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AclRoutingModule } from './acl-routing.module';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [UserComponent],
  imports: [
    CommonModule,
    AclRoutingModule
  ]
})
export class AclModule { }
