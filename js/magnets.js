if(document.getElementById('magnets-shop') != null) {
  let products = [
    {
      image: './magnets/1.png',
      text: '1.png'
    }, 
    {
      image: './magnets/2.png',
      text: '2.png'
    }, 
    {
      image: './magnets/3.png',
      text: '3.png'
    },
    {
      image: './magnets/4.png',
      text: '4.png'
    }, 
    {
      image: './magnets/5.png',
      text: '5.png'
    }, 
    {
      image: './magnets/6.png',
      text: '6.png'
    },
    {
      image: './magnets/7.png',
      text: '7.png'
    }, 
    {
      image: './magnets/8.png',
      text: '8.png'
    }, 
    {
      image: './magnets/9.png',
      text: '9.png'
    },
    {
      image: './magnets/10.png',
      text: '10.png'
    }, 
    {
      image: './magnets/11.png',
      text: '11.png'
    }, 
    {
      image: './magnets/12.png',
      text: '12.png'
    },
    {
      image: './magnets/13.png',
      text: '13.png'
    }, 
    {
      image: './magnets/14.png',
      text: '14.png'
    }, 
    {
      image: './magnets/15.png',
      text: '15.png'
    },
    {
      image: './magnets/16.png',
      text: '16.png'
    }, 
    {
      image: './magnets/17.png',
      text: '17.png'
    }, 
    {
      image: './magnets/18.png',
      text: '18.png'
    },
    {
      image: './magnets/19.png',
      text: '19.png'
    }, 
    {
      image: './magnets/20.png',
      text: '20.png'
    }, 
    {
      image: './magnets/21.png',
      text: '21.png'
    },
    {
      image: './magnets/22.png',
      text: '22.png'
    }, 
    {
      image: './magnets/23.png',
      text: '23.png'
    }, 
    {
      image: './magnets/24.png',
      text: '24.png'
    },
    {
      image: './magnets/25.png',
      text: '25.png'
    }, 
    {
      image: './magnets/26.png',
      text: '26.png'
    }, 
    {
      image: './magnets/27.png',
      text: '27.png'
    },
    {
      image: './magnets/28.png',
      text: '28.png'
    }, 
    {
      image: './magnets/29.png',
      text: '29.png'
    }, 
    {
      image: './magnets/30.png',
      text: '30.png'
    },
    {
      image: './magnets/31.png',
      text: '31.png'
    }, 
    {
      image: './magnets/32.png',
      text: '32.png'
    }
  ];

  document.getElementById('magnets-list').innerHTML = products.map(function (product) {
    return `<div class="product-container">
              <div class="product-image-container text-center"> 
                <img class="product-image" src="${product.image}" alt="..."/>
              </div>

              <p class="text-center">. . .</p>

              <div class="product-info-container d-flex justify-content-between">
                <a href="./contact.html" class="request">REQUEST</a>

                <p class="product-info">${product.text}<br/>${product.text}</p>
              </div>
            </div>`;
  }).join('');
}