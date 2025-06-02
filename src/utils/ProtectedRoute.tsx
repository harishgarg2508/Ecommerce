import { Outlet ,Navigate } from "react-router-dom";

const ProtectedRoute:React.FC = ()=>{
    const isAuthenticated = true;
    return isAuthenticated ? <Outlet/> : <Navigate to="/login" />
}

export default ProtectedRoute