import { FaTable, FaThLarge } from "react-icons/fa";

import { Table } from "./components";

const data = [
  {
    id: 1,
    title: "The Moon that Can't be Seen",
    writer: "Rara",
    category: "Teen Fiction",
    keywords: ["school", "fiction"],
    status: "Draft",
  },
  {
    id: 2,
    title: "Given",
    writer: "Sansa S.",
    category: "Romance",
    keywords: ["music"],
    status: "Draft",
  },
  {
    id: 3,
    title: "Fish Swimming in The Sky",
    writer: "Kaenarita Faly",
    category: "Fantasy",
    keywords: ["fantasy", "romance"],
    status: "Publish",
  },
  {
    id: 4,
    title: "The Science of Fertitlty PCOS",
    writer: "Jessie Inchauspe",
    category: "Non Fiction",
    keywords: ["science", "PCOS"],
    status: "Publish",
  },
  {
    id: 5,
    title: "The Glucose Goddess Method",
    writer: "Jessie Inchauspe",
    category: "Non Fiction",
    keywords: ["glucose", "science"],
    status: "Publish",
  },
];

export default function App() {
  return (
    <div className="flex h-dvh text-black">
      <aside className="py-8 shadow-lg">
        <h2 className="mb-4 text-center text-2xl font-bold uppercase text-primary">
          bigstory
        </h2>

        <ul>
          <li>
            <a
              href="#"
              className="flex w-full items-center gap-4 px-8 py-2 font-semibold text-black hover:bg-primary hover:text-white"
            >
              <FaThLarge />
              <span className="text-sm">Dashboard</span>
            </a>
          </li>
          <li>
            <a
              href="#"
              className="flex w-full items-center gap-4 px-8 py-2 font-semibold text-black hover:bg-primary hover:text-white"
            >
              <FaTable />
              <span className="text-sm">Story Management</span>
            </a>
          </li>
        </ul>
      </aside>

      <main className="flex-auto overflow-auto px-8 py-8">
        <h1 className="text-2xl font-bold">Stories</h1>

        <div className="mt-8 rounded-xl border border-black/10 px-8 py-6 shadow-md">
          <Table stories={data} />
        </div>
      </main>
    </div>
  );
}
