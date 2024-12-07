import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main>
      <div className="h-screen w-screen justify-center flex items-center flex-col">
        <h1 className="p-6 font-extralight text-6xl">Hello, Priya!</h1>
        <div className="max-w-screen-sm items-center">
          <ProductCard />
        </div>
      </div>
    </main>
  );
}
