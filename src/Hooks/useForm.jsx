import React from 'react'

const types = {
    email: {
        regex: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "Please enter a valid email adress.",
    },
    password: {
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
        message: "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, and one digit.",
    },
    number: {
        regex: /^\d+$/,
        message: "Please enter a valid, positive number.",
    }
};

const useForm = (type) => {
    const [value, setValue] = React.useState("");
    const [error, setError] = React.useState("");

    function validate(){
        if(type === false) return true;
        if(value.length === 0) {
            setError("This field is required.");
            return false;
        }else if(types[type] && !types[type].regex.test(value)){
            setError(types[type].message);
            return false;
        }
        else{
            setError(null);
            return true;
        }
    }

    function onChange({target}){
        if(error) validate(target.value);
        setValue(target.value);
    }
    
    return {value, setValue, onChange, validate: () => validate(value), onBlur: () => validate(value), error}
}

export default useForm