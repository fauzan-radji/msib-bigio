import { Button, Card, Input, Table, Td } from "../components";
import { FaPlus, FaSave, FaTimes } from "react-icons/fa";

export default function New() {
  return (
    <>
      <h1 className="text-2xl font-bold">Add Story</h1>

      <form>
        <Card className="flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <Input label="Title" />
            <Input label="Writer Name" />
            <Input className="col-span-full" label="Synopsis" type="textarea" />
            <Input label="Category" type="select" placeholder="Select Category">
              <option value="financial">Financial</option>
              <option value="technology">Technology</option>
              <option value="health">Health</option>
            </Input>
            {/* TODO: change type to badge input */}
            <Input label="Tags/Keywords Story" />
            {/* TODO: change type to file input */}
            <Input label="Cover Image" />
            <Input label="Status" type="select">
              <option value="publish">Publish</option>
              <option value="draft">Draft</option>
            </Input>
          </div>

          <Button className="self-end">
            <FaPlus />
            Add Chapter
          </Button>

          <Table headers={["Title", "Last Updated", ""]}>
            <tr className="border-b border-black/10 hover:bg-black/5">
              <Td>The Moon that Can't be Seen</Td>
              <Td>18 January 2024</Td>
              <td>
                <button className="ms-auto flex gap-0.5 px-2 py-4">
                  <span className="inline-block aspect-square w-1 rounded-full bg-black"></span>
                  <span className="inline-block aspect-square w-1 rounded-full bg-black"></span>
                  <span className="inline-block aspect-square w-1 rounded-full bg-black"></span>
                </button>
              </td>
            </tr>
          </Table>
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
