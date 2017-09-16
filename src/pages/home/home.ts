import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal';

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
      //this.navCtrl.push(RecordatorioPage);
  }
}
