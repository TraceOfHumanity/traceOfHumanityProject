import React, {useState} from "react";
import {MdCloudUpload} from "react-icons/md";

import {PageWrapper} from "components/PageWrapper";
import {useArticleActions} from "hooks/articleActions";
import {useFirebase} from "hooks/firebaseFunctions";
import {useAppDispatch, useAppSelector} from "hooks/useReduxToolkit";
import {SimpleLoader} from "ui-elements/SimpleLoader";

import {
  setDescription,
  setImageUrl,
  setTitle,
} from "../redux/slices/createPost";

export const CreatePost = () => {
  const dispatch = useAppDispatch();
  const {addArticle} = useFirebase();
  const {isLoading} = useAppSelector((state) => state.loader);
  const {title, description, imageUrl} = useAppSelector(
    (state) => state.createPost,
  );

  const {addImage, deleteImage} = useArticleActions();

  const handleSubmit = (
    e: React.FormEvent,
    title: string,
    description: string,
    imageUrl: string,
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

    dispatch(setTitle(""));
    dispatch(setDescription(""));
    dispatch(setImageUrl(""));
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
            onChange={(e) => dispatch(setTitle(e.target.value))}
          />
        </div>
        <div className="">
          <p>description</p>
          <input
            type="text"
            value={description}
            onChange={(e) => dispatch(setDescription(e.target.value))}
          />
        </div>
        <div className="flex items-center justify-center rounded-md border border-dotted">
          {/* <p>imageUrl</p>
          <label htmlFor="image">
            <MdCloudUpload />
          </label>
          <input
          className="hidden"
            id="image"
            type="file"
            alt="image"
            onChange={(e) => addImage(e, setImageUrl)}
            accept="image/*"
          />
        <input type="submit" value="Submit Post" /> */}
          {isLoading ? (
            <SimpleLoader />
          ) : (
            <>
              {!imageUrl ? (
                <>
                  <label htmlFor="image">
                    <MdCloudUpload />
                  </label>
                  <input
                    className="hidden"
                    id="image"
                    type="file"
                    alt="image"
                    onChange={(e) => addImage(e)}
                    accept="image/*"
                  />
                </>
              ) : (
                <>
                  <img src={imageUrl} alt="image" />
                  <button onClick={() => deleteImage(imageUrl as string)}>
                    Remove Image
                  </button>
                </>
              )}
            </>
          )}
        </div>
      </form>
    </PageWrapper>
  );
};
