import { Chapter, Home, New, Stories } from "./pages";
import { FaTable, FaThLarge } from "react-icons/fa";
import { NavLink, Route, Routes } from "react-router-dom";

import { twMerge } from "tailwind-merge";

export default function App() {
  return (
    <div className="flex h-dvh text-black">
      <aside className="py-8 shadow-lg">
        <h2 className="mb-4 text-center text-2xl font-bold uppercase text-primary">
          bigstory
        </h2>

        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                twMerge(
                  "flex w-full items-center gap-4 px-8 py-2 font-semibold text-black hover:bg-primary/50 hover:text-white",
                  isActive && "!bg-primary text-white",
                )
              }
            >
              <FaThLarge />
              <span className="text-sm">Dashboard</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/stories"
              className={({ isActive }) =>
                twMerge(
                  "flex w-full items-center gap-4 px-8 py-2 font-semibold text-black hover:bg-primary/50 hover:text-white",
                  isActive && "!bg-primary text-white",
                )
              }
            >
              <FaTable />
              <span className="text-sm">Story Management</span>
            </NavLink>
          </li>
        </ul>
      </aside>

      <main className="flex-auto overflow-auto px-8 py-8">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/stories/new" element={<New />} />
          <Route path="/stories/new/chapter" element={<Chapter />} />
        </Routes>
      </main>
    </div>
  );
}
