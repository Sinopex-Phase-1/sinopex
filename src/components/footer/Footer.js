import Logo from "../header/middle-bar/logo/Logo";
import SocialMedia from "../header/topbar/SocialMedia";

export default function Footer() {
  return (
    <footer className="px-4 relative bg-alice-blue text-navy">
      <div className="stripe-skew"></div>
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between px-4 border-b py-8 lg:py-16 z-10">
        <div className="w-full sm:w-1/2 lg:w-3/12 py-2 lg:py-0">
          <Logo></Logo>
          <ul className="flex flex-col items-start mt-3">
            <li className="py-2 flex justify-start items-start gap-2">
              <a
                href="tel:+251116686900"
                className="flex gap-2 items-center hover:underline hover:underline-offset-4 hover:decoration-2 hover:translate-x-2 transition-all ease-in font-medium"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3084 15.2751C18.3084 15.5751 18.2417 15.8834 18.1 16.1834C17.9584 16.4834 17.775 16.7667 17.5334 17.0334C17.125 17.4834 16.675 17.8084 16.1667 18.0167C15.6667 18.2251 15.125 18.3334 14.5417 18.3334C13.6917 18.3334 12.7834 18.1334 11.825 17.7251C10.8667 17.3167 9.90835 16.7667 8.95835 16.0751C8.00002 15.3751 7.09169 14.6001 6.22502 13.7417C5.36669 12.8751 4.59169 11.9667 3.90002 11.0167C3.21669 10.0667 2.66669 9.11675 2.26669 8.17508C1.86669 7.22508 1.66669 6.31675 1.66669 5.45008C1.66669 4.88341 1.76669 4.34175 1.96669 3.84175C2.16669 3.33341 2.48335 2.86675 2.92502 2.45008C3.45835 1.92508 4.04169 1.66675 4.65835 1.66675C4.89169 1.66675 5.12502 1.71675 5.33335 1.81675C5.55002 1.91675 5.74169 2.06675 5.89169 2.28341L7.82502 5.00842C7.97502 5.21675 8.08335 5.40841 8.15835 5.59175C8.23335 5.76675 8.27502 5.94175 8.27502 6.10008C8.27502 6.30008 8.21669 6.50008 8.10002 6.69175C7.99169 6.88341 7.83335 7.08341 7.63335 7.28341L7.00002 7.94175C6.90835 8.03341 6.86669 8.14175 6.86669 8.27508C6.86669 8.34175 6.87502 8.40008 6.89169 8.46675C6.91669 8.53341 6.94169 8.58341 6.95835 8.63341C7.10835 8.90841 7.36669 9.26675 7.73335 9.70008C8.10835 10.1334 8.50835 10.5751 8.94169 11.0167C9.39169 11.4584 9.82502 11.8667 10.2667 12.2417C10.7 12.6084 11.0584 12.8584 11.3417 13.0084C11.3834 13.0251 11.4334 13.0501 11.4917 13.0751C11.5584 13.1001 11.625 13.1084 11.7 13.1084C11.8417 13.1084 11.95 13.0584 12.0417 12.9667L12.675 12.3417C12.8834 12.1334 13.0834 11.9751 13.275 11.8751C13.4667 11.7584 13.6584 11.7001 13.8667 11.7001C14.025 11.7001 14.1917 11.7334 14.375 11.8084C14.5584 11.8834 14.75 11.9917 14.9584 12.1334L17.7167 14.0917C17.9334 14.2417 18.0834 14.4167 18.175 14.6251C18.2584 14.8334 18.3084 15.0417 18.3084 15.2751Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  ></path>
                </svg>
                +2511 16 68 69 00
              </a>
            </li>
            <li className="py-2 flex justify-start items-start gap-2">
              <a
                href="tel:+251116686901"
                className="flex gap-2 items-center hover:underline hover:underline-offset-4 hover:decoration-2 hover:translate-x-2 transition-all ease-in font-medium"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18.3084 15.2751C18.3084 15.5751 18.2417 15.8834 18.1 16.1834C17.9584 16.4834 17.775 16.7667 17.5334 17.0334C17.125 17.4834 16.675 17.8084 16.1667 18.0167C15.6667 18.2251 15.125 18.3334 14.5417 18.3334C13.6917 18.3334 12.7834 18.1334 11.825 17.7251C10.8667 17.3167 9.90835 16.7667 8.95835 16.0751C8.00002 15.3751 7.09169 14.6001 6.22502 13.7417C5.36669 12.8751 4.59169 11.9667 3.90002 11.0167C3.21669 10.0667 2.66669 9.11675 2.26669 8.17508C1.86669 7.22508 1.66669 6.31675 1.66669 5.45008C1.66669 4.88341 1.76669 4.34175 1.96669 3.84175C2.16669 3.33341 2.48335 2.86675 2.92502 2.45008C3.45835 1.92508 4.04169 1.66675 4.65835 1.66675C4.89169 1.66675 5.12502 1.71675 5.33335 1.81675C5.55002 1.91675 5.74169 2.06675 5.89169 2.28341L7.82502 5.00842C7.97502 5.21675 8.08335 5.40841 8.15835 5.59175C8.23335 5.76675 8.27502 5.94175 8.27502 6.10008C8.27502 6.30008 8.21669 6.50008 8.10002 6.69175C7.99169 6.88341 7.83335 7.08341 7.63335 7.28341L7.00002 7.94175C6.90835 8.03341 6.86669 8.14175 6.86669 8.27508C6.86669 8.34175 6.87502 8.40008 6.89169 8.46675C6.91669 8.53341 6.94169 8.58341 6.95835 8.63341C7.10835 8.90841 7.36669 9.26675 7.73335 9.70008C8.10835 10.1334 8.50835 10.5751 8.94169 11.0167C9.39169 11.4584 9.82502 11.8667 10.2667 12.2417C10.7 12.6084 11.0584 12.8584 11.3417 13.0084C11.3834 13.0251 11.4334 13.0501 11.4917 13.0751C11.5584 13.1001 11.625 13.1084 11.7 13.1084C11.8417 13.1084 11.95 13.0584 12.0417 12.9667L12.675 12.3417C12.8834 12.1334 13.0834 11.9751 13.275 11.8751C13.4667 11.7584 13.6584 11.7001 13.8667 11.7001C14.025 11.7001 14.1917 11.7334 14.375 11.8084C14.5584 11.8834 14.75 11.9917 14.9584 12.1334L17.7167 14.0917C17.9334 14.2417 18.0834 14.4167 18.175 14.6251C18.2584 14.8334 18.3084 15.0417 18.3084 15.2751Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                  ></path>
                </svg>
                +2511 16 68 69 01
              </a>
            </li>
            <li className="py-2 flex justify-start items-start gap-2">
              <a
                href="mailto:info@iconimex.com"
                className="flex gap-2 items-center hover:underline hover:underline-offset-4 hover:decoration-2 hover:translate-x-2 transition-all ease-in font-medium"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.1667 17.0834H5.83335C3.33335 17.0834 1.66669 15.8334 1.66669 12.9167V7.08341C1.66669 4.16675 3.33335 2.91675 5.83335 2.91675H14.1667C16.6667 2.91675 18.3334 4.16675 18.3334 7.08341V12.9167C18.3334 15.8334 16.6667 17.0834 14.1667 17.0834Z"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M14.1666 7.5L11.5583 9.58333C10.7 10.2667 9.29164 10.2667 8.43331 9.58333L5.83331 7.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                info@sinoprex.com
              </a>
            </li>
            <li className="py-2 flex justify-start items-start gap-2 font-medium">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="mt-1"
              >
                <path
                  d="M10 11.1917C11.436 11.1917 12.6 10.0276 12.6 8.5917C12.6 7.15576 11.436 5.9917 10 5.9917C8.56408 5.9917 7.40002 7.15576 7.40002 8.5917C7.40002 10.0276 8.56408 11.1917 10 11.1917Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                ></path>
                <path
                  d="M3.01663 7.07508C4.65829 -0.141583 15.35 -0.13325 16.9833 7.08342C17.9416 11.3167 15.3083 14.9001 13 17.1168C11.325 18.7334 8.67496 18.7334 6.99163 17.1168C4.69163 14.9001 2.05829 11.3084 3.01663 7.07508Z"
                  stroke="currentColor"
                  strokeWidth="1.5"
                ></path>
              </svg>
              Guangzhou, China
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-2/12 py-2 lg:py-0">
          <div className="uppercase font-semibold mb-2">Sitemap</div>
          <hr />
          <ul className="flex flex-col items-start">
            <li className="h-full relative capitalize">
              <a
                href="/"
                className="hover:underline hover:underline-offset-4 hover:decoration-2 font-medium  hover:translate-x-2 transition-all ease-in block py-2"
              >
                Home
              </a>
            </li>
            <li className="h-full relative capitalize">
              <a
                href="/news"
                className="hover:underline hover:underline-offset-4 hover:decoration-2 font-medium  hover:translate-x-2 transition-all ease-in block py-2"
              >
                News
              </a>
            </li>
            <li className="h-full relative capitalize">
              <a
                href="/contact"
                className="hover:underline hover:underline-offset-4 hover:decoration-2 font-medium  hover:translate-x-2 transition-all ease-in block py-2"
              >
                Contact
              </a>
            </li>
            <li className="h-full relative capitalize">
              <a
                href="/contact"
                className="hover:underline hover:underline-offset-4 hover:decoration-2 font-medium  hover:translate-x-2 transition-all ease-in block py-2"
              >
                FAQ
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-2/12 py-2 lg:py-0 mr-12">
          <div className="uppercase font-semibold mb-2">Services</div>
          <hr></hr>
          <ul className="flex flex-col items-start">
            <li className="h-full relative capitalize">
              <a
                href="/product"
                className="hover:underline hover:underline-offset-4 hover:decoration-2 font-medium  hover:translate-x-2 transition-all ease-in block py-2"
              >
                Product
              </a>
            </li>
            <li className="h-full relative capitalize">
              <a
                href="/send-inquery"
                className="hover:underline hover:underline-offset-4 hover:decoration-2 font-medium  hover:translate-x-2 transition-all ease-in block py-2"
              >
                Send Inquiry
              </a>
            </li>
            <li className="h-full relative capitalize">
              <a
                href="/"
                className="hover:underline hover:underline-offset-4 hover:decoration-2 font-medium  hover:translate-x-2 transition-all ease-in block py-2"
              >
                Factory View
              </a>
            </li>
            <li className="h-full relative capitalize">
              <a
                href="/download"
                className="hover:underline hover:underline-offset-4 hover:decoration-2 font-medium  hover:translate-x-2 transition-all ease-in block py-2"
              >
                Download
              </a>
            </li>
            <li className="h-full relative capitalize">
              <a
                href="/history"
                className="hover:underline hover:underline-offset-4 hover:decoration-2 font-medium  hover:translate-x-2 transition-all ease-in block py-2"
              >
                History
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full sm:w-1/2 lg:w-3/12 py-2 lg:py-0">
          <div className="uppercase font-semibold mb-2">Subscribe</div>
          <hr></hr>
          <form className="pr-10 py-4 max-w-sm">
            <div className="relative my-4 w-full">
              <input
                type="email"
                id="email"
                aria-describedby="helper-text-explanation"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-2 focus:ring-navy focus:border-navy block w-full px-4 py-3 relative rounded-2xl"
                placeholder="name@flowbite.com"
              />
              <button
                type="button"
                className="text-white bg-navy hover:bg-navy font-medium text-sm px-5 py-2.5 absolute right-2 bottom-2 rounded-xl focus:bottom-[3px] focus:right-1 shadow-xl focus:shadow-none transition-all ease-in"
              >
                Submit
              </button>
            </div>
          </form>
          <div className="flex justify-start pb-4">
            <SocialMedia></SocialMedia>
          </div>
        </div>
      </div>
      <div className="py-6">
        <div className="text-navy text-center">
          Copyright@2021 all right reserved
        </div>
      </div>
    </footer>
  );
}
