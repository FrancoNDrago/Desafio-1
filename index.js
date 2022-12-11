class ProductManager {
    static id = 0;
    static products;

    constructor(title, description, price, thumbnail, code, stock) {
      ProductManager.id +=1;
      this.products = [];
      this.title=title;
      this.description=description;
      this.price=price;
      this.thumbnail=thumbnail;
      this.code=code;
      this.stock=stock;
    }
    addProduct(product) {
      this.product.push({title: this.title,description: this.description,price: this.price,
      thumbnail: this.thumbnai,code: this.code,stock: this.stock});  
      // if () {
  
      // }
    }
    getProducts() {
      return this.products;
    }
    getProductById(index) {
      console.log("Id del producto:", find(index, 1).products);
      // retornar el producto que cuente con este id
      // pista: Utilizar find()
    }
  }

  const product1 = new ProductManager("Camiseta","Camiseta de la selección",19.999,"url","ARG10",10);
  product1.addProduct()

  const product2 = new ProductManager("Short","Short de la selección",8.999,"url","ARG11",10);
  product2.addProduct()

  const product3 = new ProductManager("Botines","Botines futbol 11",21.999,"url","ADI10",4);
  product3.addProduct()