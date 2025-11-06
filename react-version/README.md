# Bikuma - Puntodis Accessible Solutions

Sitio web corporativo desarrollado en React para Puntodis, especialistas en accesibilidad universal y soluciones inclusivas. El proyecto presenta una interfaz moderna, completamente responsive y optimizada para cumplir con los estándares de accesibilidad web.

## 📋 Descripción del Proyecto

Este proyecto es una aplicación web desarrollada con React que presenta los servicios, productos y proyectos de Puntodis, una empresa dedicada a la accesibilidad universal. La aplicación incluye:

- **Hero Section**: Presentación principal con call-to-action
- **Cards de Servicios Rápidos**: Tarjetas con iconos Braille mostrando servicios principales
- **Carrusel de Noticias**: Presentación dinámica de las últimas novedades
- **Sección de Servicios**: Grid de servicios con iconos Braille y contenido descriptivo
- **Productos**: Galería de productos y soluciones
- **Carrusel de Proyectos**: Showcase de proyectos realizados con ubicaciones
- **Empresas Colaboradoras**: Sección de partners y clientes
- **Footer Completo**: Con newsletter, navegación y redes sociales

### Características Principales

- ✅ **Diseño Responsive**: Adaptado para móviles, tablets y escritorio
- ✅ **Accesibilidad**: Implementación de ARIA labels y navegación por teclado
- ✅ **Menú Hamburguesa**: Navegación móvil optimizada
- ✅ **Carruseles Interactivos**: Con navegación por puntos y auto-play
- ✅ **Iconos Braille**: Representación visual de accesibilidad
- ✅ **Optimización de Imágenes**: Lazy loading y formatos optimizados

## 🛠️ Tecnologías Utilizadas

### Frontend Framework
- **React 18.3.1**: Biblioteca de JavaScript para construir interfaces de usuario
- **React DOM 18.3.1**: Renderizado de componentes React en el DOM

### Build Tool y Desarrollo
- **Vite 5.4.8**: Herramienta de build moderna y rápida
- **@vitejs/plugin-react 4.3.2**: Plugin oficial de React para Vite

### Estilos
- **Sass 1.80.3**: Preprocesador CSS con variables, mixins y funciones
- **SCSS Modules**: Organización modular de estilos

### TypeScript (Tipos)
- **@types/react 18.3.8**: Definiciones de tipos para React
- **@types/react-dom 18.3.0**: Definiciones de tipos para React DOM

## 📁 Estructura del Proyecto

```
react-version/
├── public/
│   ├── search.svg          # Icono de búsqueda
│   └── vite.svg            # Logo de Vite
├── src/
│   ├── assets/             # Imágenes y recursos estáticos
│   │   ├── braille1-4.png  # Iconos Braille
│   │   ├── LogoBikuma.png  # Logo principal
│   │   ├── LogoFooter.png  # Logo del footer
│   │   └── ...             # Otras imágenes
│   ├── components/         # Componentes React
│   │   ├── Navbar.jsx      # Barra de navegación con menú hamburguesa
│   │   ├── Hero.jsx        # Sección hero principal
│   │   ├── SectionCards.jsx # Cards con iconos Braille
│   │   ├── NewsCarousel.jsx # Carrusel de noticias
│   │   ├── Services.jsx    # Sección de servicios
│   │   ├── Products.jsx    # Sección de productos
│   │   ├── ProjectsCarousel.jsx # Carrusel de proyectos
│   │   ├── Companies.jsx   # Sección de empresas
│   │   └── Footer.jsx      # Pie de página
│   ├── styles/            # Estilos SCSS
│   │   ├── _variables.scss # Variables y mixins
│   │   └── main.scss      # Estilos principales
│   ├── App.jsx            # Componente raíz
│   └── main.jsx           # Punto de entrada
├── index.html             # HTML principal
├── package.json           # Dependencias y scripts
├── vite.config.js        # Configuración de Vite
└── README.md            # Este archivo
```

## 🚀 Instalación y Configuración

### Requisitos Previos

- **Node.js**: Versión 16 o superior
- **npm**: Versión 7 o superior (incluido con Node.js)

### Pasos de Instalación

1. **Clonar o descargar el proyecto**

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar servidor de desarrollo**
   ```bash
   npm run dev
   ```
   La aplicación estará disponible en `http://localhost:5173`

4. **Compilar para producción**
   ```bash
   npm run build
   ```
   Los archivos optimizados se generarán en la carpeta `dist/`

5. **Previsualizar build de producción**
   ```bash
   npm run preview
   ```

## 📱 Responsive Design

El proyecto está completamente optimizado para diferentes tamaños de pantalla:

- **Desktop (≥1920px)**: Layout completo con máximo ancho de 1440px
- **Large (1024px - 1919px)**: Layout adaptado con padding dinámico
- **Medium (768px - 1023px)**: Grids ajustados, imágenes optimizadas
- **Mobile (≤480px)**: Menú hamburguesa, layout de una columna, elementos apilados

