export default function Contact() {
  return (
    <div className="min-h-[100vh] mx-10 md:mx-44 xl:mx-72">
      <h1 className="mt-8 font-normal">Ta kontakt</h1>
      <div className="flex flex-row justify-between">
        <div className="flex-col justify-start ">
          <h2 className="text-xl text-footerText mb-3 pt-6">Kontakt meg!</h2>
          <div className="flex flex-col w-full  gap-2">
            <div className="flex-row gap-2 flex">
              <img className="w-7" src="/email-dar.png" alt="email" />{" "}
              ingvildnys[at]gmail.com
            </div>
            <div className="flex flex-row items-center gap-2">
              <img className="w-7" src="/linked-dark.png" alt="linkedin" />{" "}
              LinkedIn
            </div>
            <h2 className="mt-8">Se mer prosjekter</h2>
            <div className="flex-row gap-2 flex">
              <img className="w-7" src="/behance-dark.png" alt="" />
              Behance
            </div>
          </div>
        </div>
        <div>
          <img className=" w-full" src="/Fjellet-2.png" alt="" />
        </div>
      </div>
      <div className="mt-16 flex justify-center items-center">
        <div className="border-2 border-green-600 p-4 flex gap-2 flex-row">
          <p className="underline hover:pointer">
            <a href="mailto: ingvildnys@gmail.com"> Send meg en mail</a>
          </p>
          <img src="/arrow.png" alt="" />
        </div>
      </div>
    </div>
  );
}
