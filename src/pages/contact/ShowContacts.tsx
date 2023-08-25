import React from "react";
import Card from "../../components/card/Card";

interface Person {
  id: number;
  name: string;
  lastname: string;
  status: string;
}

interface ShowContactsProps {
  people: Person[];
}

export const ShowContacts: React.FC<ShowContactsProps> = ({ people }) => {
  return (
    <div className="flex  overflow-x-auto space-x-4 max-w-screen-xl px-2 mx-auto items-center h-96">
      {people.length === 0 ? (
        <div className="text-white text-center">No contacts available.</div>
      ) : (
        people.map((person) => (
          <Card
            key={person.id}
            name={person.name}
            lastname={person.lastname}
            id={person.id}
            status={person.status}
          />
        ))
      )}
    </div>
  );
};
