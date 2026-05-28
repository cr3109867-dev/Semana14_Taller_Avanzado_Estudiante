# Semana 14 - Taller practico avanzado
## Mejora de usabilidad, accesibilidad, estructura y optimizacion web

Bienvenido a este taller. Este proyecto fue creado para que aprendas a revisar una pagina web como lo haria una persona que esta preparando un producto antes de entregarlo. No se trata solo de escribir codigo. Tambien debes probar, observar, corregir, justificar y dejar evidencia de tus mejoras.

Durante esta actividad vas a trabajar con una pagina llamada **Feria Rural Digital**. La pagina ya existe, pero contiene problemas intencionales de usabilidad, accesibilidad, diseno, estructura, validacion y funcionamiento. Tu reto consiste en abrir el proyecto en Visual Studio Code, instalar las librerias necesarias, ejecutar el sitio, encontrar los problemas, corregirlos y documentar lo que hiciste.

---

## 1. Que vas a aprender

Al terminar este taller deberias ser capaz de:

1. Ejecutar un proyecto web con librerias instaladas desde npm.
2. Reconocer problemas de usabilidad en botones, formularios, textos y navegacion.
3. Aplicar mejoras basicas de accesibilidad en HTML.
4. Revisar errores en la consola del navegador.
5. Ajustar estilos CSS para mejorar legibilidad, contraste y responsive design.
6. Usar una libreria externa, como Bootstrap o Chart.js, dentro de un proyecto web.
7. Probar una pagina antes y despues de modificarla.
8. Documentar evidencias tecnicas de tu proceso.

---

## 2. Antes de empezar: conceptos clave

### 2.1 Usabilidad

La usabilidad responde a esta pregunta:

> ¿Una persona puede entender y usar esta pagina sin confundirse?

Una pagina con buena usabilidad tiene menus claros, botones con textos precisos, formularios faciles de completar y mensajes comprensibles. Por ejemplo, un boton que dice `Click aqui` no es tan claro como un boton que dice `Revisar diagnostico del sitio`, porque el segundo explica la accion.

### 2.2 Accesibilidad

La accesibilidad busca que mas personas puedan usar una pagina web. Esto incluye personas con dificultades visuales, personas que navegan desde celular, usuarios con conexiones lentas o personas que necesitan lectores de pantalla.

Buenas practicas basicas:

- Usar texto alternativo en imagenes con `alt`.
- Asociar cada campo del formulario con una etiqueta `label`.
- Usar buen contraste entre texto y fondo.
- No depender solo del color para comunicar errores.
- Escribir mensajes de error claros.
- Usar estructura semantica: `header`, `nav`, `main`, `section`, `article`, `footer`.

### 2.3 Diseno y estructura

El diseno no es solo decorar. Tambien consiste en ordenar la informacion para que el usuario comprenda rapidamente que debe hacer.

Una buena estructura web permite identificar:

- Donde empieza el encabezado.
- Donde esta el menu.
- Cual es el contenido principal.
- Que secciones tiene la pagina.
- Donde esta el formulario.
- Donde termina el sitio.

### 2.4 Optimizacion

Optimizar significa mejorar el proyecto para que sea mas rapido, claro, mantenible y confiable. En este taller no haras optimizacion avanzada de servidores, pero si aplicaras mejoras importantes:

- Eliminar o reducir codigo repetido.
- Corregir errores de consola.
- Usar nombres claros.
- Mantener separados HTML, CSS y JavaScript.
- Probar el sitio en diferentes tamanos de pantalla.
- Ejecutar una revision automatica basica con `npm run check`.

---

## 3. Librerias que vas a instalar

Este proyecto usa Node.js y npm para instalar librerias. Cuando ejecutes `npm install`, se descargaran las herramientas necesarias para que el proyecto funcione.

| Libreria | Para que sirve en este taller |
|---|---|
| Vite | Permite ejecutar el proyecto localmente con recarga rapida. |
| Bootstrap | Ayuda a crear disenos responsive, botones, tarjetas y formularios. |
| Bootstrap Icons | Agrega iconos visuales al proyecto. |
| Chart.js | Permite mostrar una grafica de participacion. |

