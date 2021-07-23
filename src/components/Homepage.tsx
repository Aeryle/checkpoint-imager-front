import React, { useState, Fragment, useRef } from "react";
import { useQuery } from "react-query";

import { posts } from "../requests";
import { useInView } from "../hooks/utils/scroll";

import Infos from "./Post/Infos";
import Image from "./Post/Image";

export default function Homepage(): JSX.Element {
  const [page, setPage] = useState<number>(0);
  const [loadedPosts, setLoadedPosts] = useState<IPost[]>([]);
  const [shouldRefetch, setShouldRefetch] = useState<boolean>(true);

  const loadMoreRef = useRef<HTMLDivElement>(null);

  useInView(loadMoreRef, (_inView) => {
    if (_inView) {
      setPage((prevState) => prevState + 1);
    }
  });

  const { isLoading, error } = useQuery<IPost[]>(
    ["posts", page],
    () => posts.getAll(page),
    {
      onSuccess: (data) => {
        setShouldRefetch(data.length > 0);

        setLoadedPosts((prevState) => [...prevState, ...data]);
      },
    }
  );

  console.log(loadedPosts);

  if (error) {
    return <p>Error</p>;
  }

  return (
    <Fragment>
      <div className="flex flex-col items-center justify-center">
        {loadedPosts.map((post, index) => (
          <div key={post.id} className="">
            <Image first={index === 0} source={post.url} name={post.name} />
            <Infos
              favoritedBy={post.favoritedBy as unknown as IPost["favoritedBy"]}
              tags={post.tags as unknown as IPost["tags"]}
            />
          </div>
        ))}
        {isLoading && <p>Loading...</p>}
      </div>

      {!isLoading && shouldRefetch && (
        <div ref={loadMoreRef} className="h-0">
          Load more
        </div>
      )}
    </Fragment>
  );
}
