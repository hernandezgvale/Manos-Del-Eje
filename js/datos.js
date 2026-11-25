/*
 * datos.js - Los datos de tu tema
 * Los datos viven aquí, separados de la interfaz. app.js los recorre
 * y construye las tarjetas: nunca se escriben tarjetas a mano en el HTML.
 *
 * TODO (issue #1):
 *
 * 1. Completa configuracion:
 *      titulo         nombre de tu proyecto
 *      campoOrden     nombre de la propiedad NUMÉRICA que se usa para ordenar
 *                     (precio, duracionMinutos, paginas...). Se elige en la guía.
 *      etiquetaValor  cómo se muestra ese número en la tarjeta ("Precio", "Duración")
 *
 * 2. Llena items con los 12 elementos de la página de Contenido de tu
 *    empresa en el Manual de marca (nombres, categorías y valores exactos).
 *    TODOS con las mismas propiedades:
 *      id           número, único
 *      nombre       texto
 *      categoria    texto (mínimo 3 categorías, cada una con 2 o más elementos)
 *      descripcion  texto corto
 *      imagen       ruta en img/ (que exista) o URL que empiece por https://
 *      la propiedad de campoOrden (número)
 *      y los 2 campos propios que indica tu tema en la guía
 *
 * La información es ficticia: la entrega la empresa en el manual.
 * Puedes usar img/placeholder.svg mientras consigues imágenes.
 */

const configuracion = {
  titulo: 'Manos del Eje',
  campoOrden: 'precio',
  etiquetaValor: 'Precio'
};

const items = [
 
   {
    id: 1,
    nombre: 'Canasto de bejuco',
    categoria: 'cesteria',
    descripcion: 'Canasto tejido a mano, ideal para frutas.',
    imagen: 'img/placeholder.svg',
    precio: 65000,
    artesano: 'Rosa Cardona',
    municipio: 'Filandia'
  },

    {
    id: 2,
    nombre: 'Individuales de iraca',
    categoria: 'cesteria',
    descripcion: 'Juego de 4 individuales tejidos.',
    imagen: 'img/placeholder.svg',
    precio: 48000,
    artesano: 'Luz Marina Ospina',
    municipio: 'Filandia'
  },
  {
    id: 3,
    nombre: 'Lámpara de guadua',
    categoria: 'cesteria',
    descripcion: 'Lámpara colgante tejida en guadua.',
    imagen: 'img/placeholder.svg',
    precio: 120000,
    artesano: 'José Ramírez',
    municipio: 'Córdoba'
  },

  {
    id: 4,
    nombre: 'Jarrón de barro',
    categoria: 'ceramica',
    descripcion: 'Jarrón pintado con motivos cafeteros.',
    imagen: 'img/placeholder.svg',
    precio: 55000,
    artesano: 'Martha Salazar',
    municipio: 'Pereira'
  },

  {
    id: 5,
    nombre: 'Pocillos cafeteros',
    categoria: 'ceramica',
    descripcion: 'Juego de 2 pocillos esmaltados.',
    imagen: 'img/placeholder.svg',
    precio: 38000,
    artesano: 'Martha Salazar',
    municipio: 'Pereira'
  },
  {
    id: 6,
    nombre: 'Plato decorativo',
    categoria: 'ceramica',
    descripcion: 'Plato de pared con paisaje del Eje.',
    imagen: 'img/placeholder.svg',
    precio: 42000,
    artesano: 'Diego Uribe',
    municipio: 'Santa Rosa de Cabal'
  },

   {
    id: 7,
    nombre: 'Ruana de lana',
    categoria: 'textiles',
    descripcion: 'Ruana tejida en telar de lana virgen.',
    imagen: 'img/placeholder.svg',
    precio: 180000,
    artesano: 'Teresa López',
    municipio: 'Belén de Umbría'
  },

   {
    id: 8,
    nombre: 'Mochila tejida',
    categoria: 'textiles',
    descripcion: 'Mochila de hilo con diseños geométricos.',
    imagen: 'img/placeholder.svg',
    precio: 95000,
    artesano: 'Claudia Rojas',
    municipio: 'Quinchía'
  },
  {
    id: 9,
    nombre: 'Tapiz de pared',
    categoria: 'textiles',
    descripcion: 'Tapiz con figuras de la cultura quimbaya.',
    imagen: 'img/placeholder.svg',
    precio: 140000,
    artesano: 'Teresa López',
    municipio: 'Belén de Umbría'
  },

  {
    id: 10,
    nombre: 'Jeep Willys tallado',
    categoria: 'madera',
    descripcion: 'Miniatura del Willys cargado de café.',
    imagen: 'img/placeholder.svg',
    precio: 85000,
    artesano: 'Hernán Giraldo',
    municipio: 'Salento'
  },

  {
    id: 11,
    nombre: 'Cucharas de cocina',
    categoria: 'madera',
    descripcion: 'Juego de 3 cucharas de madera de naranjo.',
    imagen: 'img/placeholder.svg',
    precio: 30000,
    artesano: 'Hernán Giraldo',
    municipio: 'Salento'
  },
  {
    id: 12,
    nombre: 'Bandeja de cedro',
    categoria: 'madera',
    descripcion: 'Bandeja para servir con asas talladas.',
    imagen: 'img/placeholder.svg',
    precio: 75000,
    artesano: 'Fabio Montoya',
    municipio: 'Calarcá'
  },


];
