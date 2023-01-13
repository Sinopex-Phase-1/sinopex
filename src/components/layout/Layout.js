function Fluid({ children }) {
  return <div className="w-full py-6">{children}</div>;
}

export function Container({ children, className = "" }) {
  return (
    <div className={"max-w-screen-xl mx-auto px-4 " + className}>
      {children}
    </div>
  );
}

export function Banner({ src }) {
  return (
    <img
      className="w-full h-80 lg:h-96 rounded-2xl bg-white overflow-hidden shadow-md"
      src={src}
      alt={src}
    />
  );
}

export function ProductTitle({ children }) {
  return (
    <div className="text-center w-full py-3 text-3xl lg:text-3xl font-semibold uppercase text-navy">
      {children}
    </div>
  );
}

function Title({ children, className = "" }) {
  return (
    <div
      className={
        "text-center w-full py-3 text-2xl lg:text-3xl font-semibold uppercase text-navy " +
        className
      }
    >
      {children}
    </div>
  );
}

export function Row({ children, className = "" }) {
  return (
    <div
      className={
        "flex items-center justify-evenly flex-wrap gap-5 w-full py-5 " +
        className
      }
    >
      {children}
    </div>
  );
}

export function Desc({ children, className = "" }) {
  return (
    <div
      className={
        "text-center w-full py-3 lg:text-lg text-gray-600 " + className
      }
    >
      {children}
    </div>
  );
}

export default Fluid;

export const Layout = {
  Fluid,
  Container,
  Banner,
  ProductTitle,
  Title,
  Desc,
  Row,
};
