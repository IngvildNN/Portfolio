export default function Footer() {
  const linkedin = () => {
    window.open("https://www.linkedin.com/in/ingvildnystein/", "_blank");
  };
  return (
    <footer className="min-w-full bg-[url('/footer-design.png')]  text-imageBackground min-h-[10vh]  ">
      <div className="mx-10 md:mx-44 xl:mx-72 flex-col justify-start ">
        <div className="text-xl text-footerText pt-6">Kontakt meg!</div>
        <div className="flex flex-col w-full mt-4  gap-5">
          <div className="flex-row gap-4 flex">
            <img className="w-10" src="/email.png" alt="email" />{" "}
            ingvildnys[at]gmail.com
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <div
              className="flex flex-row items-center gap-4"
              onClick={linkedin}
              style={{ cursor: "pointer" }}
            >
              <img className="w-10" src="/linked.png" alt="linkedin" /> LinkedIn
            </div>
            <img className="w-10 h-5" src="footer-logo.png" alt="" />
          </div>
        </div>

        <hr className="border mt-4 border-imageBackground w-full" />
        <div className="text-center p-2">
          Designet av Ingvild Nystein, kodet av{" "}
          <a className="underline" target="_blank" href="https://hlarsen.no/">
            Håvard Larsen
          </a>
          <p className="text-imageBackground"> © 2024</p>
        </div>
      </div>
    </footer>
  );
}
