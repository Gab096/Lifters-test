import { Navbar, Logo } from "..";
import { Icons } from "../../assets";

interface HeaderProps {
  isProduct?: boolean;
}

const Header = ({ isProduct }: HeaderProps) => {
  return (
    <header className="w-100 bg-black py-3 border-bottom border-secondary d-flex align-items-center px-5  ">
      <nav className=" w-75 d-flex align-items-center navbar-expand-lg  px-5 ">
        <div className="container ">
          <div className="row row-cols-2 align-items-center">
            <Logo />
            {isProduct && <Navbar />}
          </div>
        </div>
      </nav>
      <nav className=" w-25">
        {isProduct && (
          <div
            className=" w-100 d-flex align-items-center gap-4 ml-auto p-2 bd-highlight px-5"
            style={{ placeContent: "end " }}
          >
            <div className="d-flex align-items-center gap-2">
              <img src={Icons.bag} alt="" />
              <h6 className="m-0 text-white">3</h6>
            </div>
            <h6 className="m-0 text-white ">Login</h6>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
