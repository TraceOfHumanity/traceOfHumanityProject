import React, {useMemo, useState} from "react";
import {MdCloudUpload} from "react-icons/md";
import SimpleMdeReact from "react-simplemde-editor";

import {PageWrapper} from "components/PageWrapper";
import "easymde/dist/easymde.min.css";
import {useArticleActions} from "hooks/articleActions";
import {useFirebase} from "hooks/useFirebase";
import {useAppDispatch, useAppSelector} from "hooks/useReduxToolkit";
import {Dropdown} from "ui-elements/Dropdown";
import {SimpleLoader} from "ui-elements/SimpleLoader";
import {cn} from "utils/cn";

import {
  setDescription,
  setImageUrl,
  setTitle,
} from "../redux/slices/createPost";

type ToolbarButton =
  | "bold"
  | "italic"
  | "heading"
  | "quote"
  | "unordered-list"
  | "ordered-list"
  | "link"
  | "image"
  | "guide"
  | "fullscreen"
  | "side-by-side"
  | "preview";

export const CreatePost = () => {
  const dispatch = useAppDispatch();
  const {createPost} = useFirebase();
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

    createPost(
      newArticle.title,
      newArticle.description,
      newArticle.imageUrl,
      newArticle.createdAt,
    );

    dispatch(setTitle(""));
    dispatch(setDescription(""));
    dispatch(setImageUrl(""));
  };

  const options = useMemo(
    () => ({
      spellChecker: false,
      hideIcons: [
        "guide",
        "fullscreen",
        "side-by-side",
        "preview",
        "quote",
      ] as ToolbarButton[],
    }),
    [],
  );

  return (
    <PageWrapper>
      <h1>Create Post</h1>
      {/* <Dropdown
        list={["one", "two", "three", "four", "five", "six"]}
        selectedItem="one"
      />*/}

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
          <SimpleMdeReact
            value={description}
            onChange={(e) => dispatch(setDescription(e))}
            options={options}
            placeholder="Post text here..."
          />
        </div>
        <div className=" relative flex aspect-video items-center justify-center overflow-hidden rounded-md border border-dotted">
          {isLoading ? (
            <SimpleLoader />
          ) : (
            <div className="flex flex-col w-full h-full">
              {!imageUrl ? (
                <>
                  <label
                    className="absolute inset-0 flex flex-col items-center justify-center"
                    htmlFor="image"
                  >
                    <p>Upload Image</p>
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
                  <img
                    className="h-full w-full object-contain"
                    src={imageUrl}
                    alt=""
                  />
                  <button onClick={() => deleteImage(imageUrl as string)}>
                    Remove Image
                  </button>
                </>
              )}
            </div>
          )}
        </div>
        <Dropdown 
          list={["one", "two", "three", "four", "five", "six"]} 
          selectedItem="one"
        />
        <button
          type="submit"
          disabled={isLoading || !title || !description}
          className={cn(
            "",
            isLoading ? "bg-gray-400" : "bg-blue-500",
            !title || !description ? "cursor-not-allowed" : "cursor-pointer",
          )}
        >
          Submit
        </button>
      </form>
    </PageWrapper>
  );
};
