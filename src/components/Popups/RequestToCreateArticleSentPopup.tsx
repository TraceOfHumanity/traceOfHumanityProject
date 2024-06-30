import React, {useEffect} from "react";

import {useAppDispatch} from "hooks/useReduxToolkit";
import {PopupWrapper} from "ui-elements/PopupWrapper";

import {setIsRequestToCreateArticleSentPopup} from "../../redux/slices/popups";

export const RequestToCreateArticleSentPopup = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsRequestToCreateArticleSentPopup(false));
    }, 3000);
  }, []);

  return (
    <PopupWrapper className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
      <p className="text-center">
      The request to create an article has been sent, thank you for your
      cooperation!
      </p>
    </PopupWrapper>
  );
};
