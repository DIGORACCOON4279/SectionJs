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
    // Agregar un producto al carrito
    this.items.push(product);
  }

  removeItem(product) {
    const productIdToRemove = product.id;
    const index = this.items.findIndex((item) => item.id === productIdToRemove);

    if (index !== -1) {
      this.items.splice(index, 1);
      alert(`¡${product} ha sido eliminado del carrito de compras!`);
    } else {
      alert(`El producto con ID ${productIdToRemove} no fue encontrado en el carrito.`);
    }
  }

  addFavorite(product) {
    this.favorites.push(product);
    product.isFavorite = true;
  }

  removeFavorite(product) {
    const index = this.favorites.indexOf(product);
    if (index !== -1) {
      this.favorites.splice(index, 1);
    }
    product.isFavorite = false;
  }

  viewCart() {
    if (this.items.length === 0) {
      alert("El carrito de compras está vacío.");
    }

    else {
      let cartList = "Productos en el carrito:\n";
      this.items.forEach((product) => {
        cartList += `${product}\n`;
      });

      let totalAmount = 0;
      this.items.forEach((product) => {
        totalAmount += product.price;
      });

      let discountMessage = "";
      let hasHoodie = false;

      if (totalAmount >= 1000) {
        const decision = prompt("Tu compra supera los $1000. ¿Deseas agregar un 'hoodie' con un precio de $499 y un descuento del 25%? (Presiona 1 para Sí, 0 para No):");
        if (decision === "1") {
          hasHoodie = true;
          totalAmount += 499;
          discountMessage = "Descuento aplicado: 25%";
          totalAmount *= 0.75;
        } else {
          hasHoodie = false;
        }
      }

      cartList += `Has agregado un "hoodie" con un valor de ${hasHoodie ? 1 : 0}.\n`;

      let colorChoiceMessage = "No se ha especificado un color.";
      if (this.items[0].colorChoice) {
        colorChoiceMessage = `Color seleccionado: ${this.items[0].colors[this.items[0].colorChoice - 1]}`;
      }

      const purchaseDetails = `Precio de compra: $${totalAmount}\n${discountMessage}\n${colorChoiceMessage}`;
      alert(purchaseDetails);
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
    let hasHoodie = false; // Variable para rastrear si se ha agregado el "hoodie"

    this.items.forEach((product) => {
      totalAmount += product.price;
      if (product.id === 4) { // ID del "hoodie"
        hasHoodie = true;
      }
    });

    if (totalAmount >= 1000 && !hasHoodie) {
      const decision = prompt("Tu compra supera los $1000. ¿Deseas agregar un hoodie a tu carrito el cual tiene un precio de $499? (Presiona 1 para Sí, 0 para No):");
      if (decision === "1") {
        hasHoodie = true;
        totalAmount += 499;
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

    // Eliminar productos del carrito
    this.items = [];

    alert("¡Gracias por confiar en nosotros, te esperamos nuevamente. Hasta pronto!");
  }
}

const products = [
  new Product(1, "Outfit 1 ($499)", 499, ["Color", "Negro", "Blanco"]),
  new Product(2, "Outfit 2 ($599)", 599, ["Color", "Negro", "Blanco"]),
  new Product(3, "Outfit 3 ($999)", 999, ["Color", "Negro", "Blanco"]),
];

const cart = new ShoppingCart();

let hasPurchased = false;

while (true) {
  const choice = prompt(
    "Elige una opción:\n1. Agregar al Carrito\n2. Eliminar del Carrito\n3. Ver Carrito\n4. Comprar\n5. Agregar a Favoritos\n6. Eliminar de Favoritos\n7. Ver Favoritos\n8. Salir"
  );

  switch (choice) {

    case "1":
      const productIdToAddToCart = prompt("Ingresa el ID del producto que deseas agregar al carrito (1, 2 o 3):");
      const productToAddToCart = products.find((product) => product.id === Number(productIdToAddToCart));

      if (productToAddToCart) {
        const colorChoice = prompt(`Selecciona un color para ${productToAddToCart.name}:\n1. Color\n2. Negro\n3. Blanco`);
        if (colorChoice >= 1 && colorChoice <= 3) {
          const productCopy = new Product(productToAddToCart.id, productToAddToCart.name, productToAddToCart.price, productToAddToCart.colors);
          productCopy.colorChoice = colorChoice;
          cart.addItem(productCopy);
          alert(`¡${productCopy} ha sido agregado al carrito de compras!`);
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
          // Eliminar un producto del carrito
          cart.removeItem(productToRemoveFromCart);
          alert(`¡${productToRemoveFromCart} ha sido eliminado del carrito de compras!`);
        } else {
          alert(`El producto con ID ${productIdToRemoveFromCart} no fue encontrado en el carrito.`);
        }
      }
      break;


      case "3":
  if (cart.items.length === 0) {
    alert("El carrito de compras está vacío.");
  } else {
    let cartList = "Productos en el carrito:\n";
    let totalAmount = 0;

    cart.items.forEach((product) => {
      const productName = product.name;
      const productColor = product.colors[product.colorChoice - 1];
      const productPrice = product.price;

      // Calculamos el precio total de este producto y color
      const productTotal = productPrice;

      cartList += `${productName} - Color: ${productColor} - $${productTotal}\n`;

      // Agregamos el precio total de este producto y color al total general
      totalAmount += productTotal;
    });

    // const shippingCost = totalAmount >= 1000 ? "Envío: GRATIS" : `Costo de Envío: $10`;
    totalAmount += totalAmount >= 1000 ? 0 : 10;
    // const purchaseDetails = `Precio de compra: ${totalAmount}\n${shippingCost}\nCosto Total (incluyendo envío): $${totalAmount}`;
    // ${purchaseDetails}

    alert(`${cartList}\n`);
  }
  break;











      case "4":
        if (cart.items.length === 0) {
          alert("No has agregado ningún producto al carrito. Por favor, agrega productos antes de realizar la compra.");
        } else {
          // Calcula el costo total de los productos en el carrito
          let totalAmount = 0;
          cart.items.forEach((product) => {
            totalAmount += product.price;
          });

          // Pregunta si el usuario quiere agregar un hoddy con descuento
          if (totalAmount >= 1000) {
            const decision = prompt("Tu compra supera los $1000. ¿Deseas agregar un hoddy con un precio de $499 y un descuento del 25%? (Presiona 1 para Sí, 0 para No):");
            if (decision === "1") {
              totalAmount += 374.25; // Precio del hoddy con descuento del 25%
            }
          }

          // Calcula el costo de envío
          let shippingCost = totalAmount >= 1000 ? 0 : 10;

          // Calcula el costo total
          const totalWithShipping = totalAmount + shippingCost;

          // Muestra los detalles de la compra
          alert(`Costo total de los productos: $${totalAmount}\nCosto de envío: $${shippingCost}\nCosto Total (incluyendo envío): $${totalWithShipping}`);

          // Elimina productos del carrito
          cart.items = [];

          hasPurchased = true;
          alert("¡Gracias por confiar en nosotros, te esperamos nuevamente. Hasta pronto!");
        }
        break;


    case "5":
      const productIdToAddToFavorites = prompt("Ingresa el ID del producto que deseas agregar a tus favoritos (1, 2 o 3):");
      const productToAddToFavorites = products.find((product) => product.id === Number(productIdToAddToFavorites));
      if (productToAddToFavorites) {
        cart.addFavorite(productToAddToFavorites);
        alert(`¡${productToAddToFavorites} ha sido agregado a tus favoritos!`);
      } else {
        alert(`El producto con ID ${productIdToAddToFavorites} no fue encontrado.`);
      }
      break;

    case "6":
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

    case "7":
      cart.viewFavorites();
      break;

    case "8":
      if (hasPurchased) {
        alert("¡Gracias por tu compra! Te esperamos nuevamente. Hasta pronto!");
      } else {
        alert("¡Gracias por usar nuestro servicio. Te esperamos nuevamente. Hasta pronto!");
      }
      break;

    default:
      alert("Opción no válida. Por favor, selecciona una opción válida.");
  }
}
