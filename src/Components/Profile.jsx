import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";


export default function Profile() {
  const userName = useSelector((state) => state.user.userName);
  const [t, i18n] = useTranslation("global");

  function handleLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <div className="mt-10 flex flex-col gap-10">
      <div className="text-white border-b-2 py-4 border-blue-700">
        <div>{t("Profile.username")} </div>
        <div className="font-bold text-5xl">{userName}</div>
      </div>
      <div className="space-y-4 space-x-6 text-white border-b-2 w-96 py-4 border-blue-700">
        <div className="text-white">{t("Profile.languages")}</div>
        <button
          onClick={() => handleLanguage("fa")}
          className="text-black font-semibold hover:bg-gray-200 w-20 rounded-lg bg-gray-300 px-3 py-1"
        >
          {t("Profile.farsi")}
        </button>
        <button
          onClick={() => handleLanguage("en")}
          className="text-black font-semibold hover:bg-gray-200 w-20 rounded-lg bg-gray-300 px-3 py-1"
        >
          {t("Profile.english")}
        </button>
      </div>
    </div>
  );
}
