import { navItems } from "../../__Mocks__/navItems";
const Navbar = () => {
  return (
    <div className="w-30 h-100 d-flex " >
      <ul className="w-100 h-100 d-flex g-2 m-0 ">
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
    </div>
  );
};

export default Navbar;
