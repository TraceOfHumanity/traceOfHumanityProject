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
import {setHasMorePosts, setLastPost, setPosts} from "../redux/slices/library";
import { Form } from "components/CreatePost/Form";

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

  return (
    <PageWrapper className="overflow-y-auto">
      <h1>Create Post</h1>
      <Form />
    </PageWrapper>
  );
};
