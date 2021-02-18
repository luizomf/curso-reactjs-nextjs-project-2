import { Link } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
        height: '60px',
      }}
    >
      <Link to="/">Home</Link>
      <Link to="/abc">Abc</Link>
    </nav>
  );
};
