import { Component } from '@angular/core';
import {
  IonApp,
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
} from '@ionic/angular/standalone';
import { AppComponent } from '../app.component';
import { ProductCardComponent } from "../product-card/product-card.component";


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonApp, IonHeader, IonToolbar, IonTitle, IonContent, AppComponent, ProductCardComponent],
})
export class HomePage {
  constructor() {}
}
