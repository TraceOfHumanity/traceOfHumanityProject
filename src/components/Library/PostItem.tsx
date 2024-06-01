import React, {FC, useState} from "react";
import Markdown from "react-markdown";
import {Link} from "react-router-dom";

import {SimpleLoader} from "ui-elements/SimpleLoader";

interface PostItemProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  likes: number;
  views: number;
}

export const PostItem: FC<PostItemProps> = ({
  id,
  title,
  description,
  imageUrl,
  likes,
  views,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Link
      to={`/library/${id}`}
      className="grid h-fit gap-2 border-b border-opacityBlue pb-2 last:border-none sm:grid-cols-2"
    >
      {imageUrl ? (
        <div className="relative">
          {isLoading && (
            <div className="absolute left-0 top-0 flex max-h-full w-full items-center justify-center">
              <SimpleLoader />
            </div>
          )}
          <img
            className="w-full h-full object-cover max-h-80 sm:col-span-1"
            src={imageUrl}
            alt={title}
            onLoad={handleImageLoad}
          />
        </div>
      ) : (
        <div className="p-10">
          <img
            className="w-full h-full object-contain sm:col-span-1"
            src="/logo.svg"
            alt=""
          />
        </div>
      )}
      <div className=" flex flex-col">
        <h2 className="sm:col-span-1 sm:col-start-2 ">{title}</h2>
        <Markdown>{description}</Markdown>
        <div className="mt-auto flex">
          <span className="mr-2">{likes} Likes</span>
          <span>{views} Views</span>
        </div>
      </div>
    </Link>
  );
};
