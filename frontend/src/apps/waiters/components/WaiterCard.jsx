import { useNavigate } from "react-router-dom";

export default function WaiterCard({ waiter }) {
  const navigate = useNavigate();

  return (
    <div className="border p-4 rounded-xl shadow text-center cursor-pointer hover:bg-gray-200">
      <p
        onClick={() => {
          navigate(`/waiters/edit/${waiter.id}`);
        }}
        key={waiter.id}
      >
        {waiter.description}
      </p>
    </div>
  );
}
