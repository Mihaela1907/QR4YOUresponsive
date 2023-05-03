if(document.getElementById('sticker-shop') != null) {
  let products = [
    {
      image: './stickers/1.png',
      text: '1.png'
    }, 
    {
      image: './stickers/2.png',
      text: '2.png'
    }, 
    {
      image: './stickers/3.png',
      text: '3.png'
    },
    {
      image: './stickers/4.png',
      text: '4.png'
    }, 
    {
      image: './stickers/5.png',
      text: '5.png'
    }, 
    {
      image: './stickers/6.png',
      text: '6.png'
    },
    {
      image: './stickers/7.png',
      text: '7.png'
    }, 
    {
      image: './stickers/8.png',
      text: '8.png'
    }, 
    {
      image: './stickers/9.png',
      text: '9.png'
    },
    {
      image: './stickers/10.png',
      text: '10.png'
    }, 
    {
      image: './stickers/11.png',
      text: '11.png'
    }, 
    {
      image: './stickers/12.png',
      text: '12.png'
    },
    {
      image: './stickers/13.png',
      text: '13.png'
    }, 
    {
      image: './stickers/14.png',
      text: '14.png'
    }, 
    {
      image: './stickers/15.png',
      text: '15.png'
    },
    {
      image: './stickers/16.png',
      text: '16.png'
    }, 
    {
      image: './stickers/17.png',
      text: '17.png'
    }, 
    {
      image: './stickers/18.png',
      text: '18.png'
    },
    {
      image: './stickers/19.png',
      text: '19.png'
    }, 
    {
      image: './stickers/20.png',
      text: '20.png'
    }, 
    {
      image: './stickers/21.png',
      text: '21.png'
    },
    {
      image: './stickers/22.png',
      text: '22.png'
    }, 
    {
      image: './stickers/23.png',
      text: '23.png'
    }, 
    {
      image: './stickers/24.png',
      text: '24.png'
    },
    {
      image: './stickers/25.png',
      text: '25.png'
    }, 
    {
      image: './stickers/26.png',
      text: '26.png'
    }, 
    {
      image: './stickers/27.png',
      text: '27.png'
    },
    {
      image: './stickers/28.png',
      text: '28.png'
    }, 
    {
      image: './stickers/29.png',
      text: '29.png'
    }, 
    {
      image: './stickers/30.png',
      text: '30.png'
    },
    {
      image: './stickers/31.png',
      text: '31.png'
    }, 
    {
      image: './stickers/32.png',
      text: '32.png'
    }, 
    {
      image: './stickers/33.png',
      text: '33.png'
    }
    , 
    {
      image: './stickers/34.png',
      text: '34.png'
    }
  ];

  document.getElementById('stickers-list').innerHTML = products.map(function (product) {
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