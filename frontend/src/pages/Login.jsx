import { LoginOutlined } from "@ant-design/icons";
import { Button, Card, Form, Input } from "antd";
import { useLogin } from "../hooks/useLogin";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { login, error, isLoading } = useLogin();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const { email, password } = values; 

    await login(email, password);

    if (!error) {
      navigate('/searchtable');
    } else {
      console.error('Login failed');
    }

    console.log(email, password);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '95vh',
      }}
      className="bgimg"
    >
      <Card
        style={{
          textAlign: 'center',
          padding: 25,
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
        }}
      >
        <h3><LoginOutlined /> Admin Login</h3>
        <Form
          onFinish={handleSubmit}
          className="login"
        >
          <Form.Item
            label="Email:"
            name="email"
            rules={[{ required: true, message: 'Please enter the email!' }]}
          >
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item
            label="Password:"
            name="password"
            rules={[{ required: true, message: 'Please enter the password!' }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          <Button
            className="button2"
            disabled={isLoading}
            htmlType="submit"
            size="large"
          >
            Login
          </Button>
          {error && <div className="error">{error}</div>}
        </Form>
      </Card>
    </div>
  );
};

export default Login;


// import { LoginOutlined } from "@ant-design/icons"
// import { Button, Card, Form, Input } from "antd"
// import { useState } from "react"
// import { useLogin } from "../hooks/useLogin"
// import { useNavigate } from "react-router-dom"

// const Login = () => {
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const { login, error, isLoading } = useLogin()
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     await login(email, password);

//     if (!error) {
//       navigate('/searchtable');
//     } else {
//       console.error('Login failed');
//     }

//     console.log(email, password);
//   };

//   return (
//     <div style={{
//       display: 'flex',
//       justifyContent: 'center',
//       alignItems: 'center',
//       height: '95vh',
//       }}
//       className="bgimg">
//       <Card style={{ textAlign: 'center', padding: 25, backgroundColor: 'rgba(255, 255, 255, 0.7)'}}>
//        <h3><LoginOutlined />  Login</h3>
//         <Form onFinish={handleSubmit} className="login">
//           <Form.Item label="Email:" name="email" rules={[{ required: true, message: 'Please enter the email!' }]}>
//             <Input
//               type="email"
//               onChange={(e) => setEmail(e.target.value)}
//               value={email}
//               placeholder="Email"
//             />
//           </Form.Item>
//           <Form.Item label="Password:" name="password" rules={[{ required: true, message: 'Please enter the password!' }]}>
//             <Input
//               type="password"
//               onChange={(e) => setPassword(e.target.value)}
//               value={password}
//               placeholder="Password"
//             />
//           </Form.Item>
//           <Button className="button2" disabled={isLoading} htmlType="submit" size="large" >Login</Button>
//           {error && <div className="error">{error}</div>}
//         </Form>
//       </Card>
//     </div>
//   )
// }

// export default Login
