import { Component } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  private eingabeName : string = "";

  /**
   * Konstruktor mit leerem Rumpf wird benötigt, um AlertController-
   * und ToastController-Instanz als Member-Variable zu erhalten.
   */
  constructor(private alertCtrl      : AlertController,
              private toastController: ToastController ) {}


  /**
   * Event-Handler für Button 1 zum Anzeigen Begrüßung.
   */
  onBegruessenButton() {

      let eingabeString : string = this.eingabeName.trim();

      if (eingabeString.length > 0) {

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
  async zeigeDialog(titel: string, nachricht: string) {

    const meinAlert =
          await this.alertCtrl.create({header  : titel,
                                       message : nachricht,
                                       buttons : [ "Ok" ]
                                      });
    await meinAlert.present();
  }


  /**
   * Toast anzeigen, siehe auch https://ionicframework.com/docs/api/toast
   */
  async zeigeToast(nachricht: string) {

    const toast =
          await this.toastController.create({ message: nachricht,
                                              duration: 2000
                                            });
    await toast.present();
  }

}
