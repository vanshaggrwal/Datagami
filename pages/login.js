
export default function Login() {
    return (
      <div className="form-wrapper">
        <div className="container">
          <h2>Login</h2>
          <form>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Login</button>
          </form>
        </div>
      </div>
    );
  }
