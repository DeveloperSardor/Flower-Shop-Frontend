import { Link } from "react-router-dom";
const EmptyCart = ({textOne, textTwo}) => {
    return ( 
        <div className="notFoundCart d-flex flex-column align-items-center">
            <div className="boxNotFoundCart shadow w-50 mx-auto d-flex flex-column align-items-center py-3">
              <img src="https://maxway.uz/images/empty_cart.svg" alt="photo" />
              <p className="fs-4  text-center empty_text">
                {textOne}
              </p>
              <Link to={'/'} className="mt-5  return-shop text-uppercase btn btn-outline-dark">
                {textTwo}
              </Link>
            </div>
          </div>
     );
}
 
export default EmptyCart;