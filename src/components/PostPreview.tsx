import React, {FC, useState} from "react";
import {FaEye} from "react-icons/fa";
import Markdown from "react-markdown";
import {Link} from "react-router-dom";

import {useAppSelector} from "hooks/useReduxToolkit";
import {SimpleLoader} from "ui-elements/SimpleLoader";
import { PostActions } from "./PostActions";

interface IPostPreviewProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  views: number;
  categories: string[];
}

export const PostPreview: FC<IPostPreviewProps> = ({
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
    <div className="flex grid-cols-1 flex-col gap-2 rounded-xl border border-b border-borderColor p-1 pb-5 backdrop-blur-[6px] sm:grid sm:grid-cols-3 md:p-2">
      <h2 className="col-span-3">{title}</h2>
      <div className="w-full ">
        {imageUrl ? (
          <div className="relative h-auto w-full">
            {isLoading && (
              <div className="absolute left-0 top-0 flex max-h-full w-full items-center justify-center">
                <SimpleLoader />
              </div>
            )}
            <img
              className="h-full max-h-96 w-full object-cover sm:col-span-1"
              src={imageUrl}
              alt={title}
              onLoad={handleImageLoad}
            />
          </div>
        ) : (
          <div className="p-10">
            <img
              className="h-auto max-h-64 w-full object-contain  sm:col-span-1"
              src="/logo.svg"
              alt=""
            />
          </div>
        )}
      </div>
      <div className="flex flex-col sm:col-start-2 sm:col-end-4 [&>*:nth-child(n+4)]:hidden [&>*]:line-clamp-6">
        <Markdown>{description}</Markdown>
        <Link
          className="!block text-center underline sm:col-start-2 sm:col-end-4"
          to={id}
        >
          read more
        </Link>

        <div className="mt-auto !flex justify-between gap-2">
          {/* <span className="mr-2">{likes} Likes</span> */}
          <span className="flex items-center gap-1">
            <FaEye />
            {views}
          </span>
          <div className="flex flex-wrap justify-end">
            {categories.map((category) => (
              <span key={category} className="ml-2">
                #{category}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
