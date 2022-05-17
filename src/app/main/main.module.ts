import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { ComponentsModule } from '../shared/components/components.module';
import { HeaderModule } from './core/header/header.module';
import { ListCandidateModule } from './core/list-candidate/list-candidate.module';

@NgModule({
  imports: [CommonModule, ComponentsModule, HeaderModule, ListCandidateModule],
  declarations: [MainComponent],
})
export class MainModule {}
