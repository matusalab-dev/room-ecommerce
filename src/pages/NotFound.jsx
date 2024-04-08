import { ShopsNavbar } from "../components/navbar/ShopsNavbar";

export const NotFound = () => {
  return (
    <section className="custom-container px-2 py-12 text-left  md:text-center">
      <ShopsNavbar />
      <div className="mt-16">
        <h1 className="mb-3  sm:mb-1 text-4xl font-bold text-gray-900 text sm:text-3xl md:text-4xl md:leading-tight md:font-extrabold">
          Coming Soon!
        </h1>
        <p className="mb-6 text-sm md:text-center font-thin md:leading-normal">
          Stay tuned for more updates.
        </p>
      </div>
    </section>
  );
};
