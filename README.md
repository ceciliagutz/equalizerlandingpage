✨ Equalizer Landing Page ✨
---
Deploy actual: https://dazzling-smakager-12c910.netlify.app/
Figma Diseño: https://www.figma.com/design/wD8sSKFAhQ4vTawNz8yOHu/equalizer-landing-page?node-id=101-102&t=mZ6JURjACwX4olTT-1
Código en GitHub: https://github.com/ceciliagutz/equalizerlandingpage

EQ Landing Page es una landing page interactiva para una app de ecualizador de música, enfocada en mostrar los beneficios de la aplicación, con un diseño atractivo y moderno. El objetivo es que los usuarios conozcan las características premium, puedan descargar la app y experimentar la propuesta visual y funcional en cualquier dispositivo.
Este proyecto está centrado en la experiencia de usuario (UX/UI) y utiliza componentes reutilizables de React junto con CSS responsivo para garantizar una navegación fluida en móviles, tablets y escritorio.

🚀 Tecnologías utilizadas
---
⚛️ React – Para la construcción de componentes reutilizables.
🧠 JavaScript (ES6+) – Lógica de la aplicación.
🎨 HTML5 y CSS3 – Estructura y estilos responsivos.
📦 React Icons – Para íconos.

🗂️ Estructura del proyecto
---
```plaintext
equalizerlandingpage
├── public/                      # Recursos estáticos
├── src/
│   ├── assets/                  # Recursos adicionales (hero, celular, decoración)
│        └── images/                  # Imágenes y decoraciones
│
│   ├── components/              # Componentes reutilizables
│   │   ├── Hero/                # Hero.js + Hero.css
│   │   ├── Pricing/             # Pricing.js + Pricing.css
│   │   └── otros-componentes/   # Por ejemplo Footer.js + Footer.css
│   │
│   ├── App.jsx                  # Componente principal con rutas
│   ├── App.css                  # Estilos globales
│   ├── index.js                 # Punto de entrada de React
│
├── package.json                 # Dependencias y scripts
└── README.md                     # Documentación del proyecto
```
---
🌐 Ruteo
---
Actualmente, esta landing page es single page, por lo que no tiene múltiples rutas. Todos los componentes principales se encuentran en la Home (Hero, Pricing, etc.) y se renderizan dentro de App.js.

⚙️ Instalación y ejecución

Clona el repositorio:

git clone https://github.com/ceciliagutz/music-eq-landing.git


Instala las dependencias:

cd equalizerlandingpage
```bash
npm install
```
Inicia el servidor de desarrollo:
```bash
npm start
```

Abre tu navegador en:

```bash
http://localhost:3000
```
🔄 Migración futura

Integración con audio real para ecualización en tiempo real.
Animaciones y transiciones más suaves.
Optimización de imágenes y performance.
Posible versión multi-ruta para más secciones de la app.

👩‍💻 Desarrolladora

Cecilia Guadalupe Gutierrez Urbano
