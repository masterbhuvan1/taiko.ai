import { useState } from "react";
import { SwitchTabs } from "../../components/switchTabs/SwitchTabs";
import { useSelector } from "react-redux";

import { RootState } from "../../store/store";
import { ShowContacts } from "./ShowContacts";
import AddContact from "./AddContact";

export const Contact = () => {
  const [endpoint, setEndpoint] = useState("Contacts");
  const onTabChange = (tab: string) => {
    setEndpoint(tab === "Contacts" ? "Contacts" : "Add Contact");
  };

  const people = useSelector((state: RootState) => state.contact.people);

  return (
    <div className="top-0">
      <div className="content relative mb-7 bg-black items-center">
        <div className="true items-center mt-36 ml-28 max-md:ml-0 max-md:mt-20 flex justify-between mb-2 mx-auto">
          <SwitchTabs
            data={["Contacts", "Add Contact"]}
            onTabChange={onTabChange}
          />
        </div>

        {endpoint === "Add Contact" ? (
          <AddContact />
        ) : (
          <ShowContacts people={people} />
        )}
      </div>
    </div>
  );
};
