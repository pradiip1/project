const products = [
  {
    id: 1,
    name: "Apple iPhone 16 128GB",
    image: "src/assets/iPhone-16-Pro.jpg",
    options: [
      { store: "Daraz", price: 150999, link: "https://www.daraz.com.np/" },
      { store: "Hukut", price: 146599, link: "https://hukut.com/iphone-16" },
      { store: "BrotherMart", price: 160900, link: "https://brother-mart.com/products/iphone-16-price-in-nepal" }
    ]
  },

  {
    id: 2,
    name: "Samsung Galaxy S25 Ultra",
    image: "src/assets/sam.jpeg",
    options: [
      { store: "Daraz", price: 169999, link: "https://www.daraz.com.np/" },
      { store: "Hukut", price: 167500, link: "https://hukut.com/" },
      { store: "BrotherMart", price: 171000, link: "https://brother-mart.com/" }
    ]
  },

  {
    id: 3,
    name: "Google Pixel 9 Pro",
    image: "src/assets/pixel.jpeg",
    options: [
      { store: "Daraz", price: 142999, link: "https://www.daraz.com.np/" },
      { store: "Hukut", price: 141500, link: "https://hukut.com/" },
      { store: "BrotherMart", price: 144000, link: "https://brother-mart.com/" }
    ]
  },

  {
    id: 4,
    name: "OnePlus 13",
    image: "src/assets/images.jpeg",
    options: [
      { store: "Daraz", price: 109999, link: "https://www.daraz.com.np/" },
      { store: "Hukut", price: 108500, link: "https://hukut.com/" },
      { store: "BrotherMart", price: 111000, link: "https://brother-mart.com/" }
    ]
  },

  {
    id: 5,
    name: "Xiaomi 15 Ultra",
    image: "src/assets/xiomi.jpeg",
    options: [
      { store: "Daraz", price: 119999, link: "https://www.daraz.com.np/" },
      { store: "Hukut", price: 118000, link: "https://hukut.com/" },
      { store: "BrotherMart", price: 120500, link: "https://brother-mart.com/" }
    ]
  },

  {
    id: 6,
    name: "MacBook Air M4",
    image: "src/assets/macbook.jpeg",
    options: [
      { store: "Daraz", price: 189999, link: "https://www.daraz.com.np/" },
      { store: "Hukut", price: 186999, link: "https://hukut.com/" },
      { store: "BrotherMart", price: 191500, link: "https://brother-mart.com/products/apple-macbook-air-m4-15-price-in-nepal" }
    ]
  },

  {
    id: 7,
    name: "Dell XPS 15",
    image: "src/assets/xp.jpeg",
    options: [
      { store: "Daraz", price: 225000, link: "https://www.daraz.com.np/" },
      { store: "Hukut", price: 223000, link: "https://hukut.com/" },
      { store: "BrotherMart", price: 227000, link: "https://brother-mart.com/" }
    ]
  },

  {
    id: 8,
    name: "HP Spectre x360",
    image: "src/assets/images (1).jpeg",
    options: [
      { store: "Daraz", price: 199999, link: "https://www.daraz.com.np/" },
      { store: "Hukut", price: 197500, link: "https://hukut.com/" },
      { store: "BrotherMart", price: 201000, link: "https://brother-mart.com/" }
    ]
  },

  {
    id: 9,
    name: "ASUS ROG Zephyrus G16",
    image: "src/assets/asus.jpeg",
    options: [
      { store: "Daraz", price: 269999, link: "https://www.daraz.com.np/" },
      { store: "Hukut", price: 266500, link: "https://hukut.com/" },
      { store: "BrotherMart", price: 272000, link: "https://brother-mart.com/" }
    ]
  },

  {
    id: 10,
    name: "Lenovo Legion Pro 7",
    image: "src/assets/lenevo.jpeg",
    options: [
      { store: "Daraz", price: 259999, link: "https://www.daraz.com.np/" },
      { store: "Hukut", price: 257500, link: "https://hukut.com/" },
      { store: "BrotherMart", price: 262000, link: "https://brother-mart.com/" }
    ]
  },
{
  id: 11,
  name: "Acer Predator Helios Neo 16",
  image: "src/assets/acer.jpeg",
  options: [
    { store: "Daraz", price: 229999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 227500, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 231000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 12,
  name: "Apple AirPods Pro 2",
  image: "src/assets/aplle .jpeg",
  options: [
    { store: "Daraz", price: 36999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 35999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 37200, link: "https://brother-mart.com/" }
  ]
},
{
  id: 13,
  name: "Samsung Galaxy Buds 3 Pro",
  image: "https://via.placeholder.com/300x220?text=Galaxy+Buds+3+Pro",
  options: [
    { store: "Daraz", price: 26999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 26499, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 27200, link: "https://brother-mart.com/" }
  ]
},
{
  id: 14,
  name: "Sony WH-1000XM5",
  image: "https://via.placeholder.com/300x220?text=Sony+XM5",
  options: [
    { store: "Daraz", price: 49999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 48999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 50500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 15,
  name: "JBL Tune 770NC",
  image: "https://via.placeholder.com/300x220?text=JBL+770NC",
  options: [
    { store: "Daraz", price: 15999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 15499, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 16100, link: "https://brother-mart.com/" }
  ]
},
{
  id: 16,
  name: "Apple Watch Series 10",
  image: "https://via.placeholder.com/300x220?text=Apple+Watch+10",
  options: [
    { store: "Daraz", price: 72999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 71999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 73500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 17,
  name: "Samsung Galaxy Watch Ultra",
  image: "https://via.placeholder.com/300x220?text=Galaxy+Watch+Ultra",
  options: [
    { store: "Daraz", price: 68999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 67999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 69500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 18,
  name: "PlayStation 5 Slim",
  image: "https://via.placeholder.com/300x220?text=PS5+Slim",
  options: [
    { store: "Daraz", price: 84999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 83500, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 85999, link: "https://brother-mart.com/" }
  ]
},
{
  id: 19,
  name: "Xbox Series X",
  image: "https://via.placeholder.com/300x220?text=Xbox+Series+X",
  options: [
    { store: "Daraz", price: 79999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 78500, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 80999, link: "https://brother-mart.com/" }
  ]
},
{
  id: 20,
  name: "Nintendo Switch OLED",
  image: "https://via.placeholder.com/300x220?text=Switch+OLED",
  options: [
    { store: "Daraz", price: 49999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 48999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 50500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 21,
  name: "LG UltraGear 27\" Gaming Monitor",
  image: "https://via.placeholder.com/300x220?text=LG+UltraGear",
  options: [
    { store: "Daraz", price: 49999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 48999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 50500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 22,
  name: "Samsung Odyssey G5 Monitor",
  image: "https://via.placeholder.com/300x220?text=Samsung+Odyssey+G5",
  options: [
    { store: "Daraz", price: 46999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 45999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 47500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 23,
  name: "ASUS TUF 27\" Gaming Monitor",
  image: "https://via.placeholder.com/300x220?text=ASUS+TUF+Monitor",
  options: [
    { store: "Daraz", price: 42999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 41999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 43500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 24,
  name: "Logitech MX Master 3S",
  image: "https://via.placeholder.com/300x220?text=MX+Master+3S",
  options: [
    { store: "Daraz", price: 14999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 14599, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 15200, link: "https://brother-mart.com/" }
  ]
},
{
  id: 25,
  name: "Logitech MX Keys S Keyboard",
  image: "https://via.placeholder.com/300x220?text=MX+Keys+S",
  options: [
    { store: "Daraz", price: 16999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 16499, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 17200, link: "https://brother-mart.com/" }
  ]
},
{
  id: 26,
  name: "Apple iPad Air M3",
  image: "https://via.placeholder.com/300x220?text=iPad+Air+M3",
  options: [
    { store: "Daraz", price: 99999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 98500, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 101000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 27,
  name: "Samsung Galaxy Tab S10",
  image: "https://via.placeholder.com/300x220?text=Galaxy+Tab+S10",
  options: [
    { store: "Daraz", price: 88999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 87500, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 89999, link: "https://brother-mart.com/" }
  ]
},
{
  id: 28,
  name: "Canon EOS R50 Camera",
  image: "https://via.placeholder.com/300x220?text=Canon+EOS+R50",
  options: [
    { store: "Daraz", price: 109999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 108000, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 111000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 29,
  name: "GoPro HERO13 Black",
  image: "https://via.placeholder.com/300x220?text=GoPro+Hero13",
  options: [
    { store: "Daraz", price: 69999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 68999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 70500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 30,
  name: "DJI Mini 4 Pro Drone",
  image: "https://via.placeholder.com/300x220?text=DJI+Mini+4+Pro",
  options: [
    { store: "Daraz", price: 139999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 138000, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 141500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 31,
  name: "Apple iPhone 16 256GB",
  image: "src/assets/iPhone-16-Pro.jpg",
  options: [
    { store: "Daraz", price: 149999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 148000, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 150500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 32,
  name: "Apple iPhone 16 Plus 128GB",
  image: "src/assets/iphon2.jpeg",
  options: [
    { store: "Daraz", price: 159999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 158000, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 161000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 33,
  name: "Apple iPhone 16 Plus 256GB",
  image: "src/assets/iphon2.jpeg",
  options: [
    { store: "Daraz", price: 169999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 168500, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 171000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 34,
  name: "Apple iPhone 16 Pro 128GB",
  image: "src/assets/iphon2.jpeg",
  options: [
    { store: "Daraz", price: 189999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 188000, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 191000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 35,
  name: "Apple iPhone 16 Pro 256GB",
  image: "src/assets/iphon2.jpeg",
  options: [
    { store: "Daraz", price: 204999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 202999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 206500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 36,
  name: "Apple iPhone 16 Pro Max 256GB",
  image: "https://via.placeholder.com/300x220?text=iPhone+16+Pro+Max",
  options: [
    { store: "Daraz", price: 224999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 222500, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 226000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 37,
  name: "Apple iPhone 16 Pro Max 512GB",
  image: "https://via.placeholder.com/300x220?text=iPhone+16+PM+512GB",
  options: [
    { store: "Daraz", price: 249999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 247500, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 251000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 38,
  name: "Apple iPhone 15 128GB",
  image: "https://via.placeholder.com/300x220?text=iPhone+15",
  options: [
    { store: "Daraz", price: 119999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 118000, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 121000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 39,
  name: "Apple iPhone 15 Pro 256GB",
  image: "https://via.placeholder.com/300x220?text=iPhone+15+Pro",
  options: [
    { store: "Daraz", price: 184999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 183000, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 186500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 40,
  name: "Apple iPhone 15 Pro Max 512GB",
  image: "https://via.placeholder.com/300x220?text=iPhone+15+PM",
  options: [
    { store: "Daraz", price: 214999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 212999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 216500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 41,
  name: "Samsung Galaxy S25 256GB",
  image: "https://via.placeholder.com/300x220?text=Galaxy+S25",
  options: [
    { store: "Daraz", price: 129999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 128500, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 131000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 42,
  name: "Samsung Galaxy S25+ 256GB",
  image: "https://via.placeholder.com/300x220?text=Galaxy+S25+",
  options: [
    { store: "Daraz", price: 149999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 148500, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 151000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 43,
  name: "Samsung Galaxy S25 Ultra 256GB",
  image: "https://via.placeholder.com/300x220?text=Galaxy+S25+Ultra",
  options: [
    { store: "Daraz", price: 174999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 172999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 176500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 44,
  name: "Samsung Galaxy S25 Ultra 512GB",
  image: "https://via.placeholder.com/300x220?text=S25+Ultra+512GB",
  options: [
    { store: "Daraz", price: 194999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 193000, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 196500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 45,
  name: "Samsung Galaxy Z Fold7",
  image: "https://via.placeholder.com/300x220?text=Galaxy+Z+Fold7",
  options: [
    { store: "Daraz", price: 259999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 257999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 262000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 46,
  name: "Samsung Galaxy Z Flip7",
  image: "https://via.placeholder.com/300x220?text=Galaxy+Z+Flip7",
  options: [
    { store: "Daraz", price: 154999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 153500, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 156000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 47,
  name: "Samsung Galaxy A56",
  image: "https://via.placeholder.com/300x220?text=Galaxy+A56",
  options: [
    { store: "Daraz", price: 62999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 61999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 63500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 48,
  name: "Samsung Galaxy A36",
  image: "https://via.placeholder.com/300x220?text=Galaxy+A36",
  options: [
    { store: "Daraz", price: 46999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 45999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 47500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 49,
  name: "Samsung Galaxy A26",
  image: "https://via.placeholder.com/300x220?text=Galaxy+A26",
  options: [
    { store: "Daraz", price: 35999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 34999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 36500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 50,
  name: "Samsung Galaxy M56",
  image: "https://via.placeholder.com/300x220?text=Galaxy+M56",
  options: [
    { store: "Daraz", price: 42999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 41999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 43500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 51,
  name: "Xiaomi 15 256GB",
  image: "https://via.placeholder.com/300x220?text=Xiaomi+15",
  options: [
    { store: "Daraz", price: 99999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 98500, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 101000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 52,
  name: "Xiaomi 15 Ultra 512GB",
  image: "https://via.placeholder.com/300x220?text=Xiaomi+15+Ultra",
  options: [
    { store: "Daraz", price: 139999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 138000, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 141000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 53,
  name: "Xiaomi 14T Pro",
  image: "https://via.placeholder.com/300x220?text=Xiaomi+14T+Pro",
  options: [
    { store: "Daraz", price: 84999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 83999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 85999, link: "https://brother-mart.com/" }
  ]
},
{
  id: 54,
  name: "Redmi Note 14 Pro+",
  image: "https://via.placeholder.com/300x220?text=Redmi+Note+14+Pro+",
  options: [
    { store: "Daraz", price: 52999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 51999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 53500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 55,
  name: "Redmi Note 14 Pro",
  image: "https://via.placeholder.com/300x220?text=Redmi+Note+14+Pro",
  options: [
    { store: "Daraz", price: 46999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 45999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 47500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 56,
  name: "Redmi Note 14",
  image: "https://via.placeholder.com/300x220?text=Redmi+Note+14",
  options: [
    { store: "Daraz", price: 34999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 33999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 35500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 57,
  name: "POCO F7 Pro",
  image: "https://via.placeholder.com/300x220?text=POCO+F7+Pro",
  options: [
    { store: "Daraz", price: 68999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 67999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 69500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 58,
  name: "POCO X7 Pro",
  image: "https://via.placeholder.com/300x220?text=POCO+X7+Pro",
  options: [
    { store: "Daraz", price: 55999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 54999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 56500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 59,
  name: "POCO M7 Pro",
  image: "https://via.placeholder.com/300x220?text=POCO+M7+Pro",
  options: [
    { store: "Daraz", price: 29999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 28999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 30500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 60,
  name: "Xiaomi Pad 7 Pro",
  image: "https://via.placeholder.com/300x220?text=Xiaomi+Pad+7+Pro",
  options: [
    { store: "Daraz", price: 74999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 73999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 75500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 61,
  name: "OnePlus 13 256GB",
  image: "https://via.placeholder.com/300x220?text=OnePlus+13",
  options: [
    { store: "Daraz", price: 109999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 108000, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 111000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 62,
  name: "OnePlus 13R",
  image: "https://via.placeholder.com/300x220?text=OnePlus+13R",
  options: [
    { store: "Daraz", price: 79999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 78999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 80999, link: "https://brother-mart.com/" }
  ]
},
{
  id: 63,
  name: "OnePlus Nord 5",
  image: "https://via.placeholder.com/300x220?text=Nord+5",
  options: [
    { store: "Daraz", price: 54999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 53999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 55500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 64,
  name: "OnePlus Nord CE5",
  image: "https://via.placeholder.com/300x220?text=Nord+CE5",
  options: [
    { store: "Daraz", price: 42999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 41999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 43500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 65,
  name: "OnePlus Pad 2",
  image: "https://via.placeholder.com/300x220?text=OnePlus+Pad+2",
  options: [
    { store: "Daraz", price: 69999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 68999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 70500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 66,
  name: "Google Pixel 9",
  image: "https://via.placeholder.com/300x220?text=Pixel+9",
  options: [
    { store: "Daraz", price: 119999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 118000, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 121000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 67,
  name: "Google Pixel 9 Pro",
  image: "https://via.placeholder.com/300x220?text=Pixel+9+Pro",
  options: [
    { store: "Daraz", price: 149999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 148000, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 151000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 68,
  name: "Google Pixel 9 Pro XL",
  image: "https://via.placeholder.com/300x220?text=Pixel+9+Pro+XL",
  options: [
    { store: "Daraz", price: 169999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 168000, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 171000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 69,
  name: "Google Pixel 9a",
  image: "https://via.placeholder.com/300x220?text=Pixel+9a",
  options: [
    { store: "Daraz", price: 69999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 68999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 70500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 70,
  name: "Google Pixel Watch 3",
  image: "https://via.placeholder.com/300x220?text=Pixel+Watch+3",
  options: [
    { store: "Daraz", price: 54999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 53999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 55500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 71,
  name: "MacBook Pro M4 14-inch",
  image: "https://via.placeholder.com/300x220?text=MacBook+Pro+M4",
  options: [
    { store: "Daraz", price: 289999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 287500, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 291000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 72,
  name: "MacBook Pro M4 Pro 16-inch",
  image: "https://via.placeholder.com/300x220?text=MacBook+Pro+M4+Pro",
  options: [
    { store: "Daraz", price: 389999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 386999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 392500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 73,
  name: "ASUS ROG Strix G16",
  image: "https://via.placeholder.com/300x220?text=ROG+Strix+G16",
  options: [
    { store: "Daraz", price: 249999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 247000, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 252000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 74,
  name: "ASUS Zenbook 14 OLED",
  image: "https://via.placeholder.com/300x220?text=Zenbook+14+OLED",
  options: [
    { store: "Daraz", price: 169999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 168000, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 171500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 75,
  name: "Dell Inspiron 15",
  image: "https://via.placeholder.com/300x220?text=Dell+Inspiron+15",
  options: [
    { store: "Daraz", price: 109999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 108500, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 111000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 76,
  name: "Dell Alienware m18",
  image: "https://via.placeholder.com/300x220?text=Alienware+m18",
  options: [
    { store: "Daraz", price: 429999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 426999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 432000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 77,
  name: "HP Victus 16",
  image: "https://via.placeholder.com/300x220?text=HP+Victus+16",
  options: [
    { store: "Daraz", price: 159999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 158000, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 161500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 78,
  name: "HP OMEN 17",
  image: "https://via.placeholder.com/300x220?text=HP+OMEN+17",
  options: [
    { store: "Daraz", price: 289999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 287500, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 292000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 79,
  name: "Lenovo Yoga Pro 9i",
  image: "https://via.placeholder.com/300x220?text=Yoga+Pro+9i",
  options: [
    { store: "Daraz", price: 239999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 237999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 242000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 80,
  name: "Lenovo LOQ 15",
  image: "https://via.placeholder.com/300x220?text=Lenovo+LOQ+15",
  options: [
    { store: "Daraz", price: 149999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 148000, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 151000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 81,
  name: "Sony PlayStation 5 Pro",
  image: "https://via.placeholder.com/300x220?text=PS5+Pro",
  options: [
    { store: "Daraz", price: 124999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 123000, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 126000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 82,
  name: "Xbox Series S 1TB",
  image: "https://via.placeholder.com/300x220?text=Xbox+Series+S",
  options: [
    { store: "Daraz", price: 54999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 53999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 55500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 83,
  name: "Meta Quest 3",
  image: "https://via.placeholder.com/300x220?text=Meta+Quest+3",
  options: [
    { store: "Daraz", price: 84999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 83999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 85999, link: "https://brother-mart.com/" }
  ]
},
{
  id: 84,
  name: "Nintendo Switch 2",
  image: "https://via.placeholder.com/300x220?text=Nintendo+Switch+2",
  options: [
    { store: "Daraz", price: 68999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 67999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 69500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 85,
  name: "Logitech G Pro X Superlight 2",
  image: "https://via.placeholder.com/300x220?text=G+Pro+X+2",
  options: [
    { store: "Daraz", price: 19999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 19499, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 20200, link: "https://brother-mart.com/" }
  ]
},
{
  id: 86,
  name: "Razer BlackWidow V4 Pro",
  image: "https://via.placeholder.com/300x220?text=BlackWidow+V4",
  options: [
    { store: "Daraz", price: 28999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 27999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 29200, link: "https://brother-mart.com/" }
  ]
},
{
  id: 87,
  name: "SteelSeries Arctis Nova 7",
  image: "https://via.placeholder.com/300x220?text=Arctis+Nova+7",
  options: [
    { store: "Daraz", price: 25999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 24999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 26200, link: "https://brother-mart.com/" }
  ]
},
{
  id: 88,
  name: "Samsung T9 2TB SSD",
  image: "https://via.placeholder.com/300x220?text=Samsung+T9+SSD",
  options: [
    { store: "Daraz", price: 27999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 26999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 28200, link: "https://brother-mart.com/" }
  ]
},
{
  id: 89,
  name: "SanDisk Extreme Pro 2TB SSD",
  image: "https://via.placeholder.com/300x220?text=SanDisk+SSD",
  options: [
    { store: "Daraz", price: 26999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 25999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 27200, link: "https://brother-mart.com/" }
  ]
},
{
  id: 90,
  name: "Anker 737 Power Bank",
  image: "https://via.placeholder.com/300x220?text=Anker+737",
  options: [
    { store: "Daraz", price: 17999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 17499, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 18200, link: "https://brother-mart.com/" }
  ]
},
{
  id: 91,
  name: "Apple Watch Ultra 2",
  image: "https://via.placeholder.com/300x220?text=Watch+Ultra+2",
  options: [
    { store: "Daraz", price: 129999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 128000, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 131000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 92,
  name: "Samsung Galaxy Watch 7",
  image: "https://via.placeholder.com/300x220?text=Galaxy+Watch+7",
  options: [
    { store: "Daraz", price: 52999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 51999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 53500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 93,
  name: "Garmin Forerunner 965",
  image: "https://via.placeholder.com/300x220?text=Garmin+965",
  options: [
    { store: "Daraz", price: 84999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 83999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 85500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 94,
  name: "Sony Alpha A6700 Camera",
  image: "https://via.placeholder.com/300x220?text=Sony+A6700",
  options: [
    { store: "Daraz", price: 214999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 212000, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 217500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 95,
  name: "Canon EOS R10",
  image: "https://via.placeholder.com/300x220?text=Canon+R10",
  options: [
    { store: "Daraz", price: 144999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 143000, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 146500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 96,
  name: "GoPro HERO12 Black",
  image: "https://via.placeholder.com/300x220?text=GoPro+Hero12",
  options: [
    { store: "Daraz", price: 63999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 62999, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 64500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 97,
  name: "DJI Air 3 Drone",
  image: "https://via.placeholder.com/300x220?text=DJI+Air+3",
  options: [
    { store: "Daraz", price: 199999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 198000, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 201500, link: "https://brother-mart.com/" }
  ]
},
{
  id: 98,
  name: "LG C4 OLED 55-inch TV",
  image: "https://via.placeholder.com/300x220?text=LG+C4+OLED",
  options: [
    { store: "Daraz", price: 259999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 257500, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 262000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 99,
  name: "Samsung Neo QLED 65-inch TV",
  image: "https://via.placeholder.com/300x220?text=Samsung+Neo+QLED",
  options: [
    { store: "Daraz", price: 309999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 307500, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 312000, link: "https://brother-mart.com/" }
  ]
},
{
  id: 100,
  name: "Apple Studio Display",
  image: "https://via.placeholder.com/300x220?text=Studio+Display",
  options: [
    { store: "Daraz", price: 269999, link: "https://www.daraz.com.np/" },
    { store: "Hukut", price: 267000, link: "https://hukut.com/" },
    { store: "BrotherMart", price: 272000, link: "https://brother-mart.com/" }
  ]
}
];

export default products;