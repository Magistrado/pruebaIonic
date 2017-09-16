import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProductosProvider } from '../../providers/productos/productos';
import { Producto } from '../../providers/productos/producto';

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
  providers: [ProductosProvider]
})
export class PrincipalPage {
    productos: Producto[];

    constructor(public navCtrl: NavController
              , private prodProv: ProductosProvider) {
        this.productos = this.prodProv.obtProductos();
  }

}
