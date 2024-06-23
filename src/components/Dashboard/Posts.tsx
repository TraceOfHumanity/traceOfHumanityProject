import {PostPreview} from "components/PostPreview";
import {useAppSelector} from "hooks/useReduxToolkit";

interface Post {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  views: number;
  categories: string[];
}

export const Posts = () => {
  const {requestsToCreateArticles} = useAppSelector((state) => state.dashboard);

  return (
    <div className="relative flex flex-auto flex-col gap-5 overflow-y-auto">
      {requestsToCreateArticles.map((post: Post) => (
        <PostPreview
          key={post.id}
          id={post.id}
          title={post.title}
          description={post.description}
          imageUrl={post.imageUrl}
          views={post.views}
          categories={post.categories}
        />
      ))}
    </div>
  );
};
