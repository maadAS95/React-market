import React  from 'react';
import {Formik,form} from 'formik'
import * as Yup from 'yup'
import { TextInput } from './TextInput';


export const SignUp = ()=> {
    const validate=yup.object({
      username:Yup.string()
      .max(25,"your Name must not be more 25 characters")
      .required(' Required'),

      phoneNumber:Yup.number()
      .max(15,"phone number must not be more 15 numbers")
      .required("Required"),

      email:Yup.string()
      .email("Email is invalid or already existed")
      .required("Required"),

      password:Yup.string()
      .min(8,"Paasword must be at least 8 characters")
      .required("Required"),

      configPassword:Yup.string()
      .oneOf([Yup.ref('password'),null],"passwords are not matched")
      .required("Required"),
    })
   
        return ( 
          
            <Formik initialValues={{
                userName:"",
                phoneNumber:"",
                email :"",
                password:"",
                configPassword: ""
             }}
             validationSchema={validate}
            >
                {formik =>(
                   <div>
                        <h2>Sign up</h2>
                       <Form>
                       <TextInput name="userName" label="User Name" type="text" />
                       <TextInput name="phoneNumber" label="phone Number" type="text" />
                       <TextInput name="email" label="Email" type="email" />
                       <TextInput name="password" label="Password" type="password" />
                       <TextInput  name="configPassword" label="Confige Password" type="password"/>
                       <button type="submit" className="btn btn-primary mt-2">Sign up</button>
                       <button type="reset" className="btn btn-danger ml-5">Cancel</button>
                       </Form>
                   </div>
                )}
               
             </Formik>
                        
                
            
         );
    
}
 
