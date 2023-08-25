import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editPerson, deletePerson } from "../../store/contactSlice";

interface CardProps {
  id: number;
  name: string;
  lastname: string;
  status: string;
}

const Card: React.FC<CardProps> = ({ id, name, lastname, status }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    name: name,
    lastname: lastname,
    status: status,
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    dispatch(editPerson({ id, ...editedData }));
    setIsEditing(false);
  };

  const handleDeleteClick = () => {
    if (window.confirm("Are you sure you want to delete this contact?")) {
      dispatch(deletePerson(id));
    }
  };

  return (
    <div className="bg-white p-6 mt-6 rounded-lg shadow-md">
      <div className="flex flex-col mb-4">
        {isEditing ? (
          <>
            <div className="mb-2">
              <label htmlFor={`name-${id}`}>New Name:</label>
              <input
                id={`name-${id}`}
                type="text"
                value={editedData.name}
                onChange={(e) =>
                  setEditedData((prevData) => ({
                    ...prevData,
                    name: e.target.value,
                  }))
                }
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-2">
              <label htmlFor={`lastname-${id}`}>New Lastname:</label>
              <input
                id={`lastname-${id}`}
                type="text"
                value={editedData.lastname}
                onChange={(e) =>
                  setEditedData((prevData) => ({
                    ...prevData,
                    lastname: e.target.value,
                  }))
                }
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>
            <div className="mb-2">
              <label htmlFor={`status-${id}`}>New Status:</label>
              <select
                id={`status-${id}`}
                value={editedData.status}
                onChange={(e) =>
                  setEditedData((prevData) => ({
                    ...prevData,
                    status: e.target.value,
                  }))
                }
                className="w-full px-4 py-2 border rounded-md"
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </>
        ) : (
          <>
            <h3 className="text-xl font-semibold">{name}</h3>
            <h3 className="text-xl font-semibold">{lastname}</h3>
            <p className="text-gray-600 mb-2">Status: {status}</p>
          </>
        )}
      </div>
      <div className="flex space-x-2">
        {isEditing ? (
          <>
            <button
              onClick={handleSaveEdit}
              className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600"
            >
              Save
            </button>
            <button
              onClick={handleCancelEdit}
              className="bg-gray-400 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-500"
            >
              Cancel
            </button>
          </>
        ) : (
          <>
            <button
              onClick={handleEditClick}
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
            >
              Edit
            </button>
            <button
              onClick={handleDeleteClick}
              className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
            >
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
