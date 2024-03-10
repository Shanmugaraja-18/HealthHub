import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import DisplaySection from "../DisplaySection/DisplaySection.js";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import Brands from "../Brands/Brands.js";

const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="HealthHub" />
          

          {/* <div className="banner">
            <p>Welcome to HealthHub</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Start <CgMouse />
              </button>
            </a>

          </div> */}
          <Brands/>
          <DisplaySection/>
         
          

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
          
          
        </Fragment>
        
      )}
    </Fragment>
    
    
  );
};

export default Home;


// import React, { Fragment, useEffect } from "react";
// import { CgMouse } from "react-icons/all";
// import "./Home.css";
// import ProductCard from "./ProductCard.js";
// import MetaData from "../layout/MetaData";
// import DisplaySection from "../DisplaySection/DisplaySection.js";
// import { clearErrors, getProduct } from "../../actions/productAction";
// import { useSelector, useDispatch } from "react-redux";
// import Loader from "../layout/Loader/Loader";
// import { useAlert } from "react-alert";

// const Home = () => {
//   const alert = useAlert();
//   const dispatch = useDispatch();
//   const { loading, error, products } = useSelector((state) => state.products);

//   useEffect(() => {
//     if (error) {
//       alert.error(error);
//       dispatch(clearErrors());
//     }
//     dispatch(getProduct());
//   }, [dispatch, error, alert]);

//   return (
//     <Fragment>
//       {loading ? (
//         <Loader />
//       ) : (
//         <Fragment>
//           <MetaData title="HealthHub" />
          

//           <div className="banner">
//             <p>Welcome to HealthHub</p>
//             <h1>FIND AMAZING PRODUCTS BELOW</h1>

//             <a href="#container">
//               <button>
//                 Start <CgMouse />
//               </button>
//             </a>
//           </div>
//           <DisplaySection/>

//           <h2 className="homeHeading">Featured Products</h2>

//           <div className="container" id="container">
//             {products &&
//               products.map((product) => (
//                 <ProductCard key={product._id} product={product} />
//               ))}
//           </div>
//         </Fragment>
//       )}
//     </Fragment>
//   );
// };

// export default Home;
