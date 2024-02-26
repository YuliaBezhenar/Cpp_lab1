import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonContent, IonToolbar, IonHeader, IonTitle, IonList } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonList, IonTitle, IonHeader, IonToolbar, IonContent, IonApp, IonRouterOutlet, CommonModule, NgClass, IonicModule],
})
export class AppComponent {
  constructor() {}
}
