import { navItems } from "../../__Mocks__/navItems";
const Navbar = () => {
  return (
    <div className="w-30 h-100 d-flex "  style={{gap:'20px'}} >
      <ul className="w-100 h-100 d-flex m-0 " style={{gap:'20px'}}>
        {navItems.map((item) => (
          <li
            key={item.id}
            className="w-100 h-100  text-center d-flex   "
          >
            <a
              className="nav-link text-light "
              aria-current="page"
              href={item.href}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
      <input placeholder='Search' className='pl-20'/>
    </div>
  );
};

export default Navbar;
