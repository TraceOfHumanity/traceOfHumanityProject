import React from "react";

import {useAppDispatch, useAppSelector} from "hooks/useReduxToolkit";
import {TextInput} from "ui-elements/TextInput";

import {setCreatingCategoryValue} from "../../redux/slices/dashboard";
import { FaCloudUploadAlt } from "react-icons/fa";

export const CreateCategory = () => {
  const dispatch = useAppDispatch();
  const {creatingCategoryValue} = useAppSelector((state) => state.dashboard);

  return (
    <div className="flex items-center gap-2">
      <TextInput
        value={creatingCategoryValue}
        onChange={(e) => dispatch(setCreatingCategoryValue(e.target.value))}
        placeholder="Category name"
        required
      />
      <button>
        <FaCloudUploadAlt className="size-6" />
      </button>
    </div>
  );
};
