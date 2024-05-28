const Products = () => {
  return (
    <section className="w-full py-16 md:py-20 2xl:py-24 bg-black text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 px-4 md:gap-12 md:px-8">
        <div className="grid place-items-center gap-10 mb-4">
          <h2 className="capitalize font-[600] text-[30px] text-[#ffff]">
            our projects
          </h2>
          <p className="text-[0.9em] lg:text-[1em] text-base w-[21rem] md:w-[56rem] text-white text-center">
            zurich Consulting Limited has a strong professional team with more
            than 150 standby artisans and professionals readily available to
            provide the highest quality services on schedule and within budget.
            Our people and successful backgrounds enable clients to the allure
            of working with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Products;
