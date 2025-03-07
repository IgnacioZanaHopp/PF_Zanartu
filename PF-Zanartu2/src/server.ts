import 'zone.js/node';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import express from 'express'; // Usa importación por defecto
import { join } from 'path';

import AppServerModule from './main.server';


const server = express();
const distFolder = join(process.cwd(), 'dist/browser');
const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index.html';


server.set('view engine', 'html');
server.set('views', distFolder);

server.get('*.*', express.static(distFolder, { maxAge: '1y' }));

server.get('*', (req: any, res: any) => {
  res.render(indexHtml, { req });
});

const port = process.env['PORT'] || 4000; // Corrección de index signature

server.listen(port, () => {
  console.log(`Servidor Angular SSR corriendo en http://localhost:${port}`);
});
