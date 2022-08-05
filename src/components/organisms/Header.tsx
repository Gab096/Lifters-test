import { Navbar, Logo } from "..";
interface HeaderProps {
  isProduct?: boolean;
}

const Header = ({ isProduct }: HeaderProps) => {
  return (
    <header className="bg-black py-3 border-bottom   border-secondary " >
      <nav className="navbar container d-flex align-items-center navbar-expand-lg " >
        <Logo />
        {isProduct && <Navbar />}
      </nav>
    </header>
  );
};

export default Header;
