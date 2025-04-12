import { useNavigate } from "react-router-dom";

export default function EnvironmentCard({ environment }) {
  const navigate = useNavigate();

  return (
    <div className="border p-4 rounded-xl shadow text-center cursor-pointer hover:bg-gray-200">
      <p
        onClick={() => {
          navigate(`/environments/edit/${environment.id}`);
        }}
        key={environment.id}
      >
        {environment.description}
      </p>
    </div>
  );
}
