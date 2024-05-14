import React, { createContext, useState } from 'react';
import Cart from './Components/Cart';


export const myContext = createContext('');
const App = () => {
  const products =[
    {
      "products": [
          {
              "id": 1,
              "title": "iPhone 15",
              "description": "An apple mobile which is nothing like apple",
              "price": 549,
              "discountPercentage": 12.96,
              "rating": 4.69,
              "stock": 94,
              "brand": "Apple",
              "category": "smartphones",
              "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
              "images": [
                "https://unblast.com/wp-content/uploads/2020/10/iPhone-12-Mockup-9.jpg"
              ]
          },
          {
              "id": 2,
              "title": "iPhone X",
              "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
              "price": 899,
              "discountPercentage": 17.94,
              "rating": 4.44,
              "stock": 34,
              "brand": "Apple",
              "category": "smartphones",
              "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
              "images": [
                  "https://preview.free3d.com/img/2017/12/2140162101740570270/1cmeogfs.jpg"
              ]
          },
          {
              "id": 3,
              "title": "Samsung Universe 9",
              "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
              "price": 1249,
              "discountPercentage": 15.46,
              "rating": 4.09,
              "stock": 36,
              "brand": "Samsung",
              "category": "smartphones",
              "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
              "images": [
                  "https://preview.free3d.com/img/2018/06/2273042574761527217/t8ub6bwr.jpg"
              ]
          },
          {
              "id": 4,
              "title": "OPPOF19",
              "description": "OPPO F19 is officially announced on April 2021.",
              "price": 280,
              "discountPercentage": 17.91,
              "rating": 4.3,
              "stock": 123,
              "brand": "OPPO",
              "category": "smartphones",
              "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
              "images": [
                  "https://opsg-img-cdn-gl.heytapimg.com/epb/202207/07/hxwnSiSJ89urUqAQ.png?x-amz-process=image/format,webp/quality,Q_80"
              ]
          },
          {
              "id": 5,
              "title": "Huawei P30",
              "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
              "price": 499,
              "discountPercentage": 10.58,
              "rating": 4.09,
              "stock": 32,
              "brand": "Huawei",
              "category": "smartphones",
              "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
              "images": [
                  "https://preview.free3d.com/img/2019/04/2174904266286695739/9vhl2pq8.jpg"
              ]
          }
      ]
  }
  ]

  const [data,setData] = useState(products[0].products);

  console.log(data)
  return (
    <div>
      <myContext.Provider value={[data,setData]}>
        <Cart/>
      </myContext.Provider>
      
    </div>
  );
};

export default App;