
// Outfit 1 = Street,
// Outfit 2 = Aggressive,
// Outfit 3 = Xtreme,

// Taxes inclusive

// let priceStreet = 499;
// let priceAggressive = 599;
// let priceExtreme = 999;

// const outfits = [
//     {
//         id: 1,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceStreet,
//     },
//     {
//         id: 2,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceExtreme,
//     },
//     {
//         id: 3,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceStreet,
//     },
//     {
//         id: 4,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceExtreme,
//     },
//     {
//         id: 5,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceExtreme,
//     },
//     {
//         id: 6,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceExtreme,
//     },
//     {
//         id: 7,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceAggressive,
//     },
//     {
//         id: 8,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceStreet,
//     },
//     {
//         id: 9,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceExtreme,
//     },
//     {
//         id: 10,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceStreet,
//     },
//     {
//         id: 11,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceAggressive,
//     },
//     {
//         id: 12,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceExtreme,
//     },
//     {
//         id: 13,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceStreet,
//     },
//     {
//         id: 14,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceAggressive,
//     },
//     {
//         id: 15,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceAggressive,
//     },
//     {
//         id: 16,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceExtreme,
//     },
//     {
//         id: 17,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceExtreme,
//     },
//     {
//         id: 18,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceStreet,
//     },
//     {
//         id: 19,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceAggressive,
//     },
//     {
//         id: 20,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceExtreme,
//     },
//     {
//         id: 21,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceStreet,
//     },
//     {
//         id: 22,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceStreet,
//     },
//     {
//         id: 23,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceAggressive,
//     },
//     {
//         id: 24,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceExtreme,
//     },
//     {
//         id: 25,
//         title: "Street",
//         availability: "New Arrivals",
//         pricing: priceAggressive,
//     }
// ]


// console.log(outfits.id);

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
