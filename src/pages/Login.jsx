import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { post } from '../services/ApiEndpoint';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { SetChurchData } from '../redux/AuthSlice';

export default function Login() {
  const user = useSelector((state) => state.Auth);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem('storage_Key');
    if (token) {
      navigate('/dashboard');
    }
  }, [navigate]);
  const validate = () => {
    let tempErrors = {};
    if (!email) tempErrors.email = "Email is required";
    if (!/\S+@\S+\.\S+/.test(email)) tempErrors.email = "Email is invalid";
    if (!password) tempErrors.password = "Password is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;
  
    try {
      post('/church/login', { email, password })
        .then((request) => {
          const response = request.data;
          localStorage.setItem('storage_Key', response.token);
          if (request.status === 200) {
            navigate('/dashboard');
            toast.success(response.message);
            dispatch(SetChurchData(response.church));
          }
        })
        .catch((error) => {
          toast.error(error.response?.data?.message || 'An error occurred');
        });
    } catch (error) {
      toast.error('An unexpected error occurred');
    }
  };
  
  return (
    <main className="main-content mt-0">
      <section>
        <div className="page-header min-vh-100">
          <div className="container">
            <div className="row">
              <div className="col-xl-4 col-lg-5 col-md-7 d-flex flex-column mx-lg-0 mx-auto">
                <div className="card card-plain">
                  <div className="card-header pb-0 text-start">
                    <h4 className="font-weight-bolder">Sign In</h4>
                    <p className="mb-0">Enter your email and password to sign in</p>
                  </div>
                  <div className="card-body">
                    <form role="form" onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <input
                          onChange={(e) => setEmail(e.target.value)}
                          type="email"
                          className={`form-control form-control-lg ${errors.email ? 'is-invalid' : ''}`}
                          placeholder="Email"
                          aria-label="Email"
                        />
                        {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                      </div>
                      <div className="mb-3">
                        <input
                          onChange={(e) => setPassword(e.target.value)}
                          type="password"
                          className={`form-control form-control-lg ${errors.password ? 'is-invalid' : ''}`}
                          placeholder="Password"
                          aria-label="Password"
                        />
                        {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                      </div>
                      <div className="text-center">
                        <button type="submit" className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0">Sign in</button>
                      </div>
                    </form>
                  </div>
                  <Link to={'/register'}>
                    <div className="card-footer text-center pt-0 px-lg-2 px-1">
                      <p className="mb-4 text-sm mx-auto">
                        Don't have an account?{' '}
                        <a href="javascript:;" className="text-primary text-gradient font-weight-bold">Sign up</a>
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 end-0 text-center justify-content-center flex-column">
                <div className="position-relative bg-gradient-primary h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center overflow-hidden login-church">
                  <span className="mask bg-gradient-secondary opacity-6" />
                  <h4 className="mt-5 text-white font-weight-bolder position-relative">"Wisdom from the Bible"</h4>
                  <p className="text-white position-relative">Seeking God's wisdom reveals the depth of His love and the richness of His grace.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
