import { useNavigate } from "react-router-dom";

export default function SystemUserCard({ systemuser }) {
  const navigate = useNavigate();

  return (
    <div className="border p-4 rounded-xl shadow text-center cursor-pointer hover:bg-gray-200">
      <p
        onClick={() => {
          navigate(`/systemusers/edit/${systemuser.id}`);
        }}
        key={systemuser.id}
      >
        {systemuser.name}
      </p>
    </div>
  );
}
