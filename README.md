# CAPTURE PHOTO AND GALLERY 
developed by:
 - NICOLAS RIOS
 - MIGUEL ESTEBAN BRAVO
 - OSCAR ARIAS
   
Desarrollaremos una aplicación de Galería de Fotos que permitirá a los usuarios tomar fotos usando la cámara de su dispositivo, mostrarlas en un diseño de cuadrícula y almacenarlas localmente en el dispositivo. Aquí están las características clave:

Código Único: Utilizando Angular y componentes de Ionic Framework, la aplicación funcionará sin problemas en las plataformas web, iOS y Android.

Despliegues Nativos: La aplicación se desplegará nativamente en iOS y Android utilizando Capacitor, el entorno nativo oficial de Ionic.

Funcionalidad de Galería de Fotos: Utilizaremos las APIs de Capacitor como Camera, Filesystem y Preferences para implementar funcionalidades básicas como capturar fotos y almacenarlas de manera persistente.

Aspectos Destacados Incluyen:

- Configuración del entorno de desarrollo con Node.js y Visual Studio Code.

- Instalación de herramientas necesarias de Ionic como el CLI de Ionic y dependencias de Capacitor.

- Creación de una aplicación Ionic Angular utilizando la plantilla inicial "Tabs" e integrando Capacitor para funcionalidad nativa.

- Implementación de la funcionalidad de cámara utilizando la API de Camera de Capacitor y almacenamiento de fotos utilizando la API de Filesystem.

- Utilización de los elementos PWA de Ionic para mejorar la funcionalidad basada en web proporcionada por los plugins de Capacitor.

- Pruebas de la aplicación en el navegador utilizando la función de Live Reload de Ionic para desarrollo rápido.

->REQUISITOS PARA PODER CORRER LA APP: 

Para comenzar a desarrollar con Ionic, asegúrate de tener instalado Node.js para interactuar con su ecosistema y Visual Studio Code como editor de código. Luego, instala globalmente las herramientas necesarias con el comando npm install -g @ionic/cli native-run cordova-res para Ionic CLI, native-run y cordova-res. Dentro de tu proyecto Ionic, añade los plugins de Capacitor específicos con npm install @capacitor/camera @capacitor/preferences @capacitor/filesystem, y también instala los elementos de PWA para soporte adicional con npm install @ionic/pwa-elements. Estos pasos te permitirán configurar un entorno de desarrollo completo para construir aplicaciones multiplataforma con Ionic utilizando Angular y Capacitor.

->Ejecutar la Aplicación

Después de configurar el entorno y realizar la configuración inicial, puedes ejecutar la aplicación con ionic serve. Este comando inicia la aplicación en un navegador web, permitiéndote desarrollar y probar la mayoría de las funcionalidades directamente en el entorno del navegador.

Próximos Pasos

En nuestra aplicación, hemos configurado una estructura básica con pestañas y espacios reservados. Hemos creado una pestaña de "Galería de Fotos" donde los usuarios pueden capturar fotos utilizando un botón de acción flotante (FAB) con un ícono de cámara. Las imágenes capturadas se muestran en un diseño de cuadrícula dentro de la pestaña.

Mejoras REALIZADAS:

Los siguientes pasos incluyen:

- Refinar la interfaz de usuario con componentes Ionic y estilos CSS.

- Implementar funcionalidades de cámara en las plataformas web, iOS y Android.

- Personalizar la navegación y los componentes de pestañas para una mejor interacción del usuario.


![image](https://github.com/Nicode1010/FIRST-APP-IONIC-PHOTO-GALLERY/assets/123132700/4cc7ee9a-22d3-4ae4-811b-e882d81e828d)

