import { Component } from '@angular/core';
import { WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  city: string = ''; // Para almacenar la ciudad ingresada
  weatherData: any = null; // Para almacenar los datos del clima
  errorMessage: string = ''; // Para mostrar mensajes de error

  constructor(private weatherService: WeatherService) {}

  // Método para obtener el clima
  getWeather() {
    if (this.city.trim()) {
      this.weatherService.getWeather(this.city).subscribe(
        (data) => {
          this.weatherData = data;
          this.errorMessage = ''; // Limpiar mensaje de error si la respuesta es exitosa
        },
        (error) => {
          this.weatherData = null;
          this.errorMessage = 'No se pudo obtener el clima. Verifica la ciudad.'; // Mostrar mensaje de error
        }
      );
    } else {
      this.errorMessage = 'Por favor, ingresa una ciudad.'; // Mensaje si no se ingresa ciudad
    }
  }
}
