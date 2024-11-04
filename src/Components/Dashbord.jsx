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
    <div className="mt-36">
      <div className="text-4xl mb-10 text-white">{showTime}</div>
      <div className="text-3xl text-white"> {userName } , {message}</div>
    </div>
  );
}
