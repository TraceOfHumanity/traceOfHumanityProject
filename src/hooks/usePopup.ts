import {getRefCoordinates} from "utils/getRefCoordinates";

import {
  setCreateCategoryPopupCoordinates,
  setIsCreateCategoryPopup,
} from "../redux/slices/popups";
import {useAppDispatch} from "./useReduxToolkit";

export const usePopup = () => {
  const dispatch = useAppDispatch();

  const closePopup = (
    popupRef: React.RefObject<HTMLElement>,
    event: MouseEvent,
  ) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      return true;
    }
    return false;
  };

  const openCreateCategoryPopup = (ref: React.RefObject<HTMLElement>) => {
    dispatch(setIsCreateCategoryPopup(true));
    dispatch(setCreateCategoryPopupCoordinates(getRefCoordinates(ref)));
  };

  const closeCreateCategoryPopup = () => {
    dispatch(setIsCreateCategoryPopup(false));
  };

  return {closePopup, openCreateCategoryPopup, closeCreateCategoryPopup};
};
