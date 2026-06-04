# Informe de entrega - Semana 14

## 1. Datos generales

* Nombre del estudiante: Cristian David Ramírez
* Grupo: __________
* Fecha: 3/0/2026
* Nombre del proyecto: Feria Rural Digital

## 2. Librerías instaladas

* [x] Vite
* [x] Bootstrap
* [x] Bootstrap Icons
* [x] Chart.js

## 3. Cambios realizados

| Numero | Problema inicial                       | Cambio aplicado                               | Archivo modificado | Tipo de mejora |
| ------ | -------------------------------------- | --------------------------------------------- | ------------------ | -------------- |
| 1      | Botón con texto poco claro             | Se cambió por "Revisar diagnóstico del sitio" | index.html         | Usabilidad     |
| 2      | Imagen sin atributo alt                | Se agregó texto alternativo descriptivo       | index.html         | Accesibilidad  |
| 3      | Error al hacer clic en el botón        | Se corrigió la función JavaScript             | src/main.js        | JS             |
| 4      | Validación débil del teléfono          | Se exigieron exactamente 10 dígitos           | src/main.js        | JS             |
| 5      | No se validaban términos y condiciones | Se agregó validación obligatoria              | src/main.js        | JS             |
| 6      | Campo nombre sin asociación correcta   | Se agregó atributo for al label               | index.html         | Accesibilidad  |
| 7      | Campo correo sin etiqueta visible      | Se agregó label descriptivo                   | index.html         | Accesibilidad  |
| 8      | Mensajes no accesibles                 | Se agregó role="alert" y aria-live="polite"   | index.html         | Accesibilidad  |

## 4. Pruebas realizadas

* [x] Ejecute el proyecto con `npm run dev`.
* [x] Revise la página en el navegador.
* [x] Probé el formulario con datos vacíos.
* [x] Probé el formulario con teléfono incorrecto.
* [x] Probé el formulario con teléfono de 10 dígitos.
* [x] Revisé la consola del navegador.
* [x] Ejecuté `npm run build`.
* [x] Revisé la página en vista móvil.

## 5. Evidencias

| Evidencia                  | Nombre del archivo   |
| -------------------------- | -------------------- |
| Antes de los cambios       | pagina_inicial.png   |
| Después de los cambios     | pagina_corregida.png |
| Consola sin errores        | consola_ok.png       |
| Resultado de npm run build | build_ok.png         |
| Vista móvil                | vista_movil.png      |

## 6. Recursos consultados

| Recurso consultado            | Qué aprendiste                                                 |
| ----------------------------- | -------------------------------------------------------------- |
| Documentación de Bootstrap    | Uso de componentes responsive y formularios accesibles         |
| Documentación de MDN Web Docs | Validaciones JavaScript, accesibilidad y buenas prácticas HTML |

## 7. Reflexión final

1. ¿Qué fue lo más difícil de corregir?

Lo más difícil fue identificar y corregir el error JavaScript que impedía el funcionamiento correcto del botón de diagnóstico.

2. ¿Qué aprendiste sobre accesibilidad?

Aprendí la importancia de utilizar etiquetas asociadas a los formularios, atributos alt en imágenes y mensajes accesibles para todos los usuarios.

3. ¿Por qué no basta con que una página simplemente funcione?

Porque también debe ser fácil de usar, accesible para diferentes usuarios, comprensible y libre de errores que afecten la experiencia.

4. ¿Qué mejora agregarías si tuvieras más tiempo?

Implementaría almacenamiento de registros, validaciones más avanzadas y mejoras visuales para dispositivos móviles.
