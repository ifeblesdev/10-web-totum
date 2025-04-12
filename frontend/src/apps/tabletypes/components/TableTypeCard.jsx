import { useNavigate } from "react-router-dom";

export default function TableTypeCard({ tabletype }) {
  const navigate = useNavigate();

  return (
    <div className="border p-4 rounded-xl shadow text-center cursor-pointer hover:bg-gray-200">
      <p
        onClick={() => {
          navigate(`/tabletypes/edit/${tabletype.id}`);
        }}
        key={tabletype.id}
      >
        {tabletype.description}
      </p>
    </div>
  );
}
