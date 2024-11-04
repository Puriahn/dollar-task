import { useState } from "react";
import { useTranslation } from "react-i18next";

import { useNavigate } from "react-router-dom";

const AllowedUsers = ["puria", "ali", "mahdi", "reza"];

export default function Login() {
  const [t, i18n] = useTranslation("global");

  const navigate = useNavigate();
  const [userName, setUserName] = useState();
  const [pass, setPass] = useState();
  const [warning, setWarning] = useState(false);

  function handleForm(e) {
    e.preventDefault();
    if (AllowedUsers.includes(userName) && pass === "123") {
      localStorage.setItem("user", userName);

      navigate("/Dashboard");
    } else {
      setWarning(true);
    }
  }
  function handleUser(e) {
    setUserName(e.target.value);
  }
  function handlePass(e) {
    setPass(e.target.value);
  }

  function handleLanguage(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <>
      <div className="px-2 flex gap-5 pt-5 bg-gradient-to-r flex-col md:block from-indigo-500 via-purple-500 to-pink-400 justify-between">
        <div className="flex  gap-5" >
          <div className="text-white text-xl">Languages:</div>
          <button
            onClick={() => handleLanguage("fa")}
            className="w-20 rounded-lg bg-gray-300 px-3 py-1"
          >
            Farsi
          </button>
          <button
            onClick={() => handleLanguage("en")}
            className="w-20 rounded-lg bg-gray-300 px-3 py-1"
          >
            English
          </button>
        </div>
        <div className="text-white">
          <div>UserNames: reza , mahdi , puria , ali</div>
          <div>Password: 123</div>
        </div>
      </div>

      <div className=" mx-auto text-center pt-32 items-center justify-center bg-gradient-to-r h-screen from-indigo-500 via-purple-500 to-pink-400 ">
        <div className="mx-auto text-center items-center justify-center flex flex-col gap-10">
          <div className="font-bold text-xl md:text-4xl text-gray-100">
            {t("Login.title")}
          </div>
          <form onSubmit={handleForm} className="flex flex-col gap-8">
            <div className="flex flex-col">
              <label
                className="text-slate-200 font-semibold mb-2"
                htmlFor="username"
              >
                {t("Login.username")}
              </label>
              <input
                onChange={handleUser}
                name="username"
                className="bg-gray-100 px-2 h-10 w-64 items-center mx-auto justify-center rounded-md"
                id="username"
                type="text"
              />
            </div>
            <div className="flex flex-col">
              <label
                className="text-slate-200 font-semibold mb-2"
                htmlFor="password"
              >
                {t("Login.password")}
              </label>
              <input
                onChange={handlePass}
                name="password"
                className="bg-gray-100 px-2 h-10 w-64 items-center mx-auto justify-center rounded-md"
                id="password"
                type="password"
              />
            </div>
            <div className="flex justify-between">
              <button className="w-28 bg-slate-800 text-white px-2 py-1 rounded-lg hover:bg-slate-700 ">
                {t("Login.button")}
              </button>
              {warning && <div className="text-white">{t("Login.error")}</div>}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
