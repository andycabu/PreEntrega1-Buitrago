import { useState } from "react";
import CartWidget from "./CartWidget";

const NavBar = () => {
  const [dropOn, setDropOn] = useState(false);
  function ChangeDrop() {
    setDropOn(!dropOn);
  }

  const itemsNabar = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "Category",
      dropdown: (
        <div
          className={`${
            dropOn ? "flex" : "hidden"
          } absolute w-max bg-[var(--background-color)] text-base z-50 rounded shadow my-4`}
        >
          <ul className="py-1">
            <li>
              <a
                href="#"
                className="text-sm hover:bg-[var(--card-background-color)] block px-4 py-2"
              >
                Categoria 1
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm hover:bg-[var(--card-background-color)] block px-4 py-2"
              >
                Categoria 2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-sm hover:bg-[var(--card-background-color)] block px-4 py-2"
              >
                Categoria 3
              </a>
            </li>
          </ul>
        </div>
      ),
      arrow: (
        <svg
          onClick={ChangeDrop}
          className={`w-4 h-4 ml-2 cursor-pointer inline-block ${
            dropOn && "rotate-180"
          } transition-all duration-300`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      ),
    },
    {
      id: 3,
      text: "Contact us",
    },
  ];

  return (
    <header>
      <nav className="flex justify-between bg-[var(--card-background-color)] text-[var(--text-color)]  box-shadow-1">
        <div className="px-5 xl:px-12 py-5 flex w-full items-center">
          <a className="text-3xl font-bold font-heading" href="#">
            <h3>Bytefood</h3>
          </a>
          <ul className="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
            {itemsNabar.map((item) => (
              <li key={item.id}>
                <a className="hover:text-gray-200 cursor-pointer">
                  {item.text}
                </a>
                {item.arrow}
                {item.dropdown}
              </li>
            ))}
          </ul>
        </div>
        <a className="flex fl mr-6 items-center" href="#">
          <CartWidget />
        </a>
      </nav>
    </header>
  );
};
export default NavBar;
