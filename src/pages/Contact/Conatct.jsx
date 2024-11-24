import { useFormik } from "formik";
import { number, object, string } from "yup";

export default function Contact() {
  const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
  const ageRegex = /^(0|[1-9][0-9]?)$/

  const validationSchema = object({
    name: string()
      .required("Name is required")
      .min(3, "Name must be at least 3 characters")
      .max(25, "Name can not be more than 25 characters"),

    age: string()
      .required("Age is required")
      .matches(ageRegex, "Age must be a positive number between 0 and 99"),

    email: string()
      .required("Email is required")
      .email("Email is invalid"),

    password: string()
      .required("Password is required")
      .matches(passwordRegex, "Password should be at least eight characters, at least one upper case English letter, one lower case English letter, one number, and one special character"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      age: "",
      email: "",
      password: "",
    },
    validationSchema
  });
  
  return (
    <>
      <div className="contact">
        <div className="container py-5 h-screen flex items-center flex-col justify-center">
          <div className="contact-container flex items-center flex-col justify-center">
            <h1 className="text-3xl uppercase text-gray-800 font-bold py-3">Contact Section</h1>
            <div className="star relative flex items-center justify-center pb-3">
            <div className="title-line bg-gray-800 w-16 h-[2px] mr-3"></div>
            <i className="fa-solid fa-star text-gray-800"></i>
            <div className="title-line bg-gray-800 w-16 h-[2px] ml-3"></div>
            </div>
           </div>
          <form className="py-6 mx-auto space-y-5">
           <div className="name w-600px relative">
            <input
              className="form-input peer "
              type="text"
              placeholder="userName"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="name"
            />
            {formik.errors.name && formik.touched.name && <p className="text-xs text-red-600 p-2">{formik.errors.name}</p>}
            <label className="absolute left-0 p-2 text-xs text-main transition-all peer-not-placeholder-shown"> userName : </label>
            </div>
           <div className="age  w-600px relative">
            <input
              className="form-input peer"
              type="text"
              placeholder="userAge"
              value={formik.values.age}
      onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="age"
            />
           {formik.errors.age && formik.touched.age && <p className="text-xs text-red-600 p-2">{formik.errors.age}</p>}
           <label
            className="absolute left-0 p-2 text-xs text-main transition-all peer-not-placeholder-shown"> userAge :
           </label>
            </div>
           <div className="email w-600px relative">
             <input
               className="form-input peer"
               type="email"
               placeholder="userEmail"
               value={formik.values.email}
               onChange={formik.handleChange}
               onBlur={formik.handleBlur}
               name="email"
             />
            {formik.errors.email && formik.touched.email && <p className="text-xs text-red-600 p-2">{formik.errors.email}</p>}
            <label
             className="absolute left-0 p-2 text-xs text-main transition-all peer-not-placeholder-shown"> userEmail :
            </label>
            </div>
           <div className="password w-600px relative">
            <input
             className="form-input peer"
             type="password"
             placeholder="userPassword"
             value={formik.values.password}
             onChange={formik.handleChange}
             onBlur={formik.handleBlur}
             name="password"
            />
            {formik.errors.password && formik.touched.password && <p className="text-xs text-red-600 p-2">{formik.errors.password}</p>}
            <label
             className="absolute left-0 p-2 text-xs text-main transition-all peer-not-placeholder-shown">
             userPassword :
            </label>
            </div>
           <button
             type="button"
             className="btn mx-10 p-1 rounded-md text-xs text-white bg-main">
             send Message
            </button>
          </form>
         </div>
       </div>
    </>
  );
}
