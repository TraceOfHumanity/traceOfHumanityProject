import React, {useEffect} from "react";

import {Form} from "components/CreatePost/Form";
import {PageWrapper} from "components/PageWrapper";
import "easymde/dist/easymde.min.css";
import {useFirebase} from "hooks/useFirebase";

export const CreatePost = () => {
  const {getAllCategories} = useFirebase();

  useEffect(() => {
    getAllCategories()
      .then(() => console.log("Categories are loaded successfully"))
      .catch((error) => console.error(error));
  }, []);

  return (
    <PageWrapper className="overflow-y-auto">
      <h1>Create Post</h1>
      <Form />
    </PageWrapper>
  );
};
