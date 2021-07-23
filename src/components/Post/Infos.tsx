import React from "react";
import { HeartIcon } from "@heroicons/react/solid";

interface IProps {
  favoritedBy: IPost["favoritedBy"];
  tags: IPost["tags"];
}

function Infos({ favoritedBy, tags }: IProps): JSX.Element {
  return (
    <div className="items-center justify-between mt-2">
      <p className="flex items-center">
        <span className="mr-3">
          <HeartIcon className="h-10 text-red-500 cursor-pointer transform hover:scale-125 transition-transform duration-150 ease-linear" />
        </span>
        Aimé par {favoritedBy?.length ?? 0} personne
        {favoritedBy?.length ? "s" : ""}
      </p>

      <p>
        Tags:{" "}
        {tags?.map((tag) => (
          <span key={tag.id} className="cursor-pointer">
            #{tag.name}
          </span>
        ))}
      </p>
    </div>
  );
}

export default Infos;
