import React, { useState } from "react";
import { Switch } from "../../atoms/switch";

export const DemoSwitch = () => {
  const [isAgree, setIsAgree] = useState(false);

  return (
    <div>
      <p>Do you agree share your personal information with the enterprise ?</p>

      <div
        style={{
          display: "inline-flex",
        }}
      >
        <Switch
          checked={isAgree}
          onChange={(e) => setIsAgree(e.target.checked)}
        />
        <span
          style={{
            margin: "0 10px 0 10px",
          }}
        >
          {isAgree ? "- Yes" : "- No"}
        </span>
      </div>
    </div>
  );
};
