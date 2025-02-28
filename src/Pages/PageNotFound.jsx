
import { Link } from "react-router-dom";
import notfound from "../assets/notfound.jpg";

export const PageNotFound = () => {

return (
    <div className="container p-relative">
       <img src={notfound} className="img-fluid"   alt="Page Not Found" />
       <p className="text-center mt-3" >
        <Link to="/" className="btn btn-danger"> Goto Home Page </Link>
       </p>
    </div>
  )
}


