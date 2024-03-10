import React from 'react';
import img1 from "../Assets/dp-img1.png";
import img2 from "../Assets/dp-img2.jpg";
import img3 from "../Assets/dp-img3.png";
import img4 from "../Assets/Healthy Food.png";
import img5 from "../Assets//Home Made.png";
import img6 from "../Assets/Natural.png";
import img7 from "../Assets/Fast Delivery.png";
import img8 from "../Assets/flowerkolly.png";
import cherry from "../Assets/cherry.png";
import tomato from "../Assets/tomato-slice.png";
import orange from "../Assets/orange-slice.png";
import plate from "../Assets/plate.png";
import { MdDoubleArrow } from 'react-icons/md';
import "./DisplaySection.css";
import { TypeAnimation } from 'react-type-animation';


const DisplaySection = () => {

    return (
        <div className='mx-[320px] mt-[25px]'>

            

            {/* Sub Section */}
            <div className='sub-section'>

                <div className='sub-section-cont'>
                    <div className='main-section'>
                        <img src={img4} className="w-[93px] h-[93px]" alt="" />
                        <div>
                            <h2>Healthy Food</h2>
                            <p>IIt is a long established
fact that<br /> Healthy food is vital
for a healthy lifestyle.</p>
                        </div>
                    </div>
                </div>

                

                <div className='sub-section-cont'>
                    <div className='main-section'>
                        <img src={img6} className="w-[76px] h-[81px]" alt="" />
                        <div>
                            <h2>100% Natural</h2>
                            <p>IIt is a long established
fact that<br /> Natural product is vital
for a healthy lifestyle.</p>
                        </div>
                    </div>
                </div>
                <div className='sub-section-cont'>
                    <div className='main-section'>
                        <img src={img5} className="w-[76px] h-[81px]" alt="" />
                        <div>
                            <h2>Nutrient-rich Meals</h2>
                            <p>IIt is a long established
fact that<br /> exercise is vital
for a healthy lifestyle.</p>
                        </div>
                    </div>
                </div>
                {/*  */}
                

                <div className='sub-section-cont'>
                    <div className='main-section'>
                        <img src={img7} className="w-[119px] h-[64px]" alt="" />
                        <div>
                            <h2>Fast Delivery</h2>
                            <p>IIt is a long established
fact that<br /> fast delivery is vital
</p>
                        </div>
                    </div>
                </div>
            </div>

            <hr className='mt-[30px]' />

        </div>
    );
};

export default DisplaySection;