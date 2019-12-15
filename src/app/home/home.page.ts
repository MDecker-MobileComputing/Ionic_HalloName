import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
    
  private eingabeName : string = "";

  constructor(private alertCtrl: AlertController) {}
  
  
  /**
   * Alert anzeigen, siehe auch https://ionicframework.com/docs/api/alert
   */
  async zeigeDialog(titel: string, nachricht: string) {
   
    const meinAlert = 
          await this.alertCtrl.create({header   : titel,
                                       message: nachricht,
                                       buttons : [ "Ok" ]
                                      }); 
    await meinAlert.present();
  }
  
  /**
   * Event-Handler für Button 1 zum Anzeigen Begrüßung.
   */
  onBegruessenButton() {
      
      let eingabeString : string = this.eingabeName.trim();
      
      if (eingabeString.length > 0) {
          
          this.zeigeDialog( "Begrüßung",
                            `Hallo ${eingabeString}!` );
          
      } else {

          this.zeigeDialog( "Fehler",
                            "Kein Name eingegeben." );                   
      }
  }

  /**
   * Event-Handler für Button 2 zum Löschen.
   */
  onLoeschButton() {
      
    this.eingabeName = "";
  }
  
}
