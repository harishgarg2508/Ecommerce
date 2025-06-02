import {useState} from "react";
import "./login.css";
import { z, ZodType } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { Link , useNavigate } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";


 interface FormData {
        email: string;
        password: string;
    }

const Login = () => {
    const navigate = useNavigate();
    const user = useAppSelector(state => state.auth.user)
    const [error, setError] = useState<string | null>(null); 


    const schema: ZodType<FormData> = z.object({
        email: z.string().email("Invalid email address"),   
        password: z.string().min(3, "Password must be at least 3 characters").max(20),
    });

    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({ 
        resolver: zodResolver(schema) 
    });

    const submitData =  (data: FormData) => {
        if(data.email===user?.email){
            navigate("/home");
        }else{
            setError("Invalid email or password");
        }
    };

    return (
        <div className="form-div">
            <form className="form-login" onSubmit={handleSubmit(submitData)}>
                <h2>Login</h2>
                {error && <div className="error-message">{error}</div>}
                
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        id="email"
                        {...register("email")} 
                    />
                    {errors.email && <span className="error">{errors.email.message}</span>}
                </div>

                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password"
                        {...register("password")} 
                    />
                    {errors.password && <span className="error">{errors.password.message}</span>}
                </div>

                <button type="submit" className="sub-btn">Login</button>
                <p className="toggle">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </p>
            </form>
        </div>
    );
};

export default Login;