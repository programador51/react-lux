import React, { useState } from "react";
import { Select } from "../../atoms/select";

export const DemoSelect = () => {
  const [options, setOptions] = useState([
    {
      label: "Cactus",
      value: "vegetable",
      id: 1,
    },
    {
      label: "Garbanzo",
      value: "vegetable",
      id: 2,
    },
    {
      label: "Onion",
      value: "vegetable",
      id: 3,
    },
    {
      label: "Apple",
      value: "fruit",
      id: 4,
    },
  ]);

  const [selected, setSelected] = useState<any>({});

  const handleSelected = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSelected(
      options.find((item) => item.id === +e.target.value) || undefined
    );

  return (
    <div>
      <p>You have selected</p>
      <pre>
        <code>{JSON.stringify(selected, null, 2)}</code>
      </pre>

      <hr></hr>

      <Select onChange={handleSelected}>
        <>
          <option disabled selected>
            -- SELECT AN OPTION --
          </option>
          {options.map((item) => (
            <option key={window.crypto.randomUUID()} value={item.id}>
              {item.label}
            </option>
          ))}
        </>
      </Select>
    </div>
  );
};
