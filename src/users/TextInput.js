import React from 'react'
import {ErrorMessage, useField} from 'formik'

export const TextInput=({label,...props}) =>  {
    
    const [field ,meta] =useField(props)
   
        return ( 
            <div className="m-3">
                <label htmlFor={Field.name}>{label}</label>
                <input 
                  className={`form-control shadow-none ${meta.touched && meta.error && "is-invalid"} `}
                  {...field} {...props}
                />
                <ErrorMessage name={Field.name} />
            </div>
         );
    
}
 
