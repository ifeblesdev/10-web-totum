import { useNavigate } from "react-router-dom";

export default function BoxCard({ box }) {
  const navigate = useNavigate();

  return (
    <div className="border p-4 rounded-xl shadow text-center cursor-pointer hover:bg-gray-200">
      <p
        onClick={() => {
          navigate(`/boxes/edit/${box.id}`);
        }}
        key={box.id}
      >
        {box.description}
      </p>
    </div>
  );
}
