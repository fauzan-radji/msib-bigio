import { Button, Card, Input } from "../components";
import { FaArrowLeft, FaSave, FaTimes } from "react-icons/fa";

import { Link } from "react-router-dom";

export default function Chapter() {
  return (
    <>
      <h1 className="text-2xl font-bold">Add Chapter</h1>
      <Link
        to="/stories/new"
        className="inline-flex items-center justify-center gap-1 rounded-full bg-black/20 px-2 py-1 text-xs"
      >
        <FaArrowLeft className="text-[0.7rem]" />
        Back
      </Link>

      <form>
        <Card className="flex flex-col gap-4">
          <Input label="Title" />
          <Input label="Story" type="rich" />
        </Card>

        <div className="mt-4 flex justify-end gap-4">
          <Button variant="outline">
            <FaTimes />
            Cancel
          </Button>
          <Button>
            <FaSave />
            Save
          </Button>
        </div>
      </form>
    </>
  );
}
