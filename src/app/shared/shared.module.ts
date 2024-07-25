import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';



@NgModule({
  declarations: [SidebarComponent, ClickOutsideDirective],
  imports: [
    CommonModule
  ],
  exports: [
    SidebarComponent
  ]
})
export class SharedModule { }
