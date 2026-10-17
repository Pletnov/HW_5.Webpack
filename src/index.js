import Product from "./product";
import './styles/style.css';
import json from './assets/json.json';
import xml from './assets/data.xml';

const product = new Product('Laptop', 'WebpackLogo');
console.log('Product: ', product.toString());
console.log(json);
console.log(xml);