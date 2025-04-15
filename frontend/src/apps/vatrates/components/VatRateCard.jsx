import { useNavigate } from "react-router-dom";

export default function VatRateCard({ vatrate }) {
  const navigate = useNavigate();

  return (
    <div className="border p-4 rounded-xl shadow text-center cursor-pointer hover:bg-gray-200">
      <p
        onClick={() => {
          navigate(`/vatrates/edit/${vatrate.id}`);
        }}
        key={vatrate.id}
      >
        {vatrate.description}
      </p>
    </div>
  );
}
