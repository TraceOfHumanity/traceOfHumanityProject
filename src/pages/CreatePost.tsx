import React, {useState} from "react";
import {MdCloudUpload} from "react-icons/md";

import {PageWrapper} from "components/PageWrapper";
import {articleActions} from "hooks/articleActions";
import {useFirebase} from "hooks/firebaseFunctions";
import { SimpleLoader } from "ui-elements/SimpleLoader";

export const CreatePost = () => {
  const {addArticle} = useFirebase();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const {addImage} = articleActions();

  const handleSubmit = (
    e: React.FormEvent,
    title: string,
    description: string,
    imageUrl: string | null,
  ) => {
    e.preventDefault();

    const newArticle = {
      title,
      description,
      imageUrl,
      createdAt: new Date(),
    };

    addArticle(
      newArticle.title,
      newArticle.description,
      newArticle.imageUrl,
      newArticle.createdAt,
    );

    setTitle("");
    setDescription("");
    setImageUrl(null);
  };

  return (
    <PageWrapper>
      <form
        action=""
        onSubmit={(e) => handleSubmit(e, title, description, imageUrl)}
      >
        <div className="">
          <p>title</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="">
          <p>description</p>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="bg-red">
          <p>imageUrl</p>
          <label htmlFor="image">
            <MdCloudUpload />
          </label>
          <input
            id="image"
            type="file"
            alt="image"
            onChange={(e) => addImage(e, setImageUrl)}
            accept="image/*"
          />
        </div>
        <input type="submit" value="Submit Post" />
      </form>
      <SimpleLoader />
    </PageWrapper>
  );
};
