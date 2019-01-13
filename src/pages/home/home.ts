import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';


@Component({
  selector:  'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  /* 
   * Für Wert von <ion-input>-Element zur Eingabe von Namen, wird wegen [(ngModel)]="eingabeName"
   * automatisch "gebunden".
   */
  private eingabeName : string = "";

  /*
   * Konstruktor; die Argumente werden als Member-Variablen angelegt, weil sie mit Zugriffs-Modifizierern
   * ("public" und "private") versehen sind.
   */
  constructor(public  navCtrl  : NavController, 
              private alertCtrl: AlertController) { }


  /*
   * Event-Handler-Methode für den Button "Begrüße mich!".
   */
  onBegruessenButton() {

    let eingabeString : string = this.eingabeName.trim();

    if ( eingabeString.length > 0 ) {

      this.zeigeDialog( "Begrüßung", 
                        "Hallo " + eingabeString + "!" );

    } else {

      this.zeigeDialog( "Fehler",
                        "Kein Name eingegeben!" );
    }

    this.eingabeName = "";
  }


  /*
   * Event-Handler-Methode für Lösch-Button.
   */
  onLoeschButton() {

    this.eingabeName = "";
  }


  /*
   * Hilfsmethode zur Anzeige einer Nachricht mit einem Alert-Element.
   */
  zeigeDialog(titel: string, nachricht: string) {

    let alert = this.alertCtrl.create({ title   : titel,                                  
                                        subTitle: nachricht,
                                        buttons : [ "Ok" ] 
                                      });
                                      
    alert.present();
  }  

}
