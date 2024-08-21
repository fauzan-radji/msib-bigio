import Th from "./Th";

interface TableProps {
  headers: string[];
  children: React.ReactNode;
}

export default function Table({ headers, children }: TableProps) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="border-b border-black/10">
          {headers.map((header, i) => (
            <Th key={i}>{header}</Th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}
