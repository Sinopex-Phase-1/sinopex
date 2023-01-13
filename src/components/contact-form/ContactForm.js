export default function ContactForm() {
  return (
    <section className="relative">
      <div className="py-8 relative">
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex flex-wrap lg:flex-nowrap rounded-3xl bg-white p-2">
            <div className="lg:max-w-sm w-full p-6 lg:p-10 bg-alice-blue rounded-2xl text-white flex flex-col relative overflow-hidden bg-office">
              <img
                src="/assets/images/contactdetails.png"
                alt="conact"
                className="w-full h-full"
              />
            </div>
            <div className="w-full p-6 lg:p-10">
              <form>
                <div className="flex flex-wrap lg:flex-nowrap lg:gap-8">
                  <div className="w-full mb-8">
                    <label
                      htmlFor="firstName"
                      className="block mb-2 text-sm font-medium text-textgray"
                    >
                      First Name
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      className="bg-gray-50 focus:bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-navy focus:border-navy block w-full p-2.5"
                      placeholder="John"
                      required=""
                    />
                  </div>
                  <div className="w-full mb-8">
                    <label
                      htmlFor="lastName"
                      className="block mb-2 text-sm font-medium text-textgray"
                    >
                      Last Name
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      className="bg-gray-50 focus:bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-navy focus:border-navy block w-full p-2.5"
                      placeholder="Doe"
                      required=""
                    />
                  </div>
                </div>
                <div className="flex flex-wrap lg:flex-nowrap lg:gap-8">
                  <div className="w-full mb-8">
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-textgray"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="bg-gray-50 focus:bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-navy focus:border-navy block w-full p-2.5"
                      placeholder="info@iconimex.com"
                      required=""
                    />
                  </div>
                  <div className="w-full mb-8">
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-textgray"
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="bg-gray-50 focus:bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-navy focus:border-navy block w-full p-2.5"
                      placeholder="+2511 1668 6900"
                      required=""
                    />
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block mb-2 text-sm font-medium text-textgray"
                  >
                    Your message
                  </label>
                  <textarea
                    id="message"
                    rows="6"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 focus:bg-gray-50 rounded-lg border border-gray-300 focus:ring-2 focus:ring-navy focus:border-navy"
                    placeholder="Write your thoughts here..."
                  ></textarea>
                </div>
                <div className="flex justify-end w-full mt-8">
                  <button
                    type="submit"
                    className="text-white bg-navy hover:brightness-90 focus:ring-4 focus:outline-none focus:ring-2 focus:ring-navy font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
