import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Shop = ({ children }: Props) => {
  return (
    <div className="flex flex-col items-center min-w-[600px] ">
      <h1 className="m-5 text-left max-w-[1200px] w-full text-orange-200">
        Elegant Clothing
      </h1>

      <section>
        <ul className="grid grid-cols-3 gap-5  max-w-[1200px] mb-5">
          {children}
        </ul>
      </section>
    </div>
  );
};
export default Shop;
