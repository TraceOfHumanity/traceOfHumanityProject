import React from "react";

import {CreateCategory} from "components/Dashboard/CreateCategory";
import {PageWrapper} from "components/PageWrapper";


export const Dashboard = () => {
  
  return (
    <PageWrapper>
      <h2>Dashboard</h2>
      <CreateCategory />
    </PageWrapper>
  );
};
