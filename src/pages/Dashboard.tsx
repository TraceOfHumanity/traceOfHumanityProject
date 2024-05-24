import React from "react";

import {PageWrapper} from "components/PageWrapper";
import { CreateCategory } from "components/Dashboard/CreateCategory";

export const Dashboard = () => {
  return (
    <PageWrapper>
      <h2>Dashboard</h2>
      <CreateCategory />
    </PageWrapper>
  );
};
