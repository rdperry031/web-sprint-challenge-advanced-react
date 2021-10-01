// write your custom hook here to control your checkout form
import { useState } from 'react'

export const useForm = (initialValue) => {
    const [values, setValues] = useState(initialValue);
    const [errors, setErrors] = useState(initialValue);
    
    
    
    const handleErrors = (fieldName, fieldValue) => {
        if (fieldName === 'firstName' && fieldValue === '') 
        return 'First Name isrequired';
        if (fieldName === 'lastName' && fieldValue === '')
        return 'Last Name isrequired' 
        if (fieldName === 'address' && fieldValue === '')
        return'Address isrequired'
        if (fieldName === 'city' && fieldValue ==='')
        return 'City is required'
        if (fieldName === 'state' && fieldValue === '')
        return 'State is required'
        if (fieldName === 'zip' && fieldValue === '')
        return 'Zip code is required'
        return ''
    }
    const handleChanges = (e) => {
        const errorMessage = handleErrors(e.target.name, e.target.value)
        setErrors({ ...errors,[e.target.name]: errorMessage})
        setValues({ ...values, [e.target.name]: e.target.value });
      };

    return [values, errors, handleChanges, handleErrors]
}

