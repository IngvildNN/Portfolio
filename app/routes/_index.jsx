import Experience from "~/components/experience";
import { useLoaderData } from "@remix-run/react";
// import type { SanityDocument } from "@sanity/client";

import Posts from "~/components/Posts";
// import { useQuery } from "~/sanity/loader";
import { loadQuery } from "~/sanity/loader.server";
import { POSTS_QUERY } from "~/sanity/queries";

export const loader = async () => {
  const { data } = await loadQuery(POSTS_QUERY);
  return { data };
};

export const meta = () => {
  return [
    { title: "Ingvild Netland Nystein" },
    { name: "description", content: "Ingvild Netland Nystein portfolio" },
  ];
};

export default function Index() {
  const { data } = useLoaderData();
  return (
    <main className="mb-10 mx-10 md:mx-44 xl:mx-72">
      <div className="flex mt-8 md:justify-between md:w-full md:flex md:gap-20 md:items-center -mx-6 ">
        <img
          className="mix-blend-multiply max-h-24 md:min-h-40"
          src="/public/duotone3.jpg"
          alt="Ingvild"
        />
        <div className="flex flex-col">
          <p className="md:text-xl">Heisann!</p>
          <p className="md:text-xl ">
            Jeg heter Ingvild og kommer fra Sandnes. Med fire år erfaring
            erfaring i fagområdet med et ett års studium i UX-Design på Noroff
            og en interaksjonsdesign bachelor på NTNU i Gjøvik
          </p>
        </div>
      </div>
      <Experience />
      <div className="mt-12 flex gap-3 justify-center md:justify-center md:gap-5 md:mx-44 ">
        <p className="md:text-xl lg:text-lg">Innsiktsamling</p>
        <p className="md:text-xl lg:text-lg">Tjenestedesign</p>
        <p className="md:text-xl lg:text-lg">Brukertesting</p>
      </div>
      <h2 className="font-normal text-center mt-12">Prosjekter</h2>
      <Posts posts={data} />
    </main>
  );
}
