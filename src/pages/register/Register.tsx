import "./register.scss";
interface IRegister {}

const Register: React.FC<IRegister> = () => {
  return (
    <div className="register">
      <div className="register-box">
        <h1>CREATE AN ACCOUNT</h1>
        <form action="#">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Last name" />
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="password" />
          <input type="password" placeholder="Confirm Password" />
          <p>
            By creating an account, I consent to the processing of my personal
            data in accordance with the
            <b>PRIVACY POLICY</b>
          </p>
          {/* <div className="checkbox">
            <input type="checkbox" id="agreement" name="agreement" />
            <label htmlFor="agreement">
              By creating an account, I consent to the processing of my personal
              data in accordance with the
            </label>
            
          </div> */}
          <input type="button" value="CREATE" />
        </form>
      </div>
    </div>
  );
};

export default Register;
