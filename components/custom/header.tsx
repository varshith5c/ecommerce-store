import Link from "next/link";
import { BsFillCartFill } from "react-icons/bs";

const Header = () => {
  return (
    <header className="flex items-center justify-between border-2 p-4 rounded-lg ">
      <h1 className=" font-bold text-3xl ">Ecommerce Store</h1>
      <Link href="/cart">
        <BsFillCartFill size={20} />
      </Link>
    </header>
  );
};

export default Header;
