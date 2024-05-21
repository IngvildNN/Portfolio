export default function Footer() {
  const linkedin = () => {
    window.open("https://www.linkedin.com/in/ingvildnystein/", "_blank");
  };
  return (
    <footer className="min-w-full bg-[url('/public/footer-design.png')]  text-imageBackground min-h-[10vh]  ">
      <div className="mx-10 md:mx-44 xl:mx-72 flex-col justify-start ">
        <div className="text-xl text-footerText pt-6">Kontakt meg!</div>
        <div className="flex flex-col w-full  gap-2">
          <div className="flex-row gap-2 flex">
            <img className="w-10" src="/email.png" alt="email" />{" "}
            ingvildnys[at]gmail.com
          </div>
          <div className="flex flex-row items-center justify-between w-full">
            <div
              className="flex flex-row items-center gap-2"
              onClick={linkedin}
              style={{ cursor: "pointer" }}
            >
              <img className="w-10" src="/linked.png" alt="linkedin" /> LinkedIn
            </div>
            <img className="w-10 h-5" src="footer-logo.png" alt="" />
          </div>
        </div>

        <hr className="border mt-2 border-imageBackground w-full" />
        <div className="text-center p-2">Kodet av Håvard Larsen</div>
      </div>
    </footer>
  );
}