No debes descargar estas librerias manualmente una por una. El archivo `package.json` ya las tiene registradas. Solo debes ejecutar `npm install`.

---

## 4. Requisitos tecnicos

Antes de iniciar necesitas tener instalado:

1. Visual Studio Code.
2. Node.js.
3. Un navegador web como Google Chrome, Microsoft Edge o Firefox.

Para comprobar que tienes Node.js instalado, abre una terminal y escribe:

```bash
node -v
```

Luego escribe:

```bash
npm -v
```

Si ambos comandos muestran una version, puedes continuar.

---

## 5. Estructura del proyecto

Cuando abras la carpeta, veras esta estructura:

```text
semana14-taller-usabilidad-accesibilidad-optimizacion/
|
|-- index.html
|-- package.json
|-- README.md
|-- src/
|   |-- main.js
|   |-- styles.css
|
|-- public/
|   |-- img/
|       |-- feria-rural.svg
|
|-- scripts/
|   |-- check-project.js
|
|-- docs/
|   |-- plantilla-diagnostico.md
|   |-- informe-entrega.md
|   |-- lista-chequeo.md
|   |-- rubrica.md
|
|-- evidencias/
|   |-- .gitkeep
```

### Que hace cada archivo

| Archivo o carpeta | Funcion |
|---|---|
| `index.html` | Contiene la estructura principal de la pagina. Aqui corregiras etiquetas, formularios, textos y accesibilidad. |
| `src/styles.css` | Contiene los estilos personalizados. Aqui mejoraras contraste, responsive design y codigo repetido. |
| `src/main.js` | Contiene la logica de interaccion, validacion del formulario y la grafica con Chart.js. |
| `package.json` | Define las librerias y comandos del proyecto. |
| `scripts/check-project.js` | Ejecuta una revision automatica basica del proyecto. |
| `docs/` | Contiene plantillas para diagnostico, informe, lista de chequeo y rubrica. |
| `evidencias/` | Carpeta donde puedes guardar capturas de pantalla antes de entregar. |

---

## 6. Paso a paso para ejecutar el proyecto

### Paso 1. Abre la carpeta en VS Code

Abre Visual Studio Code y selecciona la carpeta del proyecto.

### Paso 2. Abre la terminal integrada

En VS Code puedes abrirla con:

```text
Terminal > New Terminal
```

### Paso 3. Instala las librerias

Ejecuta:

```bash
npm install
```

Este comando creara una carpeta llamada `node_modules`. Esa carpeta no se entrega y no se sube a Moodle. Es normal que sea pesada.

### Paso 4. Ejecuta el proyecto

Ejecuta:

```bash
npm run dev
```

La terminal mostrara una direccion parecida a:

```text
http://localhost:5173/
```

Abre esa direccion en tu navegador.

### Paso 5. Observa la pagina antes de modificar

Antes de cambiar codigo, revisa la pagina como usuario. Preguntate:

- ¿Entiendo rapidamente de que trata?
- ¿Los botones son claros?
- ¿El formulario se entiende?
- ¿La pagina se ve bien en celular?
- ¿Hay errores en consola?
- ¿Los textos se leen bien?
- ¿Las imagenes tienen descripcion?

Toma una captura inicial y guardala en la carpeta `evidencias/`.

---

## 7. Como abrir la consola del navegador

En Google Chrome o Edge:

1. Abre la pagina.
2. Presiona `F12` o clic derecho > `Inspeccionar`.
3. Entra a la pestana `Console`.
4. Interactua con la pagina.
5. Observa si aparecen errores rojos.

En este proyecto hay un error intencional al hacer clic en el boton que dice `Click aqui`. Debes encontrarlo en `src/main.js`, entenderlo y corregirlo.

---

## 8. Tu mision practica

Debes mejorar el proyecto en cinco frentes.

### Frente 1. Usabilidad

Busca elementos que puedan confundir al usuario.

Minimo debes mejorar:

