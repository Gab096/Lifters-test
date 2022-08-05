import { navItems } from "../../__Mocks__/navItems";
import {Icons} from '../../assets'
const Navbar = () => {
  return (
    <div className="w-45 h-100 d-flex " >
      <ul className="w-100 h-100 d-flex m-0 " >
        {navItems.map((item) => (
          <li
            key={item.id}
            className="w-100 h-100  text-center d-flex "
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
         <li className="input-group-prepend d-flex">
          <span ><img src={Icons.search} alt='lupa'/></span>
        <input placeholder='Search' type='text' className='form-control w-100 rounded-0 bg-black p-0 px-2 border-0 '/>
         </li>
      </ul>
     
      
    </div>
  );
};

export default Navbar;
