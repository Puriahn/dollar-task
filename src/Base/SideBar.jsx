import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function SideBar() {
  const [t, i18n] = useTranslation("global");
  let location = useLocation();
  const data = ["Dashboard", "Weather", "Todo", "Profile"];
  const [isSelected, setIsSelected] = useState(location.pathname.substring(1));
  function handleSelected(item) {
    setIsSelected(item);
  }

  return (
    <>
      <div
        dir="ltr"
        className="border-r-2 pt-20 text-center w-1/5 lg:block hidden"
      >
        <ul className="flex flex-col gap-10 text-xl ">
          {data.map((item) => (
            <li key={item}>
              <Link
                onClick={() => handleSelected(item)}
                className={
                  isSelected === item
                    ? "text-skin-base font-extrabold rounded-lg px-10 py-2"
                    : "text-skin-common rounded-lg px-10 py-2 hover:opacity-65"
                }
                to={item}
              >
                {t(`SideBar.${item}`)}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
