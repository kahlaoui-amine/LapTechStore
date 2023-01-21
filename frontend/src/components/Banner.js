import React from 'react'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import "./Banner.css"

function Banner() {
    const datas =[
        {
            id: 1,
            image: `https://apibackend.megapc.tn//uploads/photo/1674139751681.webp`,
        },
        {
            id: 2,
            image: `https://apibackend.megapc.tn//uploads/photo/1672839772681.webp`,
        },
        {
            id: 3,
            image: `https://www.tunisianet.com.tn/modules/wbimageslider/views/img/5967fb16051d9f3f881644041e27f6827dfffd49_katana-gf76.jpg`,
        },
        {
            id: 4,
            image: `https://www.tunisianet.com.tn/modules/wbimageslider/views/img/97f8a902632ec18109d636e24d0f1a6fd3044466_Tunisianet%20Bundle%20Retail%20Tunisia%20Q3%20FY23%201580%20x%20460.jpg`,
        },
        {
            id: 5,
            image: `https://media.mytek.tn/media/webp_image/wysiwyg/banner/Jan23/slider-selection-gaming-2023.webp`,
        },

        {
            id: 6,
            image: `https://apibackend.megapc.tn//uploads/photo/1662542667614.webp`,
        },{
            id: 7,
            image: `https://apibackend.megapc.tn//uploads/photo/1671788750477.webp`,
            
        }
    ]
  return (
    <Carousel autoPlay interval={1500} infiniteLoop width={1520}
    >
    {datas.map((slide) =>(
        <div key={slide.id}>
            <img src={slide.image} alt=""/>
        </div>
    ))}
    </Carousel>
    
  )
}

export default Banner