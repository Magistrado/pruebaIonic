import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProductosProvider } from '../providers/productos/productos';
import { PrincipalPage } from '../pages/principal/principal';
import { RecordatoriosPage } from '../pages/recordatorios/recordatorios';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrincipalPage,
    RecordatoriosPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrincipalPage,
    RecordatoriosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ProductosProvider
  ]
})
export class AppModule {}
