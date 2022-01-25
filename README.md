# Proyecto Mercado LIEBRE

# OBJETIVOS SPRINT #01

### PARTE 01: NODE JS EXPRESS

#### Estructura de CARPETAS - MercadoLiebre

![site - MAp](https://i.pinimg.com/originals/38/f0/43/38f043187d45ff6dd95078e8825004ea.jpg)

1) Crear estructura de un proyecto express y levantar un servidor

2)Copiar
las imágenes que recibiste en su carpeta del proyecto “img

3)Crear
un archivo home.html con
la estructura html necesaria.

```js
npm init
touch app.js
npm install
// definir package = package.json
//entering point = app.js
// test = run test.jsnpm install package.json
// crea node_modules

npm install express
//instala express
//APP.js - CONFIGURANDO EXPRESS

const express = require('express')
node app.js
const app = express()
node app.js


app.listen(3030, () => {
console.log('Levantando NODE WEB SERVER - PORT 3030')
})

//Para seguir adelante con operaciones de node cortar ejecucion del servidor con control-command c

```

ESTRUCTURA **HEADER**


| HEADER                                                                              |
| ------------------------------------------------------------------------------------- |
| 1. Logo                                                                             |
| 2. Lugar para poner la barra de búsqueda                                           |
| 3. COMPRÁ EN CUOTAS Y SIN TARJETA DE CRÉDITO                                      |
| 4. Barra de navegación que posea las siguientes opciones (en el orden que decidas) |
|                                                                                     |

<hr/> TIENDAS OFICIALES <hr/> VENDER <hr/> OFERTAS <hr/>MIS COMPRAS<hr/> INGRESÁ <hr/> CREÁ TU CUENTA <hr/> AYUDA

```HTML
<header>
<div>
    <img src=“RUTA-LOGO” alt=“Logo de la empresa”/>
</div> 
<div>
    <h2> "SLOGAN BRAND " </h2>
</div>
    <nav>
      <ul>
         <li><a href=“#”>TIENDAS OFICIALES</a></li>
         <li><a href=“#”>VENDER</a></li>
         <li><a href=“#”>OFERTAS</a></li>
         <li><a href=“#”>MIS COMPRAS</a></li>
         <li><a href=“#”>INGRESÁ</a></li>
		 <li><a href=“#”>CREÁ TU CUENTA</a></li>
         <li><a href=“#”>AYUDA</a></li>
        </ul>   
    </nav>
```

![PREVIEW HEADER 01](https://i.pinimg.com/originals/ed/53/3e/ed533eaa20b1373b0220319312d3179b.jpg)
