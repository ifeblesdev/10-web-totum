import { useNavigate } from "react-router-dom";

export default function UserGroupCard({ usergroup }) {
  const navigate = useNavigate();

  return (
    <div className="border p-4 rounded-xl shadow text-center cursor-pointer hover:bg-gray-200">
      <p
        onClick={() => {
          navigate(`/usergroups/edit/${usergroup.id}`);
        }}
        key={usergroup.id}
      >
        {usergroup.description}
      </p>
    </div>
  );
}