### Breakpoints SCSS

```scss
$bp-xl: 1440px;  // Extra large
$bp-lg: 1024px;  // Large
$bp-md: 768px;   // Medium
$bp-sm: 480px;   // Small
```

## 🎨 Sistema de Diseño

### Colores Principales

- **Color Primario**: `#e31837` (Rojo)
- **Color Texto**: `#0b2a4a` (Azul oscuro)
- **Color Fondo**: `#ffffff` (Blanco)
- **Color Superficie**: `#f5f7fb` (Gris claro)
- **Color Footer**: `#005EB8` (Azul corporativo)

### Tipografía

- **Fuente**: System UI (fallback a fuentes del sistema)
- **Tamaños**: Responsive con `clamp()` para escalado fluido
- **Pesos**: 400 (normal), 700 (bold), 800 (extra bold)

## 🔧 Componentes Principales

### Navbar
Barra de navegación superior con:
- Logo de la empresa
- Menú de navegación (oculto en móvil, visible en desktop)
- Botón hamburguesa para móvil
- Botones de acción (Contactar, Tienda, Búsqueda)

### Hero
Sección principal con:
- Título y descripción
- Call-to-action
- Imagen destacada

### SectionCards
Grid de tarjetas con:
- Iconos Braille personalizados
- Títulos y subtítulos
- Efectos hover

### Carousels (NewsCarousel, ProjectsCarousel)
Carruseles interactivos con:
- Auto-play cada 4 segundos
- Navegación por puntos
- Pausa al hover
- Transiciones suaves

### Services
Sección de servicios con:
- Grid superior de 4 cards
- Grid inferior de 3 cards centradas
- Imagen destacada con contenido superpuesto

### Footer
Pie de página completo con:
- Información de la empresa
- Navegación
- Formulario de newsletter
- Redes sociales con iconos SVG
- Enlaces legales

## ♿ Accesibilidad

El proyecto implementa buenas prácticas de accesibilidad:

- **ARIA Labels**: Etiquetas descriptivas para lectores de pantalla
- **Navegación por Teclado**: Todos los elementos interactivos son accesibles
- **Contraste**: Colores con suficiente contraste según WCAG
- **Semántica HTML**: Uso correcto de elementos semánticos
- **Focus Visible**: Indicadores de foco claros

## 🎯 Funcionalidades Destacadas

### Menú Hamburguesa
- Animación suave de transformación (líneas a X)
- Menú desplegable desde arriba
- Cierre automático al hacer clic en enlaces
- Transiciones CSS optimizadas

### Carruseles
- Auto-play con pausa al hover
- Navegación por puntos
- Transiciones suaves entre slides
- Responsive: muestra 1 slide en móvil, 3 en desktop

### Iconos Braille
- Representación visual de accesibilidad
- Imágenes optimizadas
- Integración en cards de servicios

## 📦 Scripts Disponibles

```json
{
  "dev": "vite",              // Servidor de desarrollo
  "build": "vite build",      // Build de producción
  "preview": "vite preview"   // Preview del build
}
```

## 🔍 Optimizaciones Implementadas

- **Lazy Loading**: Imágenes cargadas bajo demanda
- **Code Splitting**: Carga diferida de componentes
- **CSS Optimizado**: Uso de variables y mixins SCSS
- **Imágenes Optimizadas**: Formatos adecuados y tamaños responsivos
- **Transiciones CSS**: Animaciones con GPU acceleration

## 🌐 Navegadores Soportados

- Chrome (últimas 2 versiones)
- Firefox (últimas 2 versiones)
- Safari (últimas 2 versiones)
- Edge (últimas 2 versiones)

## 📝 Notas de Desarrollo

### Estructura de Componentes
Todos los componentes siguen una estructura consistente:
- Imports al inicio
- Constantes de datos
- Componente funcional
- Export default

### Estilos
- Variables centralizadas en `_variables.scss`
- Mixins reutilizables
- Media queries organizadas por breakpoint
- Estilos móviles al final del archivo

### Estado
- Uso de hooks de React (`useState`, `useEffect`, `useRef`)
- Estado local cuando es suficiente
- Sin estado global (no requiere Redux/Context)

## 🚧 Mejoras Futuras

- [ ] Implementar formulario de newsletter funcional
- [ ] Añadir animaciones de entrada (fade-in, slide-in)
- [ ] Integración con CMS para contenido dinámico
- [ ] Implementar modo oscuro
- [ ] Añadir tests unitarios con Jest/React Testing Library
- [ ] Optimización SEO con meta tags dinámicos
- [ ] Implementar internacionalización (i18n)

## 📄 Licencia

Este proyecto es propiedad de Puntodis y está destinado para uso interno y presentación a clientes.

## 👥 Contacto

Para más información sobre el proyecto o consultas técnicas, contactar con el equipo de desarrollo.

---

**Desarrollado con ❤️ para Puntodis Accessible Solutions**

