import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonButton, IonLabel, IonInput } from '@ionic/angular/standalone';
import { AlertController, ToastController } from '@ionic/angular';
import { FormsModule } from '@angular/forms'; // wegen ngModel


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonItem, IonButton, IonLabel, IonInput, FormsModule],
})
export class HomePage {

  /** Member-Variable, ist mit Two-Way-Binding an <ion-input>-Element gebunden. */
  public eingabeName : string = "";

  /**
   * Konstruktor mit leerem Rumpf wird benötigt, um AlertController-
   * und ToastController-Instanz als Member-Variable zu erhalten.
   */
  constructor( private alertCtrl      : AlertController,
               private toastController: ToastController ) {}


  /**
   * Event-Handler für Button 1 zum Anzeigen Begrüßung.
   */
  onBegruessenButton() {

      const eingabeString : string = this.eingabeName.trim();

      if ( eingabeString.length > 0 ) {

          this.zeigeDialog( "Begrüßung",
                            `Hallo ${eingabeString}!` );
      } else {

          this.zeigeToast( "Kein Name eingegeben." );
      }
  }


  /**
   * Event-Handler für Button 2 zum Löschen.
   */
  onLoeschButton() {

    this.eingabeName = "";
  }


  /**
   * Alert anzeigen, siehe auch https://ionicframework.com/docs/api/alert
   */
  async zeigeDialog( titel: string, nachricht: string ) {

    const meinAlert =
          await this.alertCtrl.create({
              header  : titel,
              message : nachricht,
              buttons : [ "Ok" ]
          });

    await meinAlert.present();
  }


  /**
   * Toast anzeigen, siehe auch https://ionicframework.com/docs/api/toast
   */
  async zeigeToast( nachricht: string ) {

    const toast =
          await this.toastController.create({
              message : nachricht,
              duration: 2000  // 2000 ms = 2 Sekunden
          });

    await toast.present();
  }


}
