# Guía de Generación y Consumo de la Librería `sfai-library-foo v2.1`

Esta guía documenta paso a paso cómo generar la librería `sfai-library-foo` y consumirla desde el módulo `sfai-web-library-consumer--bar`.

---

## 1. Preparación del módulo `sfai_library_foo`


<div style="color:red; font-weight:bold; font-size:1.1em; border:2px solid red; padding:10px; border-radius:8px; background:#ffe6e6;">

⚠️ **ADVERTENCIA**  

El `sfai_library_foo` debe ser cambiado por el nombre del módulo correspondiente; por ejemplo: `sfai_library_login`.

</div>

<br/>

1. Dentro del módulo `sfai_library_foo`, crear una carpeta llamada `scripts`.  
2. Dentro de esta carpeta, copiar el siguiente archivo:
   - `fix-js-imports.mjs`
3. Instalar los plugin necesarios de desarrollo:

```bash
npm install --save-dev copy-webpack-plugin generate-package-json-webpack-plugin tsc-alias
```

4. Modificar el archivo `package.json` del módulo, en la sección `scripts`, agregando debajo de `"lint": "eslint --fix \"**/*.{js,jsx,ts,tsx}\"",`:

```json
    "build:ts:dev": "tsc -p tsconfig.dev.json",
    "build:alias:dev": "tsc-alias -p tsconfig.dev.json",
    "build:ts:qa": "tsc -p tsconfig.qa.json",
    "build:alias:qa": "tsc-alias -p tsconfig.qa.json",
    "build:ts:prod": "tsc -p tsconfig.prod.json",
    "build:alias:prod": "tsc-alias -p tsconfig.prod.json",
    "fix:js-imports": "node scripts/fix-js-imports.mjs dist/sfai_library_foo",
    "build:dev": "webpack --config config/webpack/webpack.dev.mjs",
    "build:common": "webpack --config config/webpack/webpack.common.mjs",
```

5. Modificar el comando `build:dev:main` para que quede así:

```json
"build:dev:main": "npm run clean-cache && cross-env ENTRY=library SFAI_APP_ENV=dev webpack --config config/webpack/webpack.common.mjs && npm run build:ts:dev && npm run build:alias:dev && npm run fix:js-imports && cross-env ENTRY=library SFAI_APP_ENV=dev webpack --config config/webpack/webpack.dev.mjs",
```

6. Copiar y pegar los archivos ubicados en sfai_library_foo en esta rama ( feature/build-library-v2.1 ) en sus respectivas rutas:<br/>
`sfai_library_foo/config/webpack/webpack.common.mjs`<br/>
`sfai_library_foo/config/webpack/webpack.dev.mjs`<br/>
`sfai_library_foo/config/webpack/webpack.qa.mjs`<br/>
`sfai_library_foo/config/variables/no-sensitive/.env.dev`<br/>
`sfai_library_foo/config/variables/no-sensitive/.env.qa`<br/>
`sfai_library_foo/config/variables/no-sensitive/.env.prod`<br/>
`sfai_library_foo/tsconfig.base.json`<br/>
`sfai_library_foo/tsconfig.dev.json`<br/>
`sfai_library_foo/tsconfig.qa.json`<br/>
`sfai_library_foo/tsconfig.prod.json`<br/>
`sfai_library_foo/impl/src/main/presentation/FeatureFoobarImpl.tsx`<br/>
`sfai_library_foo/impl/src/main/presentation/FeatureFoobarImpl.css`<br/>
`sfai_library_foo/impl/res/images/dev/image.png`<br/>
`sfai_library_foo/impl/res/images/qa/image.png`<br/>
`sfai_library_foo/impl/res/images/prod/image.png`<br/>
`sfai_library_foo/CHANGELOG.md`<br/>
`sfai-foobar--lib-web-mirror/HEALTH.md`<br/>
`sfai-web-library-consumer--bar/config/webpack/webpack.common.mjs`<br/>
`sfai-web-library-consumer--bar/config/webpack/webpack.qa.mjs`<br/>
`sfai-web-library-producer--foo/config/webpack/webpack.common.mjs`<br/>
`sfai-web-library-producer--foo/config/webpack/webpack.qa.mjs`<br/>
`sfai-web-library-consumer--bar/package.json`<br/>
`sfai-web-library-producer--foo/package.json`<br/>
`sfai_library_foo/package.json`<br/>
`sfai-foobar--lib-web-mirror/README.md`<br/>
`sfai-foobar--lib-web-mirror/.github/workflows/1.1-lib-name-check.yaml`<br/>
`sfai-web-library-producer--foo/shared/network/endpoints.tsx`<br/>

Eliminar el archivo `tsconfig.json`

---

## 2. Compilación de la librería

6. Ejecutar el comando:

```bash
npm run build:dev:main
```

7. De la carpeta `dist`, copiar la carpeta "sfai_library_foo"

---

## 3. Integración en el módulo consumer

8. Ahora trabajaremos en el módulo consumer: `sfai-web-library-consumer--bar`.  
9. En el módulo del consumer, crear una carpeta llamada `lib` y pegar la carpeta "sfai_library_foo".  
10. En el archivo `package.json` del consumer, agregar la dependencia local:

```json
"dependencies": {
  "sfai-library-foo": "file:lib/sfai_library_foo"
}
```

11. Ejecutar:

```bash
npm install
```

---

## 4. Uso de la librería en la aplicación

12. Abrir el archivo `App.tsx` ubicado en: `sfai-web-library-consumer--bar/using_app/impl/src`.  
13. Importar la librería:

```typescript
import { FeatureFoobar } from "sfai-library-foo";
```

14. Agregar el componente importado en el JSX:

```tsx
return (
  <Router>
    <div className="content-wrapper">
      Hello world to Consumer module
      <FeatureFoobar/>
    </div>
  </Router>
);
```

⚠️ IMPORTANTE: <br/>
Si el módulo convertido en librería contiene páginas y navegación interna (usa react-router-dom), el proyecto que lo consuma debe envolver la librería dentro de un router que esté usando.
Además, si dentro de la librería las rutas están definidas como:

- `/iam-forget/page1`
- `/iam-forget/page2`
- `/iam-forget/page3`

Entonces, en el proyecto consumidor debe estar así:

```tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';

import { IAMForget } from "sfai-library-iam-forget";

const App: React.FC = () => {

  return (
    <Router>
      <Routes>
        <Route path="/iam-forget/*" element={<IAMForget />} />
      </Routes>
    </Router>
  );
  
};

export default App;
```


15. Levantar la aplicación:

```bash
npm run start:dev:usingApp
```

Abrir en el navegador:

```
http://localhost:9006/
```

---

## Notas finales

- Si se han instalado nuevas librerías en el proyecto, también hay que instalarlas en el consumer.
- Las variables de entorno del proyecto, también deben ser creadas en el consumer.
- Asegúrate de que todos los assets (`.css`, `.scss`, imágenes) estén correctamente copiados en `dist/sfai_library_foo`.  
- El script de `fix-js-imports` automatiza la corrección de imports y exports de la librería.  
- Esta guía asegura que la librería se pueda consumir correctamente como un paquete local en otros proyectos.
