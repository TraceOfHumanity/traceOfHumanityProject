import React, {useEffect} from "react";

import {Menu} from "components/Dashboard/Menu";
import {Posts} from "components/Dashboard/Posts";
import {PageWrapper} from "components/PageWrapper";
import { useFirebase } from "hooks/useFirebase";

export const Dashboard = () => {
  const {getRequestsForArticles} = useFirebase();

  useEffect(() => {
    getRequestsForArticles()
      .then(() => console.log("Requests for articles are loaded successfully"))
      .catch((error) => console.error(error));
  }, []);
  
  return (
    <PageWrapper>
      <h2>Dashboard</h2>
      <div className="flex flex-auto gap-2 overflow-hidden">
        <Menu />
        {/* <CreateCategory /> */}
        <Posts />
      </div>
    </PageWrapper>
  );
};
