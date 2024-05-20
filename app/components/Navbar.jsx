export default function Navbar() {
  return (
    <div className="flex justify-between items-center min-w-full bg-primary px-5 text-secondary h-[10vh]">
      <a href="/about">om meg</a>
      <a href="/">
        <img src="/public/logo.png" alt="" />
      </a>
      <a href="/kontakt">ta kontakt</a>
    </div>
  );
}
