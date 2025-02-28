import React from 'react'
import useFetch from './Hooks/useFetch';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from './api';
import { useNavigate } from 'react-router-dom'; 

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
    const [data, setData] = React.useState(null);
    const [login, setLogin] = React.useState(null);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const {request} = useFetch();
    const navigate = useNavigate();

    const userLogout = React.useCallback(
        function(){
            setLogin(null);
            setData(null);
            setError(null);
            setLoading(null);
            localStorage.removeItem("token");
            navigate("/login");
    }, [navigate]);
        
    async function getUser(token){
        const {url, options} = USER_GET(token);
        const {json} = await request(url, options);
        setData(json);
        setLogin(true);
    }

    async function userLogin(username, password){
        try{
            setError(null);
            setLoading(true);
            const {url, options} = TOKEN_POST({username, password});
            const {response, json} = await request(url, options);
            console.log(response);
            if(!response.ok) throw new Error("The username or password is incorrect.")
            localStorage.setItem("token", json.token);
            getUser(json.token);
        }catch(error){
            setError(error.message);
        }finally{
            setLoading(false);
        }
    }

    React.useEffect(() => {
        async function autoLogin() {
            const token = localStorage.getItem("token");
            if(token) {
                try{
                    setError(false);
                    setLoading(true);
                    const {url, options} = TOKEN_VALIDATE_POST(token);
                    const {response} = await request(url, options);
                    if(!response.ok) throw new Error("Invalid token.");
                    getUser(token);
                    navigate("/profile")
                }catch(error){
                    userLogout();
                }finally{
                    setLoading(false);
                }
            }
        }
        autoLogin();
    }, [userLogout]);

    return (
        <UserContext.Provider value={{userLogin, userLogout, data, error, loading, login}}>{children}</UserContext.Provider>
    )
}

export default UserContext