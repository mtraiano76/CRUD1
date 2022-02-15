const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	index: (req, res) => {

		// obteber productos y filtrar por categoria
		// productos con categoria in sale y visited
		const inSaleProducts = products.filter((product)=> product.category==='in-sale');
		const visitedProducts = products.filter((product)=>product.category==='visited');

		//return res.json({inSaleProducts,visitedProducts})
		// Paso los datos a la vista
		//Segunso parametro datos a enviar a la vista
		return res.render("index",{inSaleProducts, visitedProducts})


	},
	search: (req, res) => {
		// Do the magic
	},
};

module.exports = controller;
