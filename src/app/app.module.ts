import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { IonicStorageModule } from '@ionic/storage';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { MyApp } from './app.component';

import { SubmissionsPage } from '../pages/submissions/submissions';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {AddFieldModal} from '../modals/fields/add-field';
import {EditFieldModal} from '../modals/fields/edit-field';
import {ListsModal} from '../modals/lists/lists';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


@NgModule({
  declarations: [
    MyApp,
    SubmissionsPage,
    HomePage,
    TabsPage,
    AddFieldModal,
    EditFieldModal,
    ListsModal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SubmissionsPage,
    HomePage,
    TabsPage,
    AddFieldModal,
    EditFieldModal,
    ListsModal
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}



