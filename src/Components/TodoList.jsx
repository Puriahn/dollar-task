import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
const initalTodos = ["login", "dashboard", "weather", "todos", "profile"];

export default function TodoList() {
  const [t, i18n] = useTranslation("global");
  const inp = useRef();
  const [todos, setTodos] = useState(initalTodos);
  let x = "";
  function handleTodo(e) {
    x = [e.target.value, ...todos];
  }
  function handleAdd() {
    if (x === "") {
      alert("field can't be emtpy");
    } else {
      setTodos(x);
      inp.current.value = "";
    }
  }
  function handleDelete(todo) {
    let x = todos.filter((item) => item != todo);
    setTodos(x);
  }

  return (
    <div className="relative overflow-x-auto text-lg mt-20">
      <div className="flex flex-row gap-5">
        <input
          maxLength={20}
          ref={inp}
          onChange={handleTodo}
          className="w-48 md:w-72 mb-9 h-10 rounded-lg px-2 text-black"
          placeholder={t("TodoList.placeholder")}
        />
        <button
          onClick={handleAdd}
          className="bg-skin-hum text-skin-invert font-bold rounded-lg h-10 px-4 hover:opacity-80"
        >
          {t("TodoList.button")}
        </button>
      </div>
      <div className="border-skin-base border-2 py-6 rounded-lg">
        {todos.map((todo) => (
          <div
            key={todo}
            className="justify-between flex border-b border-skin-base mb-2"
          >
            <div className="flex mb-4">
              <input className="mx-4" type="checkbox" />
              <div className="mx-2 font-semibold text-skin-common">{todo}</div>
            </div>
            <div className="mb-4">
              <img
                className="hover:cursor-pointer mx-4"
                onClick={() => handleDelete(todo)}
                width="30"
                height="30"
                src="https://img.icons8.com/ios/50/multiply.png"
                alt="multiply"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
