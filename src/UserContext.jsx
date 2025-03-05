import React from 'react'
import useFetch from './Hooks/useFetch';
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_POST, USER_GET, PHOTO_POST, PHOTOS_GET } from './api';

export const UserContext = React.createContext();

export const UserStorage = ({children}) => {
    const {error, loading, request} = useFetch();
    const [data, setData] = React.useState();
    const [login, setLogin] = React.useState(null);

    const userLogout = React.useCallback(
        function(){
            setLogin(null);
            setData(null);
            localStorage.removeItem("token");
    }, []);
        
    async function getUser(token){
        const {url, options} = USER_GET(token);
        const {response,json} = await request(url, options);
        if(response.ok){
            setData(json);
            setLogin(true);
        }
    }

    async function userLogin(username, password){
        const {url, options} = TOKEN_POST({username, password});
        const {response, json} = await request(url, options);
        if(response.ok){
            localStorage.setItem("token", json.token);
            getUser(json.token);
        }
    }

    async function userSignup(username, email, password){
        const {url, options} = USER_POST({username, email, password});
        const {response} = await request(url, options);
        if(response.ok) {
            userLogin(username,password);
        }
    }

    async function postPhoto(formData){
        const {url, options} = PHOTO_POST(window.localStorage.getItem('token'), formData);
        const {response} = await request(url, options);
        return response.ok;
    }

    React.useEffect(() => {
        async function autoLogin() {
            const token = localStorage.getItem("token");
            if(token) {
                const {url, options} = TOKEN_VALIDATE_POST(token);
                const {response} = await request(url, options);
                if(response && response.ok) {
                    getUser(token);
                }else{
                    userLogout();
                }   
            }
        }
        autoLogin();
    }, [userLogout]);

    return (
        <UserContext.Provider value={{userSignup, userLogin, userLogout, postPhoto, data, error, loading, login}}>{children}</UserContext.Provider>
    )
}

export default UserContext