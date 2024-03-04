import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

// function checkForm(values) {
//     console.log("checkform",values);
//     var errors={};
//     if(!values.firstname) {              (without yup)
//         errors.firstname="first name is mandatory";
//     }
//     if(!values.dob) {
//         errors.dob="we would like to know your date of birth";
//     }
//     return errors;
// }

function Studentdetails() {
    var formik=useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            dob:""
        },
        validationSchema:Yup.object({
            firstname:Yup.string().max(8,"too big to spell").min(3,"too small").required("firstname is mandatory"),
            lastname:Yup.string().max(10,"too big to spell").min(5,"too small").required("lastname is mandatory")
        }),

        // validate:checkForm,

        onSubmit:(values)=>{
            console.log("onsubmit", values);
        }
    })
    // console.log(formik.touched);
    return(
        <div>
            <h1>Student Details</h1>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="fn">First Name :</label>
                <input type="text" name="firstname" onChange={formik.handleChange} onBlur={formik.handleBlur}/><br/><br/>
                <div>{formik.touched.firstname&& formik.errors.firstname}</div>

                <label htmlFor="ln">Last Name :</label>
                <input type="text" name="lastname" onChange={formik.handleChange}  onBlur={formik.handleBlur}/><br/><br/>
                <div>{formik.touched.lastname&&formik.errors.lastname}</div>


                <label htmlFor="db">Date of Birth :</label>
                <input type="text" name="dob" onChange={formik.handleChange} onBlur={formik.handleBlur}/><br/><br/>

                <button type="submit">Add Student</button><br/><br/>

            </form>
        </div>
    )
}

export default Studentdetails;