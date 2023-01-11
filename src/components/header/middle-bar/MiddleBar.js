import Logo from "./logo/Logo";
import Fluid, { Container, Row } from "../../layout/Layout";

export default function MiddleBar() {
  return (
    <Container>
      <div className="flex justify-between items-center py-2">
        <Logo></Logo>
        <div className="flex gap-2">
          <Icon to="">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.66665 13.9997C11.1644 13.9997 14 11.1641 14 7.66634C14 4.16854 11.1644 1.33301 7.66665 1.33301C4.16884 1.33301 1.33331 4.16854 1.33331 7.66634C1.33331 11.1641 4.16884 13.9997 7.66665 13.9997Z"
                stroke="#1D2029"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M14.6666 14.6663L13.3333 13.333"
                stroke="#1D2029"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>
          <Icon to="">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.33331 1.33301H2.49332C3.21332 1.33301 3.77998 1.95301 3.71998 2.66634L3.16665 9.30634C3.07331 10.393 3.93331 11.3263 5.02664 11.3263H12.1266C13.0866 11.3263 13.9266 10.5397 14 9.58634L14.36 4.58634C14.44 3.47968 13.6 2.57967 12.4866 2.57967H3.87998"
                stroke="#1D2029"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.8333 14.6667C11.2936 14.6667 11.6667 14.2936 11.6667 13.8333C11.6667 13.3731 11.2936 13 10.8333 13C10.3731 13 10 13.3731 10 13.8333C10 14.2936 10.3731 14.6667 10.8333 14.6667Z"
                stroke="#1D2029"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M5.50002 14.6667C5.96026 14.6667 6.33335 14.2936 6.33335 13.8333C6.33335 13.3731 5.96026 13 5.50002 13C5.03978 13 4.66669 13.3731 4.66669 13.8333C4.66669 14.2936 5.03978 14.6667 5.50002 14.6667Z"
                stroke="#1D2029"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M6 5.33301H14"
                stroke="#1D2029"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>
          <Icon to="">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.00002 7.99967C9.84097 7.99967 11.3334 6.50729 11.3334 4.66634C11.3334 2.82539 9.84097 1.33301 8.00002 1.33301C6.15907 1.33301 4.66669 2.82539 4.66669 4.66634C4.66669 6.50729 6.15907 7.99967 8.00002 7.99967Z"
                stroke="#1D2029"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.7266 14.6667C13.7266 12.0867 11.16 10 7.99998 10C4.83998 10 2.27332 12.0867 2.27332 14.6667"
                stroke="#1D2029"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Icon>
        </div>
      </div>
    </Container>
  );
}

export function Icon({ to, children }) {
  return (
    <a
      href="/"
      className="w-8 h-8 flex justify-center items-center rounded-full hover:bg-gray-200"
    >
      {children}
    </a>
  );
}
