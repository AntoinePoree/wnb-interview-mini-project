import { ComponentsModule } from './../../../shared/components/components.module';
import { PipesModule } from './../../../shared/pipes/pipes.module';
import { StatusFilterComponent } from './status-filter/status-filter.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';

@NgModule({
  imports: [CommonModule, PipesModule, ComponentsModule],
  declarations: [HeaderComponent, ProgressBarComponent, StatusFilterComponent],
  exports: [HeaderComponent],
})
export class HeaderModule {}
