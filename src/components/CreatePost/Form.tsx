import React, {useEffect, useMemo} from "react";
import {MdCloudUpload} from "react-icons/md";
import {useNavigate} from "react-router-dom";
import SimpleMdeReact from "react-simplemde-editor";

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
  setIsUpdatingPost,
  setTitle,
} from "../../redux/slices/createPost";
import {
  setHasMorePosts,
  setLastPost,
  setPosts,
  setSelectedPost,
} from "../../redux/slices/library";
import { setIsRequestToCreateArticleSentPopup } from "../../redux/slices/popups";

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

export const Form = () => {
  const dispatch = useAppDispatch();
  const {addImage, deleteImage} = useArticleActions();
  const {createPost, createArticleCreationRequest, updatePost} = useFirebase();
  const navigate = useNavigate();
  const {userId} = useAppSelector((state) => state.auth);
  const {title, description, imageUrl, categories} = useAppSelector(
    (state) => state.createPost,
  );
  const {isLoading} = useAppSelector((state) => state.loader);
  const allCategories: Category[] = useAppSelector(
    (state) => state.dashboard.allCategories,
  );
  const {isUpdatingPost} = useAppSelector((state) => state.createPost);
  const {selectedPost} = useAppSelector((state) => state.library);

  const handleSubmit = (
    e: React.FormEvent,
    title: string,
    description: string,
    imageUrl?: string,
    categories?: string[],
  ) => {
    e.preventDefault();

    const newArticle = {
      title,
      description,
      imageUrl: imageUrl || "",
      createdAt: new Date(),
      categories,
      views: 0,
    };

    const updateArticle = {
      title,
      description,
      imageUrl: imageUrl || "",
      categories,
    };

    if (title && description) {
      if (userId === process.env.REACT_APP_TRACE_OF_HUMANITY) {
        if (isUpdatingPost) {
          updatePost(selectedPost?.id as string, updateArticle)
            .then(() => {
              dispatch(setTitle(""));
              dispatch(setDescription(""));
              dispatch(setImageUrl(""));
              dispatch(setCategories([]));
              dispatch(setPosts([]));
              dispatch(setLastPost(null));
              dispatch(setHasMorePosts(true));
              dispatch(setSelectedPost(null));
              dispatch(setIsUpdatingPost(false));
              navigate("/library");
            })
            .catch((error) => console.error(error));
        } else {
          createPost(
            newArticle.title,
            newArticle.description,
            newArticle.imageUrl,
            newArticle.createdAt,
            newArticle.categories,
            newArticle.views,
          )
            .then(() => {
              dispatch(setTitle(""));
              dispatch(setDescription(""));
              dispatch(setImageUrl(""));
              dispatch(setCategories([]));
              dispatch(setPosts([]));
              dispatch(setLastPost(null));
              dispatch(setHasMorePosts(true));
              navigate("/library");
            })
            .catch((error) => console.error(error));
        }
      } else {
        createArticleCreationRequest(
          newArticle.title,
          newArticle.description,
          newArticle.imageUrl,
          newArticle.createdAt,
          newArticle.categories,
          newArticle.views,
        )
          .then(() => {
            dispatch(setTitle(""));
            dispatch(setDescription(""));
            dispatch(setImageUrl(""));
            dispatch(setCategories([]));
            dispatch(setPosts([]));
            dispatch(setLastPost(null));
            dispatch(setHasMorePosts(true));
            dispatch(setIsRequestToCreateArticleSentPopup(true));
            navigate("/library");
          })
          .catch((error) => console.error(error));
      }
    }
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

  const addCategory = (category: string) => {
    if (!categories.includes(category) && categories.length < 3) {
      dispatch(setCategories([...categories, category]));
    }
  };
  const removeCategory = (category: string) => {
    dispatch(setCategories(categories.filter((cat) => cat !== category)));
  };

  useEffect(() => {
    if (isUpdatingPost) {
      dispatch(setTitle(selectedPost?.title || ""));
      dispatch(setDescription(selectedPost?.description || ""));
      dispatch(setImageUrl(selectedPost?.imageUrl || ""));
      dispatch(setCategories(selectedPost?.categories || []));
    }
  }, []);

  return (
    <form
      action=""
      onSubmit={(e) =>
        handleSubmit(e, title, description, imageUrl, categories)
      }
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
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
      <div className="relative flex aspect-video h-fit min-h-40 items-center justify-center overflow-hidden rounded-md border border-dotted sm:aspect-auto">
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
        dispatchFunction={(item) => addCategory(item)}
        updateFunction={(item) => removeCategory(item)}
        placeholder="Select a categories"
        className="max-w-full"
        type="multiSelect"
        selectedItems={categories}
      />
      <button
        type="submit"
        disabled={isLoading || !title || !description}
        className={cn(
          "col-span-full",
          !title || !description ? "cursor-not-allowed" : "cursor-pointer",
        )}
      >
        Submit
      </button>
    </form>
  );
};
