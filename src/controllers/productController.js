//Requerimos modulo fs y path
const fs = require('fs');
const path = require('path');

// Mete la ruta del JSON en una var para poder acceder a el 
const productsFilePath = path.join(__dirname, '../data/products.json');
// parsea y lee el JSON productsfilepath
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));
// Para que los miles tengan punto y se pueda entender el precio
const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


let controller = { 
      
        detail: (req, res) => {
           
            let productId = +req.params.id;
            let product = products.find(product => products === productId)
            
            res.send(product)

           
         },
};

module.exports = controller