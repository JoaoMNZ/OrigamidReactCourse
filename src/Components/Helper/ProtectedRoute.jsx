import React from 'react'
import { UserContext } from '../../UserContext'
import { Navigate } from 'react-router-dom';


// Order means the position of navigate and children, if false the order is the opposite of true.
const ProtectedRoute = ({children, path, order}) => {
    const { login } = React.useContext(UserContext);
    if(order){
        return login ? children : <Navigate to={path}/>
    }else{
        return login ? <Navigate to={path}/> : children
    }
}

export default ProtectedRoute