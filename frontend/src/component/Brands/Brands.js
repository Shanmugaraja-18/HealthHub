import React from 'react';
import './Brands.css'; 
import img1 from "./img/air.png";
import img2 from "./img/visa.png";
import img3 from "./img/sneakers.png";
import img4 from "./img/search.png";
import img5 from "./img/shipping.png";
import img6 from "./img/crater.png";
import img7 from "./img/hippie.png";
import img8 from "./img/jordan.png";
import img9 from "./img/blazer.png";
import img10 from "./img/gift.png";
import img11 from "./img/return.png";
import img12 from "./img/contact.png";
import img13 from "./img/master.png";
import img14 from "./img/222.jfif";
import img18 from "./img/ban.webp";
import img19 from "./img/ban3.webp";
import img20 from "./img/111.jpg";
import img21 from "./img/2222.png";
import img22 from "./img/3333.png";

const products = [
  {
    id: 1,
    title: "Goodscity Blender For Smoothie And Juices",
    price: 1999,
    description: [
      "Fully integrated blending & cleaning functionality. Press & Hold power switch for 2 seconds to initiate blending. To clean, simply add 2/3rd water to the jar & blend one full cycle of 45 secs",
      "The 6 sharp SS blades with rotation speed of 16500 rpm & battery capacity 3000mAh can power 7.4V powerful copper motor in order to whip up the desired juice and smoothies within 30 seconds.",
      "Being lightweight & wireless, makes the juicer easily portable to any desired place. Clear tritan 400ml Jar with glossy ABS body not only makes it handy but also gives a stylish trendy look to carry around."
    ],
    colors: [
      {
        code: "black",
        img: img21,
      },
      {
        code: "darkblue",
        img: img22,
      },
    ],
  },
];

class MyClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: products[0], 
    };
  }

  componentDidMount() {
    const currentProductImg = document.querySelector(".productImg");
    const currentProductTitle = document.querySelector(".productTitle");
    const currentProductPrice = document.querySelector(".productPrice");
    const currentProductColors = document.querySelectorAll(".color");
    const currentProductSizes = document.querySelectorAll(".size");
    const menuItems = document.querySelectorAll(".menuItem");
    const wrapper = document.querySelector(".sliderWrapper");
    const productButton = document.querySelector(".productButton");
    const payment = document.querySelector(".payment");
    const close = document.querySelector(".close");

    menuItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    
        const chosenProduct = products[index];
    
        if (chosenProduct) {
          currentProductTitle.textContent = chosenProduct.title;
          currentProductPrice.textContent = "$" + chosenProduct.price;
          currentProductImg.src = chosenProduct.colors[0].img;
    
          currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
          });
    
          this.setState({ selectedProduct: chosenProduct });
        }
      });
    });

    currentProductColors.forEach((color, index) => {
      color.addEventListener("click", () => {
        currentProductImg.src = this.state.selectedProduct.colors[index].img;
      });
    });

    currentProductSizes.forEach((size, index) => {
      size.addEventListener("click", () => {
        currentProductSizes.forEach((size) => {
          size.style.backgroundColor = "white";
          size.style.color = "black";
        });
        size.style.backgroundColor = "black";
        size.style.color = "white";
      });
    });

    productButton.addEventListener("click", () => {
      payment.style.display = "flex";
    });

    close.addEventListener("click", () => {
      payment.style.display = "none";
    });
  }

  

  render() {
    const { selectedProduct } = this.state;
    return (
      <div>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="style.css" />
        <title>Nike Store</title>
        <nav id="nav">
          
          <div className="navBottom">
            <h3 className="menuItem">GAINERS</h3>
            <h3 className="menuItem">PROTEINS</h3>
            <h3 className="menuItem">SNACKS</h3>
            <h3 className="menuItem">FRUITS</h3>
            <h3 className="menuItem">NUTRIOS</h3>
          </div>
        </nav>
        <div className="slider">
          <div className="sliderWrapper">
            <div className="sliderItem">
              <img src={img1} alt="" className="sliderImg" />
              <div className="sliderBg" />
              <h1 className="sliderTitle">MAXIMIZE<br/> GAINS<br />MINIMIZE <br />EFFORTS!!</h1>
              <h2 className="sliderPrice">40% off</h2>
              
              
              <a href="#product">
                
              </a>
            </div>
            <div className="sliderItem">
              <img src={img8} alt="" className="sliderImg" />
              <div className="sliderBg" />
              <h1 className="sliderTitle">Power Up,<br />Bulk Up!<br /> </h1>
              <h2 className="sliderPrice">30% off</h2>
              <a href="http://localhost:3000/products">
                <button className="buyButton">BUY NOW!</button>
              </a>
            </div>
            <div className="sliderItem">
              <img src={img9} alt="" className="sliderImg" />
              <div className="sliderBg" />
              <h1 className="sliderTitle">Transform with<br />  Premium  <br />Nutrition</h1>
              <h2 className="sliderPrice">60% off</h2>
              <a href="http://localhost:3000/products">
                <button className="buyButton">BUY NOW!</button>
              </a>
            
            </div>
            <div className="sliderItem">
              <img src={img6} alt="" className="sliderImg" />
              <div className="sliderBg" />
              <h1 className="sliderTitle">STRENGTH,<br />SIZE,<br />SUCCESS.</h1>
              <h2 className="sliderPrice">70% off</h2>
              <a href="http://localhost:3000/products">
                <button className="buyButton">BUY NOW!</button>
              </a>
              
            </div>
            <div className="sliderItem">
              <img src={img7} alt="" className="sliderImg" />
              <div className="sliderBg" />
              <h1 className="sliderTitle">FUEL YOUR <br /> FITNESS<br />REVOLUTION</h1>
              <h2 className="sliderPrice">50% off</h2>
              <a href="http://localhost:3000/products">
                <button className="buyButton">BUY NOW!</button>
              </a>
              
              <a href="#product">
              </a>
            </div>
          </div>
        </div>
        <div className="features">
          <div className="feature">
            <img src={img5} alt="" className="featureIcon" />
            <span className="featureTitle">FREE SHIPPING</span>
            <span className="featureDesc">Free worldwide shipping on all orders.</span>
          </div>
          <div className="feature">
            <img className="featureIcon" src={img11} alt="" />
            <span className="featureTitle">30 DAYS RETURN</span>
            <span className="featureDesc">No question return and easy refund in 14 days.</span>
          </div>
          <div className="feature">
            <img className="featureIcon" src={img10} alt="" />
            <span className="featureTitle">GIFT CARDS</span>
            <span className="featureDesc">Buy gift cards and use coupon codes easily.</span>
          </div>
          <div className="feature">
            <img className="featureIcon" src={img12} alt="" />
            <span className="featureTitle">CONTACT US!</span>
            <span className="featureDesc">Keep in touch via email and support system.</span>
          </div>
        </div>
        <div className="product" id="product">
          <img src={img20} alt="" className="productImg" />
          <div className="productDetails">
            <h1 className="productTitle">Goodscity Blender For Smoothie And Juices</h1>
            <h2 className="productPrice">₹1999/-</h2>
            <ul>
  <li class="productDesc">Fully integrated blending & cleaning functionality. Press & Hold power switch for 2 seconds to initiate blending. To clean, simply add 2/3rd water to the jar & blend one full cycle of 45 secs</li>
  <li class="productDesc">The 6 sharp SS blades with rotation speed of 16500 rpm & battery capacity 3000mAh can power 7.4V powerful copper motor in order to whip up the desired juice and smoothies within 30 seconds.</li>
  <li class="productDesc">Being lightweight & wireless, makes the juicer easily portable to any desired place. Clear tritan 400ml Jar with glossy ABS body not only makes it handy but also gives a stylish trendy look to carry around.</li>
</ul>

              
            <div className="colors">
              <div className="color" />
              <div className="color" />
            </div>
            <div className="sizes">
              <div className="size">2L</div>
              <div className="size">3L</div>
              <div className="size">4L</div>
            </div>
            <button className="productButton">BUY NOW!</button>
          </div>
          <div className="payment">
            <h1 className="payTitle">Personal Information</h1>
            <label>Name and Surname</label>
            <input type="text" placeholder="John Doe" className="payInput" />
            <label>Phone Number</label>
            <input type="text" placeholder="+1 234 5678" className="payInput" />
            <label>Address</label>
            <input type="text" placeholder="Elton St 21 22-145" className="payInput" />
            <h1 className="payTitle">Card Information</h1>
            <div className="cardIcons">
              <img src={img2} width={40} alt="" className="cardIcon" />
              <img src={img13} alt="" width={40} className="cardIcon" />
            </div>
            <input type="password" className="payInput" placeholder="Card Number" />
            <div className="cardInfo">
              <input type="text" placeholder="mm" className="payInput sm" />
              <input type="text" placeholder="yyyy" className="payInput sm" />
              <input type="text" placeholder="cvv" className="payInput sm" />
            </div>
            <button className="payButton">Checkout!</button>
            <span className="close">X</span>
          </div>
        </div>
        <div className="gallery">
          <div className="galleryItem">
            <h1 className="galleryTitle">Be Yourself!</h1>
            <img src="https://images.pexels.com/photos/9295809/pexels-photo-9295809.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="galleryImg" />
          </div>
          <div className="galleryItem">
            <img src="https://images.pexels.com/photos/1040427/pexels-photo-1040427.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="galleryImg" />
            <h1 className="galleryTitle">This is the First Day of Your New Life</h1>
          </div>
          <div className="galleryItem">
            <h1 className="galleryTitle">Just Do it!</h1>
            <img src="https://images.pexels.com/photos/7856965/pexels-photo-7856965.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="galleryImg" />
          </div>
        </div>
        <div className="newSeason">
          <div className="nsItem">
            <img src={img18} alt="" className="nsImg" />
          </div>
          <div className="nsItem">
            <h3 className="nsTitleSm">Fuel Your Fitness</h3>
            <h1 className="nsTitle">Journey with</h1>
            <h1 className="nsTitle">Low-Cal Goodness!</h1>
            <a href="#nav">
              <button className="nsButton">EXPLORE NOW</button>
            </a>
          </div>
          <div className="nsItem">
            <img src={img19} alt="" className="nsImg" />
          </div>
        </div>
        
      </div>
    );
  }
}

export default MyClass;

