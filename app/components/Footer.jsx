export default function Footer() {
  return (
    <footer className="min-w-full bg-[url('/public/footer-design.png')] text-imageBackground min-h-[10vh]  ">
      <div className="mx-10 md:mx-44 xl:mx-72 flex-col justify-start ">
        <p className="text-xl pt-6">Kontakt meg!</p>
        <p>email: ingvildnys@gmail.com</p>
        <p>linkedin</p>
        <p>Behance</p>
        <hr className="border mt-2 border-imageBackground w-full" />
        <p className="text-center p-2">Kodet av Håvard Larsen</p>
      </div>
    </footer>
  );
}
