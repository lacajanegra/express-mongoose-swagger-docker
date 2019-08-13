# Segmentación sanitaria

Express Starter kit is express js framework and boilerplat, which contains the different features, those are helps the developer to start web api development easily. Developer can easily code, test, documented the api during the development process. It also have good architecture, which helps the developer to maintain the code.

## Instalación

Se debe clonar el repo

1. Instala el paquete Yarn `npm install -g yarn`
2. Ejecuta el comando `yarn`
3. Para iniciar el proyecto, ejecuta `yarn nodemon`

## Uso de la app

3. Agregar modelo:

```swagger
/**
* @swagger
* definition:
*   (entity/DB Table name):
*     properties:
*       (Column Name/attibute name):
*           type: (Swagger data type)
*/
```

Ej: Models/Product.js

```javascript
/**
 * @swagger
 * definition:
 *   Product:
 *     properties:
 *       prod_name:
 *           type: string
 *       prod_desc:
 *           type: string
 *       prod_price:
 *           type: number
 */
var ProductSchema = new mongoose.Schema({
  prod_name: String,
  prod_desc: String,
  prod_price: Number,
  update_at: { type: Date, default: Date.now }
});
```

3. Agregar route:

For product routes (e,g) routes/products.js
Require of these information:

```javascript
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Product = require('../models/(product model name).js');
```

Ej: routes/products.js

```javascript
/**
 * @swagger
 * /products:
 *   post:
 *     tags:
 *       - Products
 *     description: Creates a new Product
 *     produces:
 *       - application/json
 *     parameters:
 *       - name: product
 *         description: Product object
 *         in: body
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Product'
 *     responses:
 *       200:
 *         description: Successfully created
 */
router.post('/', (req, res, next) => {
  Product.saveProduct(req.body, results => {
    res.json(results);
  });
});
```
