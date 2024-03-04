import React from "react";

import LogoutButton from "../_components/LogoutButton";

const layout = ({ children }: any) => {
  

  
  return (
    <div>
      <div className="bg-green-300 p-5 flex justify-between">Dashboard header <LogoutButton/> </div>

      {children}
    </div>
  );
};

export default layout;
