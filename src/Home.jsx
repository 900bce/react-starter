import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <h1 style={titleStyle}>React Starter's Project</h1>
      <nav style={navStyle}>
        <ul>
          <li>
            <Link to="/react-starter/01">Sass Color Variables</Link>
          </li>
          <li>
            <Link to="/react-starter/02">Unsplash Light Box</Link>
          </li>
          <li>
            <Link to="/react-starter/03">Hotel Management</Link>
          </li>
          <li>
            <Link to="/react-starter/04">Shopping Cart</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

const titleStyle = {
  marginTop: '10rem',
  textAlign: 'center',
  fontSize: '3rem',
};

const navStyle = {
  marginTop: '5rem',
  fontSize: '1.8rem',
  textAlign: 'center',
  lineHeight: '1.6',
};
