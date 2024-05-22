import { useEffect, useRef, useState } from "react";
import { Link } from "@remix-run/react";
import type { SanityDocument } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import { projectId, dataset } from "~/sanity/projectDetails";

export default function Posts({ posts }: { posts: SanityDocument[] }) {
  const builder = imageUrlBuilder({ projectId, dataset });
  const [activePost, setActivePost] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActivePost(entry.target.id);
        } else if (entry.target.id === activePost) {
          setActivePost(null);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 1, // Adjust this value to your needs
    });

    const { current: observer } = observerRef;

    const elements = document.querySelectorAll(".post");
    elements.forEach((element) => observer.observe(element));

    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [activePost]);

  return (
    <main className="container mt-8 grid gap-4 max-w-full grid-cols-1 md:grid-cols-2 ">
      {posts?.length > 0 ? (
        posts.map((post) => (
          <div
            id={post._id}
            className={`post flex justify-start items-center h-fit flex-col w-full relative`}
            key={post._id}
          >
            <div className="flex justify-start items-start w-full ">
              <h3 className="flex font-normal min-h-fit max-w-fit ">
                {post.title}
              </h3>
            </div>
            <div
              className={`flex justify-start z-30 relative w-full flex-col p-2 ${
                activePost === post._id ? "bg-tertiary" : "bg-imageBackground"
              } md:bg-imageBackground md:p-4`}
            >
              <Link className="w-full" key={post._id} to={post.slug.current}>
                {post.mainImage ? (
                  <img
                    className="max-h-fit object-contain min-w-full"
                    src={builder.image(post.mainImage).quality(100).url()}
                    width={300}
                    height={300}
                    alt={post.title}
                  />
                ) : null}
                {post.semester ? (
                  <div className="w-full flex justify-end">
                    <p className="pt-2">{post.semester}</p>
                  </div>
                ) : null}
              </Link>
              {activePost === post._id && (
                <>
                  <img
                    src="/gressirkel.png"
                    alt=""
                    className="absolute opacity-[30%] top-[6rem] right-[1rem] w-20 h-20 transform translate-x-1/2 -translate-y-1/2"
                  />
                  <img
                    src="/gressirkel.png"
                    alt=""
                    className="absolute opacity-[30%] bottom-5 left-[-1.5rem]  w-20 h-20 transform translate-x-2/1 -translate-y-2/1"
                  />
                </>
              )}
            </div>
            <div className="flex justify-start items-start w-full ">
              {post.description ? <p className="">{post.description}</p> : null}
            </div>
          </div>
        ))
      ) : (
        <div className="p-4 text-red-500">No projects found</div>
      )}
    </main>
  );
}
