import React, {FC, useState} from "react";
import Markdown from "react-markdown";
import { SimpleLoader } from "ui-elements/SimpleLoader";

interface PostItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const PostItem: FC<PostItemProps> = ({title, description, imageUrl}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="grid h-fit gap-2 border-b border-opacityBlue pb-2 last:border-none sm:grid-cols-2">
      {imageUrl ? (
        <div className="relative">
          {isLoading && (
            <div className="absolute left-0 top-0 h-full w-full flex justify-center items-center">
              <SimpleLoader />
            </div>
          )}
          <img
            className=" max-h-80 w-full object-cover  sm:col-span-1"
            src={imageUrl}
            alt={title}
            onLoad={handleImageLoad}
          />
        </div>
      ) : (
        <div className="p-10">
          <img
            className="max-h-80 w-full object-contain sm:col-span-1"
            src="/logo.svg"
            alt=""
          />
        </div>
      )}
      <div className="max-h-72">
        <h2 className="sm:col-span-1 sm:col-start-2 ">{title}</h2>
        <Markdown>{description}</Markdown>
      </div>
    </div>
  );
};
