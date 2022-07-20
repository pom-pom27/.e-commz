import "./login.scss";
interface ILogin {}

const Login: React.FC<ILogin> = () => {
  return (
    <div className="login">
      <div className="register-box">
        <h1>SIGN IN</h1>
        <form action="#">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="button" value="LOGIN" />
        </form>
        <h3>CANT REMEMBER YOUR PASSWORD?</h3>
        <h3>CREATE A NEW ACCOUNT</h3>
      </div>
    </div>
  );
};

export default Login;
