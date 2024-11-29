// import { Button, Card, Form, Input } from "antd";
// import { useState } from "react";
// import { useSignup } from "../hooks/useSignup";
// import { useNavigate } from "react-router-dom";
// import { UserAddOutlined } from "@ant-design/icons";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const { signup, error, isLoading } = useSignup();
//   const navigate = useNavigate();

//   const handleSubmit = async (values) => {
//     const signupSuccess = await signup(values.email, values.password);
//     if (signupSuccess) {
//       navigate('/login');
//     }
//   };

//   const validatePassword = (_, value) => {
//     if (!value) {
//       return Promise.reject("Please enter your password!");
//     }
//     if (value.length < 8) {
//       return Promise.reject("Password must be at least 8 characters long!");
//     }
//     if (!/(?=.*[a-z])/.test(value)) {
//       return Promise.reject("Password must contain at least one lowercase letter!");
//     }
//     if (!/(?=.*[A-Z])/.test(value)) {
//       return Promise.reject("Password must contain at least one uppercase letter!");
//     }
//     if (!/(?=.*\d)/.test(value)) {
//       return Promise.reject("Password must contain at least one number!");
//     }
//     if (!/(?=.*[@$!%*?&-_])/.test(value)) {
//       return Promise.reject("Password must contain at least one special character!");
//     }
//     return Promise.resolve();
//   };

//   return (
//     <div style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '75vh',
//     }}>
//       <Card style={{ textAlign: 'center', padding: 25, backgroundColor: '#ECEFF1' }}>
//         <h3><UserAddOutlined /> Sign up</h3>
//         <Form onFinish={handleSubmit} className="signup">
//           <Form.Item
//             label="Email:"
//             name="email"
//             rules={[
//               { required: true, message: 'Please enter your email!' },
//               { type: 'email', message: 'Please enter a valid email!' }
//             ]}
//           >
//             <Input
//               type="email"
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//               placeholder="Email"
//             />
//           </Form.Item>
//           <Form.Item
//             label="Password:"
//             name="password"
//             rules={[
//               { required: true, message: 'Please enter your password!' },
//               { validator: validatePassword }
//             ]}
//           >
//             <Input.Password
//               onChange={(e) => setPassword(e.target.value)}
//               value={password}
//               placeholder="Password"
//             />
//           </Form.Item>
//           <Button disabled={isLoading} type="primary" htmlType="submit">Sign up</Button>
//           {error && <div className="error">{error}</div>}
//         </Form>
//       </Card>
//     </div>
//   );
// };

// export default Signup;


