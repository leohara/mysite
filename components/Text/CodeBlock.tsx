import React, { DetailedHTMLProps, HTMLAttributes } from "react";

import LiteYouTubeEmbed from "react-lite-youtube-embed";
import { Tweet } from "react-tweet";
import "react-lite-youtube-embed/dist/LiteYouTubeEmbed.css";

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
          <Tweet id={id} />
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
        <LiteYouTubeEmbed
          id={id}
          aspectHeight={9}
          aspectWidth={16}
          playlistCoverId={id}
          poster="maxresdefault"
          title="YouTube Embed"
        />
      );
    }
  }
  return <code className={className}>{children}</code>;
};
