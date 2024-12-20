# Weather App - Ionic & Angular

Una aplicación simple de clima desarrollada con **Ionic 7** y **Angular** que permite a los usuarios consultar el clima actual de cualquier ciudad.

---

## Características

- Ingresar el nombre de una ciudad y mostrar el clima actual.
- Diseño responsivo con Ionic.
- Datos obtenidos desde la API de [OpenWeatherMap](https://openweathermap.org/api).

---

## Requisitos previos

Antes de comenzar, asegúrate de tener instalados:

- [Node.js](https://nodejs.org/) (v16 o superior recomendado)
- [Ionic CLI](https://ionicframework.com/docs/cli) (`npm install -g @ionic/cli`)

---

## Instalación

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/weather-app-ionic-angular.git

2. Ve al directorio del proyecto:

    cd weather-app-ionic-angular

3. Instala las dependencias:

    npm install

## Configuración

1. Obtén una API Key de OpenWeatherMap.

2. Crea un archivo .env en la raíz del proyecto y agrega tu API Key:

    API_KEY=tu_api_key

3. (Opcional) Configura variables adicionales según sea necesario.

## Uso
Para iniciar la aplicación en modo desarrollo:

    ionic serve

La aplicación estará disponible en: http://localhost:8100.

## Estructura del Proyecto

    src/
    ├── app/                # Configuración principal de la aplicación
    ├── assets/             # Recursos estáticos
    ├── environments/       # Configuración de entornos
    ├── home/               # Módulo principal
    └── theme/              # Temas y estilos globales