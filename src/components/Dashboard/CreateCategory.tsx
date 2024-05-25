import React from "react";
import {FaCloudUploadAlt} from "react-icons/fa";

import {useFirebase} from "hooks/useFirebase";
import {useAppDispatch, useAppSelector} from "hooks/useReduxToolkit";
import {TextInput} from "ui-elements/TextInput";

import {setCreatingCategoryValue} from "../../redux/slices/dashboard";

export const CreateCategory = () => {
  const dispatch = useAppDispatch();
  const {createCategory} = useFirebase();
  const {creatingCategoryValue} = useAppSelector((state) => state.dashboard);

  const handleSubmit = (category: string) => {
    if (category) {
      createCategory(category);
      dispatch(setCreatingCategoryValue(""));
    }
  };

  return (
    <div className="flex items-center gap-2">
      <TextInput
        value={creatingCategoryValue}
        onChange={(e) => dispatch(setCreatingCategoryValue(e.target.value))}
        placeholder="Category name"
        required
      />
      <button
        className="btn btn-primary"
        onClick={() => handleSubmit(creatingCategoryValue)}
      >
        <FaCloudUploadAlt className="size-6" />
      </button>
    </div>
  );
};