- El texto del boton `Click aqui`.
- Los mensajes del formulario.
- La claridad de las instrucciones.
- La forma en que el usuario entiende que debe hacer.

Ejemplo:

```html
<button>Click aqui</button>
```

Puede mejorar asi:

```html
<button>Revisar diagnostico del sitio</button>
```

### Frente 2. Accesibilidad

Minimo debes corregir:

- Imagen principal sin atributo `alt`.
- Campo de correo sin etiqueta `label` visible y asociada.
- Label de nombre sin atributo `for`.
- Contenedor de mensajes del formulario sin `aria-live` o `role="alert"`.
- Contraste debil en el texto principal.

Ejemplo:

```html
<label for="studentEmail" class="form-label">Correo electronico</label>
<input id="studentEmail" name="studentEmail" type="email">
```

### Frente 3. Diseno y estructura

Minimo debes revisar:

- Jerarquia de titulos.
- Separacion visual entre secciones.
- Consistencia entre tarjetas.
- Responsive design en celular.
- Codigo HTML organizado.

Tambien puedes agregar comentarios breves en el codigo si ayudan a entender la estructura.

### Frente 4. JavaScript y pruebas

Minimo debes corregir:

- El error de consola producido por `mostrarDiagnosticoRapido()`.
- La validacion debil del telefono.
- La falta de validacion del checkbox de autorizacion.
- Los mensajes de error generales.

Una validacion mas adecuada para telefono puede verificar que tenga exactamente 10 digitos:

```js
const phoneRegex = /^\d{10}$/;
```

### Frente 5. Optimizacion

Minimo debes mejorar:

- Codigo CSS repetido en efectos `hover`.
- Uso de clases reutilizables.
- Limpieza de comentarios que ya no sean necesarios.
- Revision con el comando `npm run check`.

---

## 9. Revision automatica basica

Cuando termines tus cambios, ejecuta:

```bash
npm run check
```

Este comando no reemplaza tu criterio, pero te ayuda a revisar si el proyecto tiene algunos elementos importantes.

Si aparece algun mensaje con `REVISAR`, vuelve al codigo, corrige y ejecuta nuevamente el comando.

---

## 10. Evidencias que debes entregar

Debes entregar una carpeta comprimida `.zip` o un enlace a repositorio. La entrega debe incluir:

1. Proyecto corregido.
2. Captura del proyecto antes de los cambios.
3. Captura del proyecto despues de los cambios.
4. Captura de la consola del navegador sin errores.
5. Captura o texto del resultado de `npm run check`.
6. Informe de entrega completado.
7. Diagnostico inicial completado.

Puedes usar estas plantillas:

- `docs/plantilla-diagnostico.md`
- `docs/informe-entrega.md`
- `docs/lista-chequeo.md`

---

## 11. Actividad de busqueda y apoyo

Antes de corregir, debes consultar minimo dos recursos de apoyo. Puedes buscar con estas frases:

```text
MDN HTML label accessibility
MDN img alt attribute
Bootstrap forms documentation
Chart.js responsive chart
Web accessibility contrast
Vite getting started
```

En tu informe debes escribir que consultaste y que aprendiste de cada recurso.

---

## 12. Entregable final

Tu entrega debe llamarse:

```text
Semana14_Taller_Practico_NombreApellido.zip
```

Dentro del ZIP deben estar:

```text
index.html
package.json
src/
public/
docs/
evidencias/
README.md
```

No incluyas la carpeta `node_modules`.

---

## 13. Recomendacion final

No corrijas todo de una sola vez. Trabaja de forma ordenada:

1. Ejecuta el proyecto.
2. Observa la pagina.
3. Toma evidencias iniciales.
4. Corrige HTML.
5. Corrige CSS.
6. Corrige JavaScript.
7. Prueba en navegador.
8. Ejecuta `npm run check`.
9. Completa el informe.
10. Entrega tu ZIP.

Recuerda: un buen proyecto web no solo debe funcionar. Tambien debe ser claro, accesible, ordenado, probado y facil de mejorar.
