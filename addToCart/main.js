 // Clase Producto
class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }
}

// Clase Carrito
class ShoppingCart {
  constructor() {
    this.items = [];
    this.totalAmount = 0;
    this.includeHoodie = false;
    this.shippingCost = 0;
  }

  addItem(product) {
    const existingItem = this.items.find((item) => item.product.id === product.id);
    if (existingItem) {
      if (existingItem.quantity < 10) {
        existingItem.quantity += 1;
        this.totalAmount += product.price;
        alert(`¡${product.name} ha sido agregado al carrito de compras!`);
      } else {
        alert(`¡No se puede agregar más de 10 unidades. Stock limite de ${product.name} al carrito!`);
      }
    } else {
      this.items.push({ product, quantity: 1 });
      this.totalAmount += product.price;
      alert(`¡${product.name} ha sido agregado al carrito de compras!`);
    }
  }


  removeItem(product) {
    const existingItem = this.items.find((item) => item.product.id === product.id);
    if (existingItem && existingItem.quantity > 1) {
      existingItem.quantity -= 1;
      this.totalAmount -= product.price;
    } else if (existingItem) {
      const index = this.items.indexOf(existingItem);
      this.items.splice(index, 1);
      this.totalAmount -= product.price * existingItem.quantity;
    }
    alert(`¡${product.name} ha sido eliminado del carrito de compras!`);
  }

  viewCart() {
    if (this.items.length === 0) {
      alert("No has agregado ningún producto al carrito. Por favor, agrega productos antes de ver el carrito.");
      return;
    }

    let cartList = "Tu carrito de compras:\n";
    this.items.forEach((item) => {
      cartList += `Nombre: ${item.product.name}, Cantidad: ${item.quantity}, Precio Unitario: $${item.product.price}, Precio Total: $${item.product.price * item.quantity}\n`;
    });

    if (this.includeHoodie) {
      const hoodiePrice = 499;
      const discount = (hoodiePrice * 25) / 100;
      cartList += `Hoodie con 25% de descuento: $${hoodiePrice - discount}\n`;
    }

    cartList += `Total: $${this.totalAmount}\n`;

    if (this.totalAmount > 0) {
      let shippingMessage = "";
      if (this.totalAmount >= 1000 && !this.includeHoodie) {
        this.shippingCost = 0;  // Envío GRATIS
        shippingMessage = "Envío: GRATIS";
      } else {
        this.shippingCost = 10;
        shippingMessage = `Costo de Envío: $${this.shippingCost}`;
      }

      cartList += shippingMessage + "\n";
    }

    alert(cartList);
  }

  checkout() {
    if (this.items.length === 0) {
      alert("No has agregado ningún producto al carrito. Por favor, agrega productos antes de realizar la compra.");
      return;
    }

    if (this.totalAmount > 1000) {
      const decision = prompt("Tu compra supera los $1000. ¿Deseas agregar un hoodie a tu carrito el cual tiene un precio de $499 con descuento del 25%? (Presiona 1 para Sí, 0 para No):");
      if (decision === "1") {
        const hoodiePrice = 499;
        const discount = (hoodiePrice * 0.25);
        this.totalAmount += (hoodiePrice - discount);
        this.includeHoodie = true;
      }
    }

    let shippingMessage = "";
    if (this.totalAmount >= 1000) {
      this.shippingCost = 0;  // Envío GRATIS
      shippingMessage = "Envío GRATIS";
    } else {
      this.shippingCost = 10;
      shippingMessage = `Costo de Envío: $${this.shippingCost}`;
    }

    const totalWithShipping = this.totalAmount + this.shippingCost;

    const purchaseDetails = `Precio de compra: $${this.totalAmount}\n${shippingMessage}\nCosto Total (incluyendo envío): $${totalWithShipping}`;
    alert(purchaseDetails);
    alert("¡Gracias por confiar en nosotros, te esperamos nuevamente. Hasta pronto!");
  }
}

// Lista de productos disponibles
const products = [
  new Product(1, "Outfit 1 ($499)", 499),
  new Product(2, "Outfit 2 ($599)", 599),
  new Product(3, "Outfit 3 ($999)", 999),
];

// Ejemplo de uso
alert("Bienvenido al carrito de compras. Enter para comenzar.");

const cart = new ShoppingCart();

// ...

while (true) {
  const choice = prompt("Elige una opción:\n1. Agregar al Carrito\n2. Eliminar del Carrito\n3. Ver Carrito\n4. Comprar\n5. Salir");

  switch (choice) {
    case "1":
      const productIdToAddToCart = prompt("Ingresa el ID del producto que deseas agregar al carrito (1, 2 o 3):");
      const productToAddToCart = products.find((product) => product.id === Number(productIdToAddToCart));
      if (productToAddToCart) {
        cart.addItem(productToAddToCart);
      } else {
        alert(`El producto con ID ${productIdToAddToCart} no fue encontrado.`);
      }
      break;
    case "2":
      if (cart.items.length === 0) {
        alert("No hay productos en el carrito para eliminar.");
      } else {
        const productIdToRemoveFromCart = prompt("Ingresa el ID del producto que deseas eliminar del carrito (1, 2 o 3):");
        const productToRemoveFromCart = products.find((product) => product.id === Number(productIdToRemoveFromCart));

        if (productToRemoveFromCart) {
          const productInCart = cart.items.find((item) => item.product.id === productToRemoveFromCart.id);

          if (productInCart) {
            cart.removeItem(productToRemoveFromCart);
            alert(`¡${productToRemoveFromCart.name} ha sido eliminado del carrito de compras!`);
          } else {
            alert(`El producto con ID ${productIdToRemoveFromCart} no está en tu carrito de compras.`);
          }
        } else {
          alert(`El producto con ID ${productIdToRemoveFromCart} no fue encontrado.`);
        }
      }
      break;
    case "3":
      if (cart.items.length === 0) {
        alert("No has agregado ningún producto al carrito. Por favor, agrega productos antes de ver el carrito.");
      } else {
        cart.viewCart();
      }
      break;
      case "4":
        if (cart.items.length === 0) {
          alert("No has agregado ningún producto al carrito. Por favor, agrega productos antes de realizar la compra.");
        } else {
          cart.checkout();

          // Crear un nuevo carrito vacío
          cart = new ShoppingCart();
        }
      break;
      case "5":
        alert("¡Gracias por confiar en nosotros, te esperamos nuevamente. Hasta pronto!");
      default:
        alert("Opción no válida. Por favor, selecciona una opción válida.");
    }
}




