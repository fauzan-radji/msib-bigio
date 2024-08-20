import { FaFilter, FaPlus, FaSearch } from "react-icons/fa";
import { useMemo, useState } from "react";

import Modal from "./Modal";
import Pagination from "./Pagination";
import Pill from "./Pill";
import Td from "./Td";
import Th from "./Th";

interface Story {
  id: number;
  title: string;
  writer: string;
  category: string;
  keywords: string[];
  status: string;
}

interface TableProps {
  stories: Story[];
}

export default function Table({ stories }: TableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;
  const [start, end] = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    return [start, end];
  }, [currentPage, perPage]);

  const [query, setQuery] = useState("");
  const filteredData = useMemo(
    () =>
      stories.filter(
        (story) =>
          story.title.toLowerCase().includes(query.toLowerCase()) ||
          story.writer.toLowerCase().includes(query.toLowerCase()),
      ),
    [stories, query],
  );
  const dataToShow = useMemo(
    () => filteredData.slice(start, end),
    [filteredData, start, end],
  );

  const [modalOpen, setModalOpen] = useState(false);

  function handleFilterSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setModalOpen(false);
  }

  return (
    <>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4">
          <div className="flex flex-auto flex-wrap items-center justify-between gap-y-2 border-r pr-4">
            <form className="flex items-center overflow-hidden rounded-md bg-black/10 text-sm text-black outline-black/50 focus-within:outline">
              <label htmlFor="search" className="py-2 pl-4">
                <FaSearch />
              </label>
              <input
                id="search"
                type="search"
                className="h-full bg-transparent px-4 py-2 outline-none placeholder:text-black/50"
                value={query}
                placeholder="Search by Writer/Title"
                onInput={(e) => {
                  setCurrentPage(1);
                  setQuery((e.target as HTMLInputElement).value);
                }}
              />
            </form>

            <button
              onClick={() => setModalOpen(true)}
              className="flex aspect-square w-10 items-center justify-center rounded-full border border-black/10 text-sm hover:bg-black/10"
            >
              <FaFilter />
            </button>
          </div>

          <button className="flex items-center justify-center gap-2 rounded-full bg-secondary px-4 text-sm font-semibold text-white">
            <FaPlus />
            Add Story
          </button>
        </div>

        <div className="w-full overflow-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-black/10">
                <Th className="text-center">#</Th>
                <Th>Title</Th>
                <Th>Writer</Th>
                <Th>Category</Th>
                <Th>Keyword</Th>
                <Th>Status</Th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {dataToShow.map((story, i) => (
                <tr
                  key={story.id}
                  className="border-b border-black/10 hover:bg-black/5"
                >
                  <Td className="text-center">{i + start + 1}</Td>
                  <Td>{story.title}</Td>
                  <Td>{story.writer}</Td>
                  <Td>{story.category}</Td>
                  <Td className="flex flex-wrap gap-2">
                    {story.keywords.map((keyword) => (
                      <Pill key={keyword}>{keyword}</Pill>
                    ))}
                  </Td>
                  <Td>
                    <Pill
                      type={story.status === "Publish" ? "success" : "warning"}
                    >
                      {story.status}
                    </Pill>
                  </Td>
                  <td>
                    <button className="ms-auto flex gap-0.5 px-2 py-4">
                      <span className="inline-block aspect-square w-1 rounded-full bg-black"></span>
                      <span className="inline-block aspect-square w-1 rounded-full bg-black"></span>
                      <span className="inline-block aspect-square w-1 rounded-full bg-black"></span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-y-2">
          <p className="text-sm">
            Menampilkan <span className="font-semibold">{start + 1}</span>{" "}
            sampai{" "}
            <span className="font-semibold">
              {Math.min(end, dataToShow.length)}
            </span>{" "}
            dari <span className="font-semibold">{filteredData.length}</span>{" "}
            data
          </p>
          <Pagination
            current={currentPage}
            perPage={perPage}
            total={filteredData.length}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>

      <Modal
        isOpen={modalOpen}
        close={() => setModalOpen(false)}
        className="flex flex-col gap-4"
      >
        <h5 className="text-xl font-bold">Filter</h5>

        <form onSubmit={handleFilterSubmit} className="flex flex-col gap-4">
          <label className="flex flex-col gap-2">
            <span className="font-bold">Category</span>
            <select className="w-full rounded-md bg-black/10 px-4 py-2 text-black outline-black/50 focus:outline">
              <option value="" defaultChecked>
                All
              </option>
              <option value="Financial">Financial</option>
              <option value="Technology">Technology</option>
              <option value="Health">Health</option>
            </select>
          </label>

          <label className="flex flex-col gap-2">
            <span className="font-bold">Status</span>
            <select className="w-full rounded-md bg-black/10 px-4 py-2 text-black outline-black/50 focus:outline">
              <option value="" defaultChecked>
                All
              </option>
              <option value="Publish">Publish</option>
              <option value="Draft">Draft</option>
            </select>
          </label>

          <div className="flex gap-4">
            <button
              type="reset"
              className="me-auto rounded-full border border-black/10 px-4 py-2 font-bold text-black hover:bg-black/5"
            >
              Reset
            </button>
            <button
              type="button"
              onClick={() => setModalOpen(false)}
              className="rounded-full border border-black/10 px-4 py-2 font-bold text-black hover:bg-black/5"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-full bg-secondary px-4 py-2 font-bold text-white hover:bg-secondary/85"
            >
              Apply
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}
