// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Login() {
//   const navigate = useNavigate();
//   const [email, setemail] = useState('');
//   const [password, setpassword] = useState('');
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   function Login() {
//     // Check your authentication logic here
//     // For simplicity, let's assume a hardcoded email and password
//     const validEmail = 'abhi';
//     const validPassword = 'abhi';

//     // Reset previous error messages
//     setEmailError('');
//     setPasswordError('');

//     if (!email.trim()) {
//       setEmailError('Please enter your email.');
//       return;
//     }

//     if (!password.trim()) {
//       setPasswordError('Please enter your password.');
//       return;
//     }

//     if (email === validEmail) {
//       if (password === validPassword) {
//         // If credentials are correct, redirect to a new page
//         navigate('/admindisplay'); // Update '/dashboard' with your desired route
//       } else {
//         setPasswordError('Incorrect password.');
//       }
//     } else {
//       setEmailError('Incorrect email.');
//     }
//   }

//   return (
//     <div>
//         <div style={{marginTop:'100px'}}>hello</div>
//       <div className='row justify-content-center mt-5'>
//         <div className='col-md-5 mt-5'>
//           <div className='bs'>
//             <h1>Login</h1>
//             <input
//               type='text'
//               className='form-control'
//               placeholder='email'
//               value={email}
//               onChange={(e) => {
//                 setemail(e.target.value);
//                 setEmailError('');
//               }}
//             />
//             {emailError && <p className='text-danger'>{emailError}</p>}
//             <input
//               type='password'
//               className='form-control'
//               placeholder='Password'
//               value={password}
//               onChange={(e) => {
//                 setpassword(e.target.value);
//                 setPasswordError('');
//               }}
//             />
//             {passwordError && <p className='text-danger'>{passwordError}</p>}
//             <button className='btn btn-primary mt-3' onClick={Login}>
//               Login
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;




import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AOS from "aos";
import 'aos/dist/aos.css';
import { useLogin } from './LoginContext';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const {login}=useLogin(); 
  useEffect(()=>{
    AOS.init({duration:1000});
  })
  function handleLogin() {
    const validEmail = 'abhi';
    const validPassword = 'abhi';

    if (email === validEmail && password === validPassword) {
      login(); 
      navigate('/login/admindisplay'); 
      

    } else {
      setError('Invalid email or password.');
    }
  }

  return (
    <div className="login-container" data-aos="zoom-in">
      <div className="login-card">
        <h1 className="login-header">Login</h1>
        <input
          type="text"
          className="login-input"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className="login-input"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <p className="login-error">{error}</p>}
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;



// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import AOS from "aos";
// import 'aos/dist/aos.css';
// import { useLogin } from './LoginContext';

// function Login() {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const { login } = useLogin(); 
//   useEffect(() => {
//     AOS.init({ duration: 1000 });
//   }, []);

//   async function handleLogin() {
//     try {
//       const response = await fetch('http://localhost:3003/admin', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email, password })
//       });
      
//       if (response.ok) {
//         const data = await response.json();
//         console.log(data);
//         console.log(data.authenticated)
//         // Check authentication status from the API response
//         if (data.authenticated) {
//           login(); 
//           navigate('/login/admindisplay');
//         } else {
//           setError('Invalid email or password.');
//         }
//       } else {
//         throw new Error('Failed to authenticate');
//       }
//     } catch (error) {
//       console.error('Error:', error);
//       setError('Failed to authenticate. Please try again later.');
//     }
//   }

//   return (
//     <div className="login-container" data-aos="zoom-in">
//       <div className="login-card">
//         <h1 className="login-header">Login</h1>
//         <input
//           type="text"
//           className="login-input"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           className="login-input"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         {error && <p className="login-error">{error}</p>}
//         <button className="login-button" onClick={handleLogin}>
//           Login
//         </button>
//       </div>
//     </div>
//   );
// }

// export default Login;
