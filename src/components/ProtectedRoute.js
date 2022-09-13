import { useLocation, Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const auth = localStorage.getItem('isLoggedIn')
    console.log(auth)
    const location = useLocation()
    return (
        auth
            ? <Outlet />
            : <Navigate to='/login' state={{ from : location }} replace />
    );
}
 
export default ProtectedRoute; 