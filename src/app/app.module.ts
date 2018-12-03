import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { CityWeatherComponent } from './components/search/city-weather/city-weather.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CityCoordinatesService } from './services/city-coordinates/city-coordinates.service';
import { CityWeatherService } from './services/city-weather/city-weather.service';

import { Routes, RouterModule } from '@angular/router';
import { MapboxComponent } from './components/mapbox/mapbox.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: '**', component: AppComponent }
]

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        SearchComponent,
        CityWeatherComponent,
        MapboxComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        FormsModule
    ],
    providers: [CityCoordinatesService, CityWeatherService],
    bootstrap: [AppComponent]
})
export class AppModule { }
