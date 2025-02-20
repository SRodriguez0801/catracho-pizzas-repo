import { Component } from '@angular/core';
import {
  AlertController,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonButton,
  IonLabel, IonApp, IonRouterOutlet, IonCardSubtitle } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
  standalone: true,
  imports: [IonCardSubtitle, IonRouterOutlet, IonApp, 
    CommonModule,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonButton,
    IonLabel,
  ],
})
export class ProductCardComponent {

  quantity: number = 1;
  constructor( private alerController: AlertController) {}

  decreaseQuantity() {
    if (this.quantity > 1) {
      this.quantity--;
    }
  }

  increaseQuantity() {
    this.quantity++;
  }

  async presentAlert() {
    const alert = await this.alerController.create({
      header: 'Exito',
      message: 'Ha agregado el producto al carrito',
      buttons: ['OK'],
    });

    await alert.present();
  }

}




