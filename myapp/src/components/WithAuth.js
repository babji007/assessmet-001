import { Redirect } from "react-router-dom";

const withAuth = (Component) => {

    const AuthRoute = () => {
      const isAuth = !!sessionStorage.getItem("email");
      if (isAuth) {
        return   <div>  <Component/> </div>;
      } else {
        return <div>{alert("Plz Login First")}<Redirect to="/login" /> </div>;
      }
    };
  
    return AuthRoute;
  };
  

  export default withAuth;