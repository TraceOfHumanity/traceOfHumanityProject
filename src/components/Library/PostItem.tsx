import React, {FC, useState} from "react";
import {FaEye} from "react-icons/fa";
import Markdown from "react-markdown";
import {Link} from "react-router-dom";

import {SimpleLoader} from "ui-elements/SimpleLoader";

interface PostItemProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  views: number;
  categories: string[];
}

export const PostItem: FC<PostItemProps> = ({
  id,
  title,
  description,
  imageUrl,
  views,
  categories,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <Link
      to={id}
      className="grid gap-2 border-b border-opacityBlue pb-5 last:border-none sm:grid-cols-2"
    >
      <h2 className="col-span-2">{title}</h2>
      {imageUrl ? (
        <div className="relative">
          {isLoading && (
            <div className="absolute left-0 top-0 flex max-h-full w-full items-center justify-center">
              <SimpleLoader />
            </div>
          )}
          <img
            className="h-full max-h-80 w-full object-cover sm:col-span-1"
            src={imageUrl}
            alt={title}
            onLoad={handleImageLoad}
          />
        </div>
      ) : (
        <div className="p-10">
          <img
            className="h-full max-h-64 w-full object-contain  sm:col-span-1"
            src="/logo.svg"
            alt=""
          />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <div className="max-h-80 overflow-hidden">
          <Markdown>{description}</Markdown>
        </div>
        <div className="mt-auto flex justify-between gap-2">
          {/* <span className="mr-2">{likes} Likes</span> */}
          <span className="flex items-center gap-1">
            <FaEye />
            {views}
          </span>
          <div className="flex flex-wrap justify-end">
            {categories.map((category) => (
              <span key={category} className="ml-2">
                {category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};
