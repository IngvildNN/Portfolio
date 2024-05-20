// ./components/Post.tsx

import { PortableText } from "@portabletext/react";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityDocument } from "@sanity/client";

import { projectId, dataset } from "~/sanity/projectDetails";

const builder = imageUrlBuilder({ projectId, dataset });

export default function Post({ post }: { post: SanityDocument }) {
  const { title, description, semester, body, mainImage } = post;

  return (
    <div className="mx-10 min-h-[100vh] md:mx-44 xl:mx-96 ">
      <div className="lg:flex lg:flex-row lg:justify-between lg:py-4">
        {title ? <h1>{title}</h1> : null}
        {semester ? <h2>{semester}</h2> : null}
      </div>
      <div className="lg:flex lg:flex-row lg:gap-10 lg:w-full">
        <div className="flex flex-col gap-4 lg:flex-col max-h-fit lg:min-w-[50%]">
          {mainImage ? (
            <img
              className="m-0 w-full mr-4 rounded-lg border-2 border-navy lg:h-auto lg:mr-0 lg:mb-0 lg:rounded lg:border-0"
              src={builder
                .image(mainImage)
                .width(300)
                .height(300)
                .quality(80)
                .url()}
              width={300}
              height={300}
              alt={title}
            />
          ) : null}
          {description ? <p>{description}</p> : null}
          {body ? <PortableText value={body} /> : null}
        </div>
      </div>
    </div>
  );
}