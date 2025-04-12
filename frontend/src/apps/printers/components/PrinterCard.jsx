import { useNavigate } from "react-router-dom";

export default function PrinterCard({ printer }) {
  const navigate = useNavigate();

  return (
    <div className="border p-4 rounded-xl shadow text-center cursor-pointer hover:bg-gray-200">
      <p
        onClick={() => {
          navigate(`/printers/edit/${printer.id}`);
        }}
        key={printer.id}
      >
        {printer.description}
      </p>
    </div>
  );
}
