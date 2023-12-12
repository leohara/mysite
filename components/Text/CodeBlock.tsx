import React, { DetailedHTMLProps, HTMLAttributes } from "react";

import TweetEmbed from "react-tweet-embed";
import YouTubeEmbed from "react-youtube";

export const CodeBlock = (
  props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
) => {
  const { children, className } = props;

  if (typeof children === "string") {
    const prefix = "language-";
    const classes = className
      ?.split(" ")
      .find((c) => c.startsWith(prefix))
      ?.replace(prefix, "");
    const params = classes ? classes.split(":") : [];

    if (params.length > 0 && params[0] === "twitter") {
      const id = children.replace(/\r?\n/g, "");
      return (
        <div className="flex items-center justify-center">
          <TweetEmbed tweetId={id} />
        </div>
      );
    }

    if (params.length > 0 && params[0] === "link") {
      return (
        <iframe
          className="mx-auto w-full max-w-7xl dark:opacity-80"
          src={`https://hatenablog-parts.com/embed?url=${children}`}
        />
      );
    }

    if (params.length > 0 && params[0] === "youtube") {
      const id = children.replace(/\r?\n/g, "");
      return (
        <div className="relative w-full pt-[56.25%]">
          <YouTubeEmbed
            videoId={id}
            iframeClassName="absolute top-0 right-0 w-full h-full"
            className=""
          />
        </div>
      );
    }
  }
  return <code className={className}>{children}</code>;
};
