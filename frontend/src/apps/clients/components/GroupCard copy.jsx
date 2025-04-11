import { useNavigate } from "react-router-dom";

export default function clientCard({ client }) {
  const navigate = useNavigate();

  return (
    <div className="border p-4 rounded-xl shadow text-center cursor-pointer hover:bg-gray-200">
      <p
        onClick={() => {
          navigate(`/clients/${client.id}`);
        }}
        key={client.id}
      >
        {client.description}
      </p>
    </div>
  );
}
