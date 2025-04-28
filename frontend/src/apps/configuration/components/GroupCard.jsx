import { useNavigate } from "react-router-dom";

export default function GroupCard({ group }) {
  const navigate = useNavigate();

  return (
    <div className="border p-4 rounded-xl shadow text-center cursor-pointer hover:bg-gray-200">
      <p
        onClick={() => {
          navigate(`/groups/edit/${group.id}`);
        }}
        key={group.id}
      >
        {group.description}
      </p>
    </div>
  );
}
