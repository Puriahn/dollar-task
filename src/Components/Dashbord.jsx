import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

export default function Dashboard() {
  const [t, i18n] = useTranslation("global");
  const userName=useSelector(state=>state.user.userName)
  const date = new Date();
  let message = "";
  const showTime = date.getHours() + ":" + date.getMinutes();
  const hours = date.getHours();
  if (hours < 12) {
    message = t("Dashboard.morning")
  } else if (hours < 18) {
    message = t("Dashboard.afternoon")
  } else {
    message = t("Dashboard.night")
  }
  return (
    <div className="mt-36 bg-skin-button-accent w-64 md:w-96  h-72 rounded-xl items-center justify-center text-center flex flex-col">
      <div className="text-4xl mb-10 text-skin-common">{showTime}</div>
      <div className="text-3xl text-skin-common"> <span className="text-skin-base">{userName }</span> , {message}</div>
    </div>
  );
}
