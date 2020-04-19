import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage{
  constructor(private toastController : ToastController) { }

  async displayToast() {
    const toast = await this.toastController.create({
      header: 'This is sample toast message',
      duration: 3000
    });

    await toast.present();
  }

}
