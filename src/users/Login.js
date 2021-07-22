import React from 'react'
import {Formik,Form} from 'formik'
import {TextInput}  from "./TextInput"

export const Login = () => {
    const logValidate=Yup.object({
    email:Yup.string()
    .email('email is invalid')
    .required("Required"),
    password:Yup.string()
    .required("Required")
  })
 return(
     <Formik initialValues={{
         email:"",
         password:""

     }}
     validationSchema={logValidate}>
         {Formik=>(
             <div>
                 <h2>Login !</h2>
                 <form>
                    <TextInput label="Email" name="email" tupe="email" />
                    <TextInput name="password" label ="Password" type="password" />
                 </form>
                 <button type="submit" className="btn btn-success" >Login</button>
                 <button type="submit " className="btn btn-warning">Forget your password ?</button>
             </div>
         )}

     </Formik>
 )
}