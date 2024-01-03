import { Link } from 'react-router-dom';

function Navbar() {
  const redirect = () => {
    const url = "https://intradayglobal.com/";
    window.location.href = url;
  };

  return (
    <section style={{ backgroundColor: "black", display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px' }}>
      <div>
        <img
          src="/Intraday-Global_Logo-151.webp"
          alt="picture"
          onClick={redirect}
          style={{ width: "250px" }}
        />
      </div>
      <div></div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: 'white', flex: '0.2', padding: '3px' }}>
        <Link to="/register" style={{ color: 'white', textDecoration: 'none' }}>
          <div>Register</div>
        </Link>
        <Link to="/signup" style={{ color: 'white', textDecoration: 'none' }}>
          <div>Signup</div>
        </Link>
      </div>
    </section>
  );
}

export default Navbar;
