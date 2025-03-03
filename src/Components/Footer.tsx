const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-5">
      {/* Newsletter Section */}
      <div className="max-w-4xl mx-auto bg-purple-900 text-white rounded-lg p-6 text-center mb-10">
        <p className="text-lg font-medium">
          Sign up to get notified first about new Startupathon projects and
          receive updates through our newsletter.
        </p>
        <div className="mt-4 flex justify-center items-center gap-2">
          <input
            type="email"
            placeholder="Enter your email ID"
            className="p-2 w-80 bg-black border border-gray-600 rounded-lg text-white focus:outline-none"
          />
          <button className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg">
            Subscribe
          </button>
        </div>
      </div>

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left">
        {/* Company Info */}
        <div className="md:w-1/3 mb-10 md:mb-0 m-10">
          <h2 className="text-2xl font-bold flex items-center">
            <span className="text-purple-500">PERSIST</span> VENTURES
          </h2>
          <p className="mt-3 text-gray-400">
            We partner with entrepreneurs and businesses to help scale and grow
            their ideas. With a diverse team skilled in every sector, there is
            no business we cannot help get a leg up.
          </p>
          <div className="flex justify-center md:justify-start gap-4 mt-4">
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-2xl">
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="md:w-1/3 mb-10 md:mb-0">
          <h3 className="text-xl font-semibold">Quick Links</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Investor Application
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Job Application
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Apply to Startup Accelerator
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Career Accelerator Program
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Our Team
              </a>
            </li>
          </ul>
        </div>

        {/* Legal Section */}
        <div className="md:w-1/3">
          <h3 className="text-xl font-semibold">Legal</h3>
          <ul className="mt-3 space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Decentralized Intelligence Agency
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-sm mt-10">
        All rights reserved © 2025 persistventures.com
      </div>
    </footer>
  );
};

export default Footer;
