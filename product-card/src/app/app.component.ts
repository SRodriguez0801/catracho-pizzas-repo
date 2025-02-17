import { Component } from '@angular/core';
import { IonApp,IonContent,IonHeader, IonTitle, IonToolbar  } from '@ionic/angular/standalone';
import { ProductCardComponent } from './product-card/product-card.component';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonContent, IonHeader, IonTitle, IonToolbar, ProductCardComponent],
})
export class AppComponent {
  constructor() {}
}


