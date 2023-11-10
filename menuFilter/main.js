
// Outfit 1 = Street,
// Outfit 2 = Aggressive,
// Outfit 3 = Xtreme,

// Taxes inclusive

// let priceStreet = 499;
// let priceAggressive = 599;
// let priceExtreme = 999;

// class product{
//     constructor(id, title, price, stock, color){
//         this.id = id;
//         this.title = title;
//         this.price = price;
//         this.stock = stock;
//         this.color = color;

//     }

//     availability(quantity){
//         // let counterNewArrivals = [];
//         for(let i = 0; 1 === 10; i++) {
//             if ( this.stock <= 10 ) {
//                 this.stock ++ ;
//                 alert( `Your stock is ${this.stock}` )
//             } else {
//                 console.log( `Maximum stock of 10 units reached.`);
//                 break;
//             }
//         }
//     }
// }

fetch('outfits.json')
  .then(response => response.json())
  .then(data => {
    // Aquí puedes trabajar con los datos de productos
    console.log(data);
  })
  .catch(error => console.error('Error al cargar el archivo JSON:', error));


  // Función para aplicar filtros
  function applyFilters() {
    const inStock = document.getElementById('inStock').checked;
    const newArrivals = document.getElementById('newArrivals').checked;
    const soldOut = document.getElementById('soldOut').checked;

    const priceOne = document.getElementById('priceOne').checked;
    const priceTwo = document.getElementById('priceTwo').checked;
    const priceThree = document.getElementById('priceThree').checked;

    const products = document.querySelectorAll('.product');

    products.forEach(product => {
      const isProductInStock = product.classList.contains('inStock');
      const isProductNewArrival = product.classList.contains('newArrivals');
      const isProductSoldOut = product.classList.contains('soldOut');

      const isPriceOne = product.classList.contains('priceOne');
      const isPriceTwo = product.classList.contains('priceTwo');
      const isPriceThree = product.classList.contains('priceThree');

      // Mostrar u ocultar productos según las selecciones del usuario
      if (
        (inStock && isProductInStock) ||
        (newArrivals && isProductNewArrival) ||
        (soldOut && isProductSoldOut) ||
        (!inStock && !newArrivals && !soldOut)
      ) {
        if (
          (priceOne && isPriceOne) ||
          (priceTwo && isPriceTwo) ||
          (priceThree && isPriceThree) ||
          (!priceOne && !priceTwo && !priceThree)
        ) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      } else {
        product.style.display = 'none';
      }
    });
  }

  // Escuchar el clic en el botón de filtro
  document.querySelector('.btnFilter').addEventListener('click', applyFilters);
