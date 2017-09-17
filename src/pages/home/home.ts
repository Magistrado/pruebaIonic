import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';
import { RecordatoriosPage } from '../recordatorios/recordatorios';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private navCtrl: NavController) {

  }

  openPromociones() {
      this.navCtrl.push(PrincipalPage);
  }

  openRecordatorios() {
      this.navCtrl.push(RecordatoriosPage);
  }
}
