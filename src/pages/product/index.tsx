import { Header, ProductMain } from "../../components";
const Product = () => {
  return (
    <div>
      <div className="bg-primary Container min-vh-100">
        <Header isProduct />
        <ProductMain />
      </div>
    </div>
  );
};

export default Product;
