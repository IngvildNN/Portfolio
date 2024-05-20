export const meta = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <main className="m-10">
      <h1 className="font-bold text-3xl">Kæll</h1>
    </main>
  );
}
