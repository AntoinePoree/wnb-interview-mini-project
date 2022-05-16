import { ComponentsModule } from './../../../shared/components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCandidateComponent } from './list-candidate.component';

@NgModule({
  imports: [CommonModule, ComponentsModule],
  declarations: [ListCandidateComponent],
  exports: [ListCandidateComponent],
})
export class ListCandidateModule {}
