import LogoSrc from "./logo.png";
import logoSVG from "./logo.svg";

function Logo() {
  return <img src={LogoSrc} alt="logo" className="w-40 h-14 object-contain" />;
}

function Logo2() {
  return (
    <a href="/">
      <img src={logoSVG} alt="logo main" className="h-10" />
    </a>
  );
}

export default Logo2;
