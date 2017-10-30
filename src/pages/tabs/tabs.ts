import { Component } from '@angular/core';

import { SubmissionsPage } from '../submissions/submissions';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SubmissionsPage;

  constructor() {

  }
}
