class Product {
  constructor(id, name, price, colors) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.colors = colors;
    this.isFavorite = false;
    this.colorChoice = 0; // Por defecto, no se ha elegido un color
  }

  toString() {
    if (this.colorChoice >= 1 && this.colorChoice <= this.colors.length) {
      return `${this.name} - Color: ${this.colors[this.colorChoice - 1]} - $${this.price}`;
    } else {
      return `${this.name} - $${this.price}`;
    }
  }
}

class ShoppingCart {
  constructor() {
    this.items = [];
    this.favorites = [];
  }

  addItem(product) {
    const colorChoice = prompt(`Selecciona un color para ${product.name}:\n1. ${product.colors[0]}\n2. ${product.colors[1]}\n3. ${product.colors[2]}`);
    if (colorChoice >= 1 && colorChoice <= product.colors.length) {
      const productCopy = new Product(product.id, product.name, product.price, product.colors);
      productCopy.colorChoice = colorChoice;
      this.items.push(productCopy);
      alert(`¡${productCopy} ha sido agregado al carrito de compras!`);
    } else {
      alert("Selección de color inválida. No se ha agregado el producto al carrito.");
    }
  }

  removeItem(product) {
    const index = this.items.indexOf(product);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  addFavorite(product) {
    this.favorites.push(product);
  }

  removeFavorite(product) {
    const index = this.favorites.indexOf(product);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
  }

  viewCart() {
    if (this.items.length === 0) {
      alert("El carrito de compras está vacío.");
    } else {
      let cartList = "Productos en el carrito:\n";
      this.items.forEach((product) => {
        cartList += `${product}\n`;
      });
      alert(cartList);
    }
  }

  viewFavorites() {
    if (this.favorites.length === 0) {
      alert("No tienes productos favoritos.");
    } else {
      let favoritesList = "Tus productos favoritos:\n";
      this.favorites.forEach((product) => {
        favoritesList += `${product}\n`;
      });
      alert(favoritesList);
    }
  }

  checkout() {
    if (this.items.length === 0) {
      alert("No has agregado ningún producto al carrito. Por favor, agrega productos antes de realizar la compra.");
      return;
    }

    let totalAmount = 0;
    this.items.forEach((product) => {
      totalAmount += product.price;
    })

    if (totalAmount > 1000) {
      const decision = prompt("Tu compra supera los $1000. ¿Deseas agregar un hoodie a tu carrito el cual tiene un precio de $499 con descuento del 25%? (Presiona 1 para Sí, 0 para No):");
      if (decision === "1") {
        totalAmount += 374.25; // Precio con descuento del 25%
      }
    }

    let shippingMessage = "";
    let shippingCost = 0;
    if (totalAmount >= 1000) {
      shippingCost = 0;  // Envío GRATIS
      shippingMessage = "Envío: GRATIS";
    } else {
      shippingCost = 10;
      shippingMessage = `Costo de Envío: $${shippingCost}`;
    }

    const totalWithShipping = totalAmount + shippingCost;

    const purchaseDetails = `Precio de compra: $${totalAmount}\n${shippingMessage}\nCosto Total (incluyendo envío): $${totalWithShipping}`;
    alert(purchaseDetails);
    alert("¡Gracias por confiar en nosotros, te esperamos nuevamente. Hasta pronto!");
  }
}

const products = [
  new Product(1, "Outfit 1 ($499)", 499, ["Color", "Negro", "Blanco"]),
  new Product(2, "Outfit 2 ($599)", 599, ["Color", "Negro", "Blanco"]),
  new Product(3, "Outfit 3 ($999)", 999, ["Color", "Negro", "Blanco"]),
];

const cart = new ShoppingCart();

while (true) {
  const choice = prompt(
    "Elige una opción:\n1. Agregar al Carrito\n2. Eliminar del Carrito\n3. Ver Carrito\n4. Agregar a Favoritos\n5. Eliminar de Favoritos\n6. Ver Favoritos\n7. Comprar\n8. Salir"
  );

  switch (choice) {
    case "1":
      const productIdToAddToCart = prompt("Ingresa el ID del producto que deseas agregar al carrito (1, 2 o 3):");
      const productToAddToCart = products.find((product) => product.id === Number(productIdToAddToCart));
      if (productToAddToCart) {
        const colorChoice = prompt(`Selecciona un color para ${productToAddToCart.name}:\n1. ${productToAddToCart.colors[0]}\n2. ${productToAddToCart.colors[1]}\n3. ${productToAddToCart.colors[2]}`);
        if (colorChoice >= 1 && colorChoice <= productToAddToCart.colors.length) {
          productToAddToCart.colorChoice = colorChoice;
          cart.addItem(productToAddToCart);
          alert(`¡${productToAddToCart} ha sido agregado al carrito de compras!`);
        } else {
          alert("Selección de color inválida. No se ha agregado el producto al carrito.");
        }
      } else {
        alert(`El producto con ID ${productIdToAddToCart} no fue encontrado.`);
      }
      break;

    case "2":
      if (cart.items.length === 0) {
        alert("El carrito de compras está vacío. No se pueden eliminar productos.");
      } else {
        const productIdToRemoveFromCart = prompt("Ingresa el ID del producto que deseas eliminar del carrito (1, 2 o 3):");
        const productToRemoveFromCart = products.find((product) => product.id === Number(productIdToRemoveFromCart));
        if (productToRemoveFromCart) {
          cart.removeItem(productToRemoveFromCart);
          alert(`¡${productToRemoveFromCart} ha sido eliminado del carrito de compras!`);
        } else {
          alert(`El producto con ID ${productIdToRemoveFromCart} no fue encontrado en el carrito.`);
        }
      }
      break;

    case "3":
      cart.viewCart();
      break;

    case "4":
      const productIdToAddToFavorites = prompt("Ingresa el ID del producto que deseas agregar a tus favoritos (1, 2 o 3):");
      const productToAddToFavorites = products.find((product) => product.id === Number(productIdToAddToFavorites));
      if (productToAddToFavorites) {
        cart.addFavorite(productToAddToFavorites);
        alert(`¡${productToAddToFavorites} ha sido agregado a tus favoritos!`);
      } else {
        alert(`El producto con ID ${productIdToAddToFavorites} no fue encontrado.`);
      }
      break;

    case "5":
      if (cart.favorites.length === 0) {
        alert("No tienes productos favoritos. No se pueden eliminar productos.");
      } else {
        const productIdToRemoveFromFavorites = prompt("Ingresa el ID del producto que deseas eliminar de tus favoritos (1, 2 o 3):");
        const productToRemoveFromFavorites = products.find((product) => product.id === Number(productIdToRemoveFromFavorites));
        if (productToRemoveFromFavorites) {
          cart.removeFavorite(productToRemoveFromFavorites);
          alert(`¡${productToRemoveFromFavorites} ha sido eliminado de tus favoritos!`);
        } else {
          alert(`El producto con ID ${productIdToRemoveFromFavorites} no fue encontrado en tus favoritos.`);
        }
      }
      break;

    case "6":
      cart.viewFavorites();
      break;

    case "7":
      cart.checkout();
      break;

    case "8":
      alert("¡Gracias por usar nuestro servicio! Hasta luego.");

    default:
      alert("Opción no válida. Por favor, selecciona una opción válida.");
  }
}
