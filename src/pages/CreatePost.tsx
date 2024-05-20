import React from "react";

import {PageWrapper} from "components/PageWrapper";
import {useFirebase} from "hooks/firebaseFunctions";

export const CreatePost = () => {
  const {addArticle} = useFirebase();

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [imageUrl, setImageUrl] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newArticle = {
      title,
      description,
      imageUrl,
    };

    addArticle(newArticle.title, newArticle.description, newArticle.imageUrl);
  };

  return (
    <PageWrapper>
      <form action="" onSubmit={handleSubmit}>
        <div className="">
          <p>title</p>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="">
          <p>description</p>
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="">
          <p>imageUrl</p>
          <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
        </div>
        <input type="submit" value="Submit Post" />
      </form>
    </PageWrapper>
  );
};
