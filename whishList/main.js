// Clase Producto
class Product {
    constructor(id, name, price) {
      this.id = id;
      this.name = name;
      this.price = price;
    }
  }

  // Clase Lista de Deseos
  class Wishlist {
    constructor() {
      this.items = [];
    }

    addItem(product) {
      this.items.push(product);
      alert(`¡${product.name} ha sido agregado a tu lista de deseos!`);
    }

    removeItem(product) {
      const index = this.items.indexOf(product);
      if (index !== -1) {
        const removedProduct = this.items.splice(index, 1)[0];
        alert(`¡${removedProduct.name} ha sido eliminado de tu lista de deseos!`);
      }
    }

    viewWishlist() {
      let wishlist = "Tu lista de deseos:\n";
      this.items.forEach((product) => {
        wishlist += `ID: ${product.id}, Nombre: ${product.name}, Precio: $${product.price}\n`;
      });
      alert(wishlist);
    }
  }

  // Lista de productos disponibles
  const products = [
    new Product(1, "Producto 1", 499),
    new Product(2, "Producto 2", 599),
    new Product(3, "Producto 3", 999),
  ];

  // Ejemplo de uso
  alert("Bienvenido a tu lista de deseos. Vamos a comenzar.");

  const wishlist = new Wishlist();

  while (true) {
    const choice = prompt("Elige una opción:\n1. Agregar a Lista de Deseos\n2. Eliminar de Lista de Deseos\n3. Ver Lista de Deseos\n4. Salir");

    switch (choice) {
      case "1":
        const productIdToAddToWishlist = prompt("Ingresa el ID del producto que deseas agregar a tu lista de deseos:");
        const productToAddToWishlist = products.find((product) => product.id === Number(productIdToAddToWishlist));
        if (productToAddToWishlist) {
          wishlist.addItem(productToAddToWishlist);
        } else {
          alert(`El producto con ID ${productIdToAddToWishlist} no fue encontrado.`);
        }
        break;
      case "2":
        const productIdToRemoveFromWishlist = prompt("Ingresa el ID del producto que deseas eliminar de tu lista de deseos:");
        const productToRemoveFromWishlist = products.find((product) => product.id === Number(productIdToRemoveFromWishlist));
        if (productToRemoveFromWishlist) {
          wishlist.removeItem(productToRemoveFromWishlist);
        } else {
          alert(`El producto con ID ${productIdToRemoveFromWishlist} no está en tu lista de deseos.`);
        }
        break;
      case "3":
        wishlist.viewWishlist();
        break;
      case "4":
        alert("Gracias por usar tu lista de deseos. ¡Hasta luego!");
      default:
        alert("Opción no válida. Por favor, selecciona una opción válida.");
    }
  }
