import { useNavigate } from "@remix-run/react";

export default function Contact() {
  const navigate = useNavigate();

  const behance = () => {
    window.open("https://www.behance.net/ingvildnystein", "_blank");
  };

  const linkedin = () => {
    window.open("https://www.linkedin.com/in/ingvildnystein/", "_blank");
  };

  return (
    <div className="min-h-[100vh] mx-5 md:mx-44 xl:mx-72">
      <h1 className="mt-8 font-normal">Ta kontakt</h1>
      <div className="flex flex-row justify-between mt-6">
        <div className="flex-col justify-start ">
          <h2 className="text-xl text-footerText mb-3">Kontakt meg!</h2>
          <div className="flex flex-col w-full  gap-2">
            <p className="flex-row gap-2 flex">
              <img className="w-7" src="/email-dar.png" alt="email" />{" "}
              ingvildnys[at]gmail.com
            </p>
            <p
              className="flex flex-row items-center gap-2"
              onClick={linkedin}
              style={{ cursor: "pointer" }}
            >
              <img className="w-7" src="/linked-dark.png" alt="linkedin" />{" "}
              LinkedIn
            </p>
            <h2 className="mt-8">Se mer prosjekter</h2>
            <div className="flex-row gap-2 flex">
              <p
                className="flex-row gap-2 flex items-center"
                onClick={behance}
                style={{ cursor: "pointer" }}
              >
                <img className="w-7" src="/behance-dark.png" alt="" />
                Behance
              </p>
            </div>
          </div>
        </div>
        <div>
          <img
            className=" w-full md:w-auto md:h-72"
            src="/Fjellet-2.png"
            alt=""
          />
        </div>
      </div>
      <div className="mt-16 flex justify-center items-center">
        <div className="border-2 rounded-xl border-darkGreen p-4 flex gap-2 flex-row">
          <p className="underline hover:pointer">
            <a
              className="text-darkGreenText"
              href="mailto: ingvildnys@gmail.com"
            >
              {" "}
              Send meg en mail
            </a>
          </p>
          <img src="/arrow.png" alt="" />
        </div>
      </div>
    </div>
  );
}
