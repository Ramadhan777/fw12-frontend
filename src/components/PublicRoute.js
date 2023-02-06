import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const token = useSelector((state) => state.auth.token);
  const role = useSelector((state) => state.auth.role);
  if (token && role === 'user') {
    return <Navigate to="/" />;
  } 
  if(token && role === 'admin') {
    return <Navigate to='/movie/manage' />
  }
  
  return children;
};

export default PublicRoute;
