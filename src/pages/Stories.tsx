import {
  Button,
  Card,
  Input,
  Modal,
  Pagination,
  Pill,
  Table,
  Td,
} from "../components";
import { FaFilter, FaPlus, FaSearch } from "react-icons/fa";
import { useMemo, useState } from "react";

import { Link } from "react-router-dom";

const stories = [
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

export default function Stories() {
  const [query, setQuery] = useState("");
  const [modalOpen, setModalOpen] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;
  const [start, end] = useMemo(() => {
    const start = (currentPage - 1) * perPage;
    const end = start + perPage;
    return [start, end];
  }, [currentPage, perPage]);

  const filteredData = useMemo(
    () =>
      stories.filter(
        (story) =>
          story.title.toLowerCase().includes(query.toLowerCase()) ||
          story.writer.toLowerCase().includes(query.toLowerCase()),
      ),
    [query],
  );
  const dataToShow = useMemo(
    () => filteredData.slice(start, end),
    [filteredData, start, end],
  );

  function handleFilterSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setModalOpen(false);
  }

  return (
    <>
      <h1 className="text-2xl font-bold">Stories</h1>

      <Card>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
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

              <Button
                variant="outline"
                onClick={() => setModalOpen(true)}
                className="aspect-square w-10 p-0 text-sm"
              >
                <FaFilter />
              </Button>
            </div>

            <Button as={Link} to="/stories/new">
              <FaPlus />
              Add Story
            </Button>
          </div>

          <div className="w-full overflow-auto">
            <Table
              headers={[
                "#",
                "Title",
                "Writer",
                "Category",
                "Keyword",
                "Status",
                "",
              ]}
            >
              {dataToShow.map((story, i) => (
                <tr
                  key={story.id}
                  className="border-b border-black/10 hover:bg-black/5"
                >
                  <Td>{i + start + 1}</Td>
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
            </Table>
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
      </Card>

      <Modal
        isOpen={modalOpen}
        close={() => setModalOpen(false)}
        className="flex flex-col gap-4"
      >
        <h5 className="text-xl font-bold">Filter</h5>

        <form onSubmit={handleFilterSubmit} className="flex flex-col gap-4">
          <Input type="select" label="Category" placeholder="All">
            <option value="Financial">Financial</option>
            <option value="Technology">Technology</option>
            <option value="Health">Health</option>
          </Input>

          <Input type="select" label="Status" placeholder="All">
            <option value="publish">Publish</option>
            <option value="draft">Draft</option>
          </Input>

          <div className="flex gap-4">
            <Button type="reset" variant="outline" className="me-auto">
              Reset
            </Button>
            <Button
              type="button"
              variant="outline"
              onClick={() => setModalOpen(false)}
            >
              Cancel
            </Button>
            <Button type="submit">Apply</Button>
          </div>
        </form>
      </Modal>
    </>
  );
}
