import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Humburgur() {
  const [t, i18n] = useTranslation("global");
  const data = ["Dashboard", "Weather", "Todo", "Profile"];
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className=" lg:hidden block z-40">
      <svg
      fill="var(--color-text-base)"
        className="ml-4 hover:cursor-pointer"
        onClick={handleClick}
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        width="30"
        height="30"
        viewBox="0 0 50 50"
      >
        <path d="M 5 8 A 2.0002 2.0002 0 1 0 5 12 L 45 12 A 2.0002 2.0002 0 1 0 45 8 L 5 8 z M 5 23 A 2.0002 2.0002 0 1 0 5 27 L 45 27 A 2.0002 2.0002 0 1 0 45 23 L 5 23 z M 5 38 A 2.0002 2.0002 0 1 0 5 42 L 45 42 A 2.0002 2.0002 0 1 0 45 38 L 5 38 z"></path>
      </svg>
      <div
        className={`transform bg-skin-hum w-1/3 h-[900px] z-50 transition-all overflow-y-auto  fixed duration-300 ${
          isOpen ? "-translate-x-0" : "-translate-x-full"
        }  ${
          typeof window !== "undefined" ? "-translate-y-11" : "-translate-y-20"
        }  `}
        id="overlay"
        data-open="false"
      >
        <img
          onClick={handleClick}
          className="float-right hover:cursor-pointer "
          width="50"
          height="50"
          src="https://img.icons8.com/ios-filled/50/FFFFFF/multiply.png"
          alt="multiply"
        />{" "}
        <ul className="flex pt-24 flex-col gap-5 md:gap-10 text-sm md:text-xl mt-10 ">
          {data.map((item) => (
            <li key={item}>
              <Link
                onClick={() => handleSelected(item)}
                className=" text-skin-invert font-bold hover:opacity-65 rounded-lg px-9 py-2 "
                to={item}
              >
                {t(`SideBar.${item}`)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
