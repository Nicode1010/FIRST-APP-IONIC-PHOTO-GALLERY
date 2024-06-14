import { Component, Input } from '@angular/core';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
defineCustomElements(window);
@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})

export class ExploreContainerComponent {

  @Input() name?: string;

}
