import React, {FC} from "react";
import Markdown from "react-markdown";

interface PostItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

export const PostItem: FC<PostItemProps> = ({title, description, imageUrl}) => {
  return (
    <div className="grid gap-2 border-b sm:grid-cols-2">
      <img
        className="h-full w-full object-cover sm:col-span-1"
        src={imageUrl}
        alt={title}
      />
      <h2 className="sm:col-span-1 sm:col-start-2 ">{title}</h2>
      <Markdown>{description}</Markdown>
    </div>
  );
};
