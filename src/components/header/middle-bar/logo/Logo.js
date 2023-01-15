import logoSVG from "./logo.svg";

function Logo() {
  return (
    <a href="/">
      <img src={logoSVG} alt="logo main" className="h-10" />
    </a>
  );
}

export default Logo;
