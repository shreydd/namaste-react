import { useFormik } from 'formik';

const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <div className='login-container'>
                <h3>Login</h3>
                <form onSubmit={formik.handleSubmit} className='login-form'>
                    <input 
                        id='email' 
                        name='email' 
                        type="email"
                        placeholder='Email' 
                        onChange={formik.handleChange} 
                        value={formik.values.email}
                    />
                    <input 
                        id='password' 
                        name='password' 
                        type="password"
                        placeholder='Password' 
                        onChange={formik.handleChange} 
                        value={formik.values.password}
                    />
                    <button className='primary-btn' type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Login;