import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="w-[100%] fixed top-0 py-[1rem] flex items-center justify-around">
      <h1 className="text-5xl tracking-[0.2rem] uppercase font-semibold">Math Magicians</h1>
      <ul className="nav-bar flex gap-8 font-medium ">
        <li className="duration-700 hover:scale-125">
          <Link to="/">Home</Link>
        </li>
        <li className="duration-700 hover:scale-125">
          <Link to="/calculator">Calculator</Link>
        </li>
        <li className="duration-700 hover:scale-125">
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
