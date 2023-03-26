import React from 'react';
import ReactDOM from 'react-dom';
import { useFormik } from 'formik';

// A custom validation function. This must return an object
 // which keys are symmetrical to our values/initialValues
 const validate=(values)=>{
    const errors={};
    if(!values.username){
        errors.username='Required';  
    }else if (!/^[A-Za-z][A-Za-z0-9_]{4,29}$/.test(values.username)) {
        errors.username = 'Invalid username';
      }

    if(!values.password){
        errors.password='Required';  
    }else if(values.password.length>10){
        errors.password='Must be 10 characters or less';
    }

    return errors;
 }

//The JSON.stringify() static method converts a JavaScript value to a JSON string, optionally replacing values if a replacer function is specified  
 //syntax-> JSON.stringify(value, replacer, space)

const LoginForm=()=>{
    // Pass the useFormik() hook initial form values, a validate function that will be called when
   // form values change or fields are blurred, and a submit function that will
   // be called when the form is submitted
    const formik= useFormik({
        initialValues:{
            username: '',
            password: '',
        },
        validate,
        onSubmit: (values)=>{
            alert(JSON.stringify(values,null,2));
        }
    });
    return (
        //handleChange: A change handler to pass to each <input>, <select>, or <textarea>
        //values: Our form’s current values
        <form onSubmit={formik.handleSubmit}>
            <label>Username</label>
            <input
                id="username"
                name="username"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.username}
            ></input>
            {formik.touched.username && formik.errors.username ? <div>{formik.errors.username}</div> : null}

            <label>Password</label>
            <input
                id="password"
                name="password"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
            ></input>
            {formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div> : null}


            <button type="submit">Submit</button>
        </form>
    );
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<LoginForm/>)




