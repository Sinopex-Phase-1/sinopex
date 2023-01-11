export function Card({ children, href = "/" }) {
  return (
    <a
      href={href}
      className="flex flex-col items-start bg-white shadow-md rounded-xl max-w-[290px] w-full overflow-hidden hover:shadow-none transition-all ease-in duration-200"
    >
      {children}
    </a>
  );
}

export function Image({ src = "" }) {
  return (
    <img
      className="flex items-center w-full h-full aspect-square bg-white"
      src={src}
      alt={"product:" + src}
    />
  );
}

export function Info({ children }) {
  return <div className="flex flex-col p-4">{children}</div>;
}

export function Name({ children }) {
  return (
    <div className="lg:text-lg font-medium text-navy capitalize">
      {children}
    </div>
  );
}

export function Price({ children }) {
  return <div className="font-medium text-red-700">{children}</div>;
}

export const Product = { Card, Image, Info, Name, Price };
