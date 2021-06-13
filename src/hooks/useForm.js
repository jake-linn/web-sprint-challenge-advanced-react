// write your custom hook here to control your checkout form

import {useState} from 'react';

export const intitialValue = {

firstName: '',
lastName: '',
address: '',
city: '',
state: '',
zip: ''


};

export const useForm = () => {
    const [values, setValues = useState] = useState(intitialValue);

    const [showSucessMessage, setShowSucessMessage] = useState(false);

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]: e.target.value});
    };
const handleSubmit = (e) => {
    e.preventDefault();
    setShowSucessMessage(true);
};
return [values, showSucessMessage, handleChanges,handleSubmit]
}