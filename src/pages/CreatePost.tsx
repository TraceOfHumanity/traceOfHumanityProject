import React, {useEffect, useMemo, useState} from "react";
import {MdCloudUpload} from "react-icons/md";
import {useNavigate} from "react-router-dom";
import SimpleMdeReact from "react-simplemde-editor";

import {PageWrapper} from "components/PageWrapper";
import "easymde/dist/easymde.min.css";
import {useArticleActions} from "hooks/articleActions";
import {useFirebase} from "hooks/useFirebase";
import {useAppDispatch, useAppSelector} from "hooks/useReduxToolkit";
import {Dropdown} from "ui-elements/Dropdown";
import {SimpleLoader} from "ui-elements/SimpleLoader";
import {TextInput} from "ui-elements/TextInput";
import {cn} from "utils/cn";

import {
  setCategories,
  setDescription,
  setImageUrl,
  setTitle,
} from "../redux/slices/createPost";
import {setLastPost} from "../redux/slices/library";

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

interface Category {
  name: string;
}
export const CreatePost = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {createPost, getAllCategories} = useFirebase();
  const {isLoading} = useAppSelector((state) => state.loader);
  const {title, description, imageUrl, categories} = useAppSelector(
    (state) => state.createPost,
  );
  const allCategories: Category[] = useAppSelector(
    (state) => state.dashboard.allCategories,
  );

  useEffect(() => {
    getAllCategories()
      .then(() => console.log("Categories are loaded successfully"))
      .catch((error) => console.error(error));
  }, []);

  const {addImage, deleteImage} = useArticleActions();

  const handleSubmit = (
    e: React.FormEvent,
    title: string,
    description: string,
    imageUrl?: string,
    category?: Array<string>,
  ) => {
    e.preventDefault();

    const newArticle = {
      title,
      description,
      imageUrl: imageUrl || "",
      createdAt: new Date(),
      category,
      likes: 0,
      views: 0,
    };

    createPost(
      newArticle.title,
      newArticle.description,
      newArticle.imageUrl,
      newArticle.createdAt,
      newArticle.category,
    );

    dispatch(setTitle(""));
    dispatch(setDescription(""));
    dispatch(setImageUrl(""));
    dispatch(setCategories([]));

    dispatch(setLastPost(null));

    navigate("/library");
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
      <form
        action=""
        onSubmit={(e) =>
          handleSubmit(e, title, description, imageUrl, categories)
        }
        className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 "
      >
        <div className="col-span-full">
          <TextInput
            value={title}
            onChange={(e) => dispatch(setTitle(e.target.value))}
            placeholder="Title"
          />
        </div>
        <div className="md:col-span-2">
          <SimpleMdeReact
            value={description}
            onChange={(e) => dispatch(setDescription(e))}
            options={options}
            placeholder="Post text here..."
          />
        </div>
        <div className="relative flex aspect-video items-center justify-center overflow-hidden rounded-md border border-dotted sm:aspect-auto sm:h-full">
          {isLoading ? (
            <SimpleLoader />
          ) : (
            <div className="flex h-full w-full flex-col">
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
          list={allCategories.map((category) => category.name)}
          selectedItem="dr"
          dispatchFunction={(item) =>
            !categories.includes(item) &&
            categories.length < 3 &&
            dispatch(setCategories([...categories, item]))
          }
          placeholder="Select a category"
          className="max-w-full"
          type="multiSelect"
        />
        {/* <Dropdown
          list={allCategories.map((category) => category.name)}
          selectedItem='dr'
          dispatchFunction={(item) => dispatch(setCategories(item))}
          placeholder="Select a category"
          className="max-w-full"
        /> */}
        <button
          type="submit"
          disabled={isLoading || !title || !description}
          className={cn(
            "col-span-full",
            // isLoading ? "bg-gray-400" : "bg-blue-500",
            !title || !description ? "cursor-not-allowed" : "cursor-pointer",
          )}
        >
          Submit
        </button>
      </form>
    </PageWrapper>
  );
};
