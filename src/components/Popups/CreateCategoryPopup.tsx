import React, {useEffect} from "react";
import {FaCloudUploadAlt} from "react-icons/fa";

import {useFirebase} from "hooks/useFirebase";
import {usePopup} from "hooks/usePopup";
import {useAppDispatch, useAppSelector} from "hooks/useReduxToolkit";
import {PopupWrapper} from "ui-elements/PopupWrapper";
import {TextInput} from "ui-elements/TextInput";

import {setCreatingCategoryValue} from "../../redux/slices/dashboard";

interface Coordinators {
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

export const CreateCategory = () => {
  const dispatch = useAppDispatch();
  const {closePopup, closeCreateCategoryPopup} = usePopup();
  const {createCategory} = useFirebase();
  const {creatingCategoryValue} = useAppSelector((state) => state.dashboard);
  const {createCategoryPopupCoordinates} = useAppSelector(
    (state: {popups: {createCategoryPopupCoordinates: Coordinators}}) => {
      return state.popups;
    },
  );
  const createCategoryPopupRef = React.createRef<HTMLDivElement>();

  const handleSubmit = (category: string) => {
    if (category) {
      createCategory(category);
      dispatch(setCreatingCategoryValue(""));
      closeCreateCategoryPopup();
    }
  };

  const clickOutside = (event: MouseEvent) => {
    if (closePopup(createCategoryPopupRef, event)) {
      closeCreateCategoryPopup();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, []);

  return (
    <div
      className="fixed flex items-center gap-2"
      style={{
        top: `${createCategoryPopupCoordinates.y}px`,
        left: `${createCategoryPopupCoordinates.x}px`,
      }}
      ref={createCategoryPopupRef}
    >
      <PopupWrapper className="flex-row">
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
      </PopupWrapper>
    </div>
  );
};
