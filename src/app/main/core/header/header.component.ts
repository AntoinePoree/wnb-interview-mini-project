import { ICandidate } from './../../../shared/models/candidate';
import { Component, Input } from '@angular/core';
import { IStack } from 'src/app/shared/models/stack';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() readonly candidates: ICandidate[];
  stacksFilter: IStack[] = [];

  filterCard(stack: IStack) {
    if (this.stacksFilter.find((cs) => cs === stack)) {
      stack.active = false;
      this.stacksFilter = this.stacksFilter.filter((cs) => cs.label !== stack.label);
    } else {
      stack.active = true;
      this.stacksFilter.push(stack);
    }
    // doing some stuff
    console.log(this.stacksFilter);
  }
}
