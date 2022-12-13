class ProductManager {
    static id = 1;
    static products;

    constructor(title, description, price, thumbnail, code, stock) {
      ProductManager.id +=0;
      this.products = [];
      this.title=title;
      this.description=description;
      this.price=price;
      this.thumbnail=thumbnail;
      this.code=code;
      this.stock=stock;
    }

    addProduct(product) {
      product = { ...product, id: ProductManager.id };
      let assignedCode = this.products.find(
        (product) => product.code === this.code
      );
      if (assignedCode) {
        return console.log(
        "El codigo del producto", 
        product.title, 
        "tiene que ser distinto al de los demas productos"
        );
      } else {
        this.products.push(product);
        ProductManager.id++;
      }
    }

    getProducts() {
      return this.products;
    }

    getProductById(id) {
      let searchID = id;
      let myProduct = null;
      this.products.forEach((product) => {
        if (product.id === searchID) {
          myProduct = product;
        }
      });
      if (myProduct === null) {
        return console.log("Este id", searchID, "no fue encontrado");
      } else {
        return console.log("Este id", searchID, "pertenece al producto ", myProduct.title);
      }
    }
  }

const productList = new ProductManager();


const product1 = new ProductManager("Camiseta","Camiseta de la selección",19.999,"https://assets.adidas.com/images/w_600,f_auto,q_auto/d88ae2138faf49be8f74aeca012c62eb_9366/Camiseta_Titular_Argentina_22_Messi_Blanco_HL8425_01_laydown.jpg",
"ARG10",10);

const product2 = new ProductManager("Short","Short de la selección",8.999,"https://sporting.vtexassets.com/arquivos/ids/560737/6HK8071-000-1.jpg?v=637931679922730000",
"ARG10",8);

const product3 = new ProductManager("Botines","Botines futbol 11",21.999,"https://pbs.twimg.com/media/Fgv6gXUXkAE6Kg1?format=jpg&name=900x900",
"ARG10",4);


productList.addProduct(product1);
productList.addProduct(product2);
productList.addProduct(product3);


console.log("Cargando productos... ");
productList.addProduct(product1);
productList.addProduct(product2);
productList.addProduct(product3);

console.log("Lista de productos: ");
console.log(productList.getProducts());

console.log("Producto con ID = 2");
console.log(productList.getProductById(2));
