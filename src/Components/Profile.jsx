import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { userNameActions } from "../Store/userName";


export default function Profile() {
  const userName = useSelector((state) => state.user.userName);
  const [t, i18n] = useTranslation("global");
  const dispatch=useDispatch()

  function handleLanguage(lang) {
    localStorage.setItem("language",lang)
    i18n.changeLanguage(lang);
  }
  function handleTheme(id){
    dispatch(userNameActions.setTheme(id))
    localStorage.setItem("theme",id)
  }

  return (
    <div className="mt-10 flex flex-col gap-10">
      <div className="text-skin-common border-b-2 py-4 border-skin-base">
        <div>{t("Profile.username")} </div>
        <div className="font-bold text-5xl text-skin-base">{userName}</div>
      </div>
      <div className="space-y-4 space-x-6 text-skin-common border-b-2 w-96 py-4 border-skin-base">
        <div className="text-skin-common">{t("Profile.languages")}</div>
        <button
          onClick={() => handleLanguage("fa")}
          className="text-skin-common font-semibold hover:opacity-80 w-20 rounded-lg border-2 border-skin-base px-3 py-1"
        >
          {t("Profile.farsi")}
        </button>
        <button
          onClick={() => handleLanguage("en")}
          className="text-skin-common  font-semibold hover:opacity-80 w-20 rounded-lg border-2 border-skin-base px-3 py-1"
        >
          {t("Profile.english")}
        </button>
      </div>
      <div className="space-y-4 space-x-2 text-skin-common border-b-2 w-96 py-4 border-skin-base">
        <div className="text-skin-common">{t("Profile.theme")}</div>
        <div className="bg-gray-600 py-3 px-2 flex gap-2 rounded-lg">
        <button
          onClick={() => handleTheme("")}
          className="text-[#66fcf1] font-semibold hover:opacity-80 w-20 rounded-lg border-2 bg-[#1f2833] border-[#c5c6c7] px-1 py-1"
        >
          {t("Profile.theme1")}
        </button>
        <button
          onClick={() => handleTheme("themeOne")}
          className="text-[#D83F87] font-semibold hover:opacity-80 w-20 rounded-lg border-2 bg-[#44318D] border-[#a84fb0] px-1 py-1"
        >
          {t("Profile.theme2")}
        </button>
        <button
          onClick={() => handleTheme("themeSecond")}
          className="text-[#86c232] font-semibold hover:opacity-80 w-20 rounded-lg border-2 bg-[#222629] border-[#8cc298] px-1 py-1"
        >
          {t("Profile.theme3")}
        </button>
        <button
          onClick={() => handleTheme("themeThird")}
          className="text-[#47544a]  font-semibold hover:opacity-80 w-20 rounded-lg border-2 bg-[#3aafa9] border-[#c5c6c7] px-1 py-1"
        >
          {t("Profile.theme4")}
        </button>
        </div>
      </div>
    </div>
  );
}
