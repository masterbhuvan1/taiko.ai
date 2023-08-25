import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPerson } from "../../store/contactSlice";
import { RootState } from "../../store/store";

interface Person {
  id: number;
  name: string;
  lastname: string;
  status: string;
}

const AddContact = () => {
  const dispatch = useDispatch();
  const people = useSelector((state: RootState) => state.contact.people);
  const [person, setPerson] = useState<Person>({
    id: 0,
    name: "",
    lastname: "",
    status: "Active",
  });
  const [validationError, setValidationError] = useState<string | null>(null);

  useEffect(() => {
    console.log("Updated people:", people);
  }, [people]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setPerson((prevPerson) => ({
      ...prevPerson,
      [name]: value,
    }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const maxId = Math.max(...people.map((person) => person.id), 0);

    // Calculate the next ID by adding 1 to the maximum ID
    const nextId = maxId + 1;
    if (!person.name || !person.lastname || !person.status) {
      setValidationError("All fields are required");
      return;
    }

    if (people.some((p) => p.id === person.id)) {
      setValidationError("ID must be unique");
      return;
    }

    dispatch(addPerson(person));
    console.log(people);

    setPerson({
      id: nextId, // Increment ID for the next entry
      name: "",
      lastname: "",
      status: "Active",
    });

    setValidationError(null);
  };

  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <form
        className="bg-white p-6 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label htmlFor="id" className="block text-gray-700">
            ID:
          </label>
          <input
            type="number"
            id="id"
            name="id"
            value={person.id}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md"
          />
          {validationError && <p className="text-red-500">{validationError}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={person.name}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastname" className="block text-gray-700">
            Lastname:
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={person.lastname}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="status" className="block text-gray-700">
            Status:
          </label>
          <select
            id="status"
            name="status"
            value={person.status}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddContact;
