function CartAdd({ children }) {
  return (
    <div>
      <button
        type="button"
        className="text-white bg-navy/90 hover:bg-navy focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none flex items-center gap-2"
      >
        Add to cart
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.33331 1.33301H2.49332C3.21332 1.33301 3.77998 1.95301 3.71998 2.66634L3.16665 9.30634C3.07331 10.393 3.93331 11.3263 5.02664 11.3263H12.1266C13.0866 11.3263 13.9266 10.5397 14 9.58634L14.36 4.58634C14.44 3.47968 13.6 2.57967 12.4866 2.57967H3.87998"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M10.8333 14.6667C11.2936 14.6667 11.6667 14.2936 11.6667 13.8333C11.6667 13.3731 11.2936 13 10.8333 13C10.3731 13 10 13.3731 10 13.8333C10 14.2936 10.3731 14.6667 10.8333 14.6667Z"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.50002 14.6667C5.96026 14.6667 6.33335 14.2936 6.33335 13.8333C6.33335 13.3731 5.96026 13 5.50002 13C5.03978 13 4.66669 13.3731 4.66669 13.8333C4.66669 14.2936 5.03978 14.6667 5.50002 14.6667Z"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6 5.33301H14"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}

export default CartAdd;
