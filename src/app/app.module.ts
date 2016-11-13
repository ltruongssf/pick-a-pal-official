import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { FavoritePage } from '../pages/favorite/favorite';
import { LandingPage } from '../pages/landing/landing';
import { LobbyPage } from '../pages/lobby/lobby';
import { LoginPage } from '../pages/login/login';
import { PreLandingPage } from '../pages/pre-landing/pre-landing';
import { PuppyPage } from '../pages/puppy/puppy';
import { RegisterPage } from '../pages/register/register';
import { SettingsPage } from '../pages/settings/settings';
import { StoreUserInfo } from '../providers/store-user-info';

const injections = [MyApp, AboutPage, ContactPage, 
FavoritePage, LandingPage, LobbyPage, LoginPage, PreLandingPage, 
PuppyPage, RegisterPage, SettingsPage]



@NgModule({
  declarations: injections,
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: injections,
  providers: [StoreUserInfo]
})
export class AppModule {}
