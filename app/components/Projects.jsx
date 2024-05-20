import { FolderClosed } from "lucide-react";
import { useLoaderData } from "@remix-run/react";

import { loadQuery } from "~/sanity/loader.server";
import { POSTS_QUERY } from "~/sanity/queries";
import imageUrlBuilder from "@sanity/image-url";
import { projectId, dataset } from "~/sanity/projectDetails";
import { PortableText } from "@portabletext/react";

export const loader = async () => {
  const { data } = await loadQuery(POSTS_QUERY);
  console.log(data);
  return { data };
};

export default function Projects() {
  const { data } = useLoaderData();

  const builder = imageUrlBuilder({ projectId, dataset });

  return (
    <>
      <div className="min-h-[100vh] m-10 md:mx-44 xl:mx-96 ">
        <h1 className="flex items-center justify-between gap-4 w-full">
          {" "}
          <FolderClosed className="text-primary" />
          Projects <FolderClosed className="text-primary" />
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 2xl:grid-cols-3">
          {data &&
            data.map((post) => (
              <div
                key={post._id}
                className="border border-gray-200 p-4 rounded-lg flex flex-col  items-center bg-background mt-8 shadow-md hover:shadow-lg transition duration-300 ease-in-out"
              >
                {post.mainImage ? (
                  <img
                    className="float-left m-0 w-full max-h-fit border-4 border-primary object-contain"
                    src={builder
                      .image(post.mainImage)
                      .width(300)
                      .height(300)
                      .quality(80)
                      .url()}
                    width={300}
                    height={300}
                    alt={post.title}
                  />
                ) : null}
                <div className="flex justify-between w-full my-2">
                  <h2 className="text-lg font-bold mb-2">{post.title}</h2>
                  <p className="text-primary">{post.Semester}</p>
                </div>

                <div className="flex justify-between flex-col h-full items-center mt-4">
                  {post.body ? <PortableText value={post.body} /> : null}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
