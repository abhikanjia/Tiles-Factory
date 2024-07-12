import { Navigate } from 'react-router-dom';
import { useLogin } from './LoginContext';
function Protected({children}){
    
  const { logout } = useLogin();
    if (!logout){
        return <Navigate to='/login'></Navigate>;
    }
    return children;
}
export default Protected