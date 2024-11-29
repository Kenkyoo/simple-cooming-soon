# Very Simple Coming Soon Page

Una página sencilla de **"Coming Soon"** con un contador regresivo. Implementada con HTML, CSS y la librería jQuery Countdown.

## Características

- Diseño minimalista.
- Cuenta regresiva hasta una fecha específica.
- Utiliza jQuery y un plugin para facilitar la implementación.

## Requisitos

- Navegador con soporte para JavaScript.
- Conexión a internet para cargar jQuery y el plugin Countdown.

## Instalación

1. Clona este repositorio o descarga los archivos.
2. Asegúrate de que todos los archivos estén en la misma carpeta:
   - `index.html`
   - `style.css`
   - `script.js`
   - `jquery.countdown.min.js`
3. Abre el archivo `index.html` en tu navegador.

## Uso

- El contador está configurado para contar hasta el **10 de octubre de 2025**.
- Puedes modificar la fecha cambiando el valor en `script.js`:

$('#clock').countdown('2025/10/10', function(event) {
  $(this).html(event.strftime('%D days %H:%M:%S'));
})
.on('finish.countdown', function(event) {
  $(this).html('The end!');
});

Créditos

    Librería utilizada: jQuery Countdown Plugin

Licencia

Este proyecto está disponible bajo la licencia MIT. Puedes usarlo, modificarlo y distribuirlo libremente.
