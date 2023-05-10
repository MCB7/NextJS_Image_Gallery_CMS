import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthContext";
import {auth} from '../firebase/clientApp'
import styles from '../styles/Admin.module.scss'




interface LoginType {
  email: string;
  password: string;
}
const LoginPage = () => {

  const { logIn } = useAuth();
  const router = useRouter();

    
  const methods = useForm<LoginType>({ mode: "onBlur" });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;
  


  const onSubmit = async (data: LoginType) => {
    try {
      await logIn(data.email, data.password);
      router.push("/dashboard");
    } catch (error: any) {
      console.log(error.message);
    }
 };

 
    if (auth.currentUser != null) {router.push("/dashboard");} else {
  return (
    <section className={styles.LOGINcontainer}>

      <FormProvider {...methods}>
        <form action="" onSubmit={handleSubmit(onSubmit)}>
    <div className={styles.loginTitle}>
              <label>
                Email
              </label>
    </div>       
        <br/>
        <div className={styles.EMAILinput}>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
             
            />
           
            {errors.email && <p>{errors.email.message}</p>}
        </div>
        <br/>
        <div className={styles.PASSWORDtitle}>
              <label htmlFor="">
                Password
              </label>
     
        </div>
              <br/>
        <div className={styles.PASSWORDinput}>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
           
            />
            {errors.password && <p className="text-red-400">{errors.password.message}</p>}
 
        </div>
            <br/>
            <div className={styles.SUBMITbutton}>
            <button
              type="submit"
              className={`h-12 text-center w-2/3 bg-blue-900 border-2 rounded-md hover:shadow-lg hover:bg-blue-800 text-lg transition`}
            >
              <p >Login</p>
            </button>
            </div>
        
        </form>
      </FormProvider>

    </section>
  );
    }
};

export default LoginPage;