import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Producto } from './producto';


/*
  Generated class for the ProductosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductosProvider {

  obtProductos(): Producto[] {
      return  PRODUCTOS;
  }

}

export const PRODUCTOS: Producto[] = [
  { id: 11, nombre_pro: 'Prod. Farmaceutico 1', img: 'med1.jpg', precio: 92.29},
  { id: 12, nombre_pro: 'Prod. Farmaceutico 2', img: 'med2.jpg', precio: 293.20},
  { id: 13, nombre_pro: 'Prod. Farmaceutico 3', img: 'med3.jpg', precio: 283.21},
  { id: 14, nombre_pro: 'Prod. Farmaceutico 4', img: 'med4.jpg', precio: 3920.2},
  { id: 15, nombre_pro: 'Prod. Farmaceutico 5', img: 'med3.jpg', precio: 27.2},
  { id: 16, nombre_pro: 'Prod. Farmaceutico 6', img: 'med2.jpg', precio: 15.0},
  { id: 17, nombre_pro: 'Prod. Farmaceutico 7', img: 'med1.jpg', precio: 299.99},
  { id: 18, nombre_pro: 'Prod. Farmaceutico 8', img: 'med4.jpg', precio: 330.1},
  { id: 19, nombre_pro: 'Prod. Farmaceutico 9', img: 'med3.jpg', precio: 201.23},
  { id: 20, nombre_pro: 'Prod. Farmaceutico 10', img: 'med2.jpg', precio: 293.2},
];


