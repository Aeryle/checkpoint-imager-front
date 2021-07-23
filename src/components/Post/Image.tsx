import React, { ImgHTMLAttributes } from "react";

interface IProps extends ImgHTMLAttributes<unknown> {
  first: boolean;
  source: IPost["url"];
  name: IPost["name"];
}

export default function Image({
  first,
  source,
  name,
  ...props
}: IProps): JSX.Element {
  return (
    <img
      src={source}
      alt={name}
      loading="lazy"
      className={`max-w-full ${first ? "mt-2" : "mt-6"}`}
      {...props}
    />
  );
}
