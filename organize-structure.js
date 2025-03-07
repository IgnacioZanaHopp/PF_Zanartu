#!/usr/bin/env node

/**
 * Script para reorganizar carpetas en Angular:
 * - Crea core, shared, features en src/app si no existen.
 * - Mueve "sidebar", "toolbar" a shared/.
 * - Mueve "material" a core/.
 * - Mueve "store/alumnos", "store/cursos", "store/clases" a features/<feature>/store.
 * - Mueve "pages/alumnos" a features/alumnos/pages (si aplica).
 *
 * AJUSTA las rutas/nombres a tu proyecto real.
 */

const fs = require('fs');
const path = require('path');

/** 
 * Ajusta este path si tus archivos están en 
 * PF-Zanartu2/src/app en lugar de PF2-MAIN/src/app, etc.
 */
const BASE_PATH = path.join(__dirname, 'PF-Zanartu2', 'src', 'app');

/** Subcarpetas que queremos asegurar en src/app */
const subDirs = [
  'core',
  'shared',
  'features'
];

/** Crea los directorios (core, shared, features) si no existen */
function createMainDirectories() {
  subDirs.forEach(dirName => {
    const dirPath = path.join(BASE_PATH, dirName);
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
      console.log(`✔ Creada carpeta: ${dirPath}`);
    } else {
      console.log(`(Ya existe): ${dirPath}`);
    }
  });
}

/**
 * Mueve una carpeta (o subcarpeta) desde oldPath a newPath.
 * @param {string} oldRelativePath  Ruta relativa dentro de src/app
 * @param {string} newRelativePath  Nueva ruta relativa dentro de src/app
 */
function moveFolder(oldRelativePath, newRelativePath) {
  const oldPath = path.join(BASE_PATH, oldRelativePath);
  const newPath = path.join(BASE_PATH, newRelativePath);

  if (!fs.existsSync(oldPath)) {
    console.warn(`✖ No se encontró: "${oldPath}", se omite...`);
    return;
  }

  // Asegura que exista el directorio destino (parte anterior)
  const parentDir = path.dirname(newPath);
  if (!fs.existsSync(parentDir)) {
    fs.mkdirSync(parentDir, { recursive: true });
    console.log(`✔ Creado directorio padre: ${parentDir}`);
  }

  // Mueve (renameSync) la carpeta
  fs.renameSync(oldPath, newPath);
  console.log(`✔ Movido "${oldRelativePath}" → "${newRelativePath}"`);
}

function main() {
  // 1. Crea core, shared y features si no existen
  createMainDirectories();

  // 2. Mueve sidebar y toolbar a shared/
  moveFolder(path.join('components', 'sidebar'), path.join('shared', 'sidebar'));
  moveFolder(path.join('components', 'toolbar'), path.join('shared', 'toolbar'));

  // 3. Mueve material a core/ (ajusta si prefieres shared/material)
  moveFolder('material', path.join('core', 'material'));

  // 4. Mueve los stores específicos a features/<feature>/store
  //    Ajusta si tu store se llama distinto o está en otra carpeta.
  moveFolder(path.join('store','alumnos'), path.join('features','alumnos','store'));
  moveFolder(path.join('store','cursos'), path.join('features','cursos','store'));
  moveFolder(path.join('store','clases'), path.join('features','clases','store'));

  // 5. Si tienes "pages/alumnos" y lo quieres en features/alumnos/pages:
  moveFolder(path.join('pages','alumnos'), path.join('features','alumnos','pages'));

  // 6. Otros ejemplos: 
  // moveFolder(path.join('services'), path.join('core','services'));
  // moveFolder(path.join('components'), path.join('shared','components'));

  console.log('\n¡¡Listo!! Revisa que todo se haya movido y actualiza tus imports.');
}

main();
