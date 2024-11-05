import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Humburgur() {
  const [t, i18n] = useTranslation("global");
  const data = ["Dashboard", "Weather", "Todo", "Profile",];
  const [isOpen, setIsOpen] = useState(false);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  function handleCloseHumburgur() {
    setIsOpen(false);
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
        className={`border-r-2 border-skin-base transform bg-skin-hum w-1/3 h-[900px] z-50 transition-all overflow-y-auto  fixed duration-300 ${
          isOpen ? "-translate-x-0" : "-translate-x-full"
        }  ${
          typeof window !== "undefined" ? "-translate-y-11" : "-translate-y-20"
        }  `}
        id="overlay"
        data-open="false"
      >
        <svg
          fill="var(--color-text-base)"
          onClick={handleClick}
          className="float-right hover:cursor-pointer mt-3 mr-2 "
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="40"
          height="40"
          viewBox="0 0 48 48"
        >
          <path d="M 38.982422 6.9707031 A 2.0002 2.0002 0 0 0 37.585938 7.5859375 L 24 21.171875 L 10.414062 7.5859375 A 2.0002 2.0002 0 0 0 8.9785156 6.9804688 A 2.0002 2.0002 0 0 0 7.5859375 10.414062 L 21.171875 24 L 7.5859375 37.585938 A 2.0002 2.0002 0 1 0 10.414062 40.414062 L 24 26.828125 L 37.585938 40.414062 A 2.0002 2.0002 0 1 0 40.414062 37.585938 L 26.828125 24 L 40.414062 10.414062 A 2.0002 2.0002 0 0 0 38.982422 6.9707031 z"></path>
        </svg>

        <ul className="flex pt-24 flex-col gap-y-5 md:gap-y-10 text-sm md:text-xl mt-10 ">
          {data.map((item) => (
            <li key={item}>
              <Link
                onClick={handleCloseHumburgur}
                className=" text-skin-invert font-bold  hover:text-skin-base transition-all rounded-lg pl-4 md:pl-7  py-2 "
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
