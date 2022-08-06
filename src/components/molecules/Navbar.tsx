import { navItems } from "../../__Mocks__/navItems";
import { Icons } from "../../assets";
const Navbar = () => {
  return (
    <div className="w-50 h-100 d-flex ">
      <ul className="w-100 h-100 d-flex align-self-center m-0 gap-5">
        {navItems.map((item: any) => (
          <li key={item.id} className="w-100 h-100  text-center d-flex ">
            <a
              className="nav-link text-light "
              aria-current="page"
              href={item.href}
            >
              {item.name}
            </a>
          </li>
        ))}
        <li className=" d-flex">
          <span >
            <img src={Icons.search} alt="lupa" />
          </span>
          <input
            id="search"
            placeholder="Search"
            type="text"
            className="form-control w-100 rounded-0 bg-black mx-2 p-0 px-2 border-0 "
          />
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
