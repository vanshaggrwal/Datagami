import { FaPhone, FaEnvelope, FaBriefcase, FaGithub, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Left Column */}
        <div>
          <img src="/logo.webp" alt="Datagami Logo" className="w-32 mb-3" />
          <p className="italic text-sm mb-4">“Lead Digital Technology”</p>

          <div className="flex items-start gap-3 mb-4">
            <FaPhone className="mt-1" />
            <div>
              <p className="font-semibold">Phone:</p>
              <p className="text-sm">+91 97029 34397 / +91 77381 70621</p>
            </div>
          </div>

          <div className="flex items-start gap-3 mb-4">
            <FaEnvelope className="mt-1" />
            <div>
              <p className="font-semibold">Email:</p>
              <p className="text-sm">info@datagami.in</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <FaBriefcase className="mt-1" />
            <div>
              <p className="font-semibold">Address:</p>
              <p className="text-sm">
                309, Crescent Business Square,<br />
                Khairani Rd, Saki Naka, Mumbai,<br />
                Maharashtra 400072
              </p>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-3">
          <p className="font-semibold">Follow us on social media</p>
          <div className="flex gap-4 text-xl">
            <a href="#" className="hover:text-blue-400"><FaGithub /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram /></a>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <p className="font-semibold mb-3">Get In Touch</p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 rounded-l-md w-full text-black"
            />
            <button className="bg-blue-600 px-4 py-2 rounded-r-md hover:bg-blue-700">➜</button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-2 md:mb-0">Terms & Conditions</p>
        <p>© 2024 Datagami Technologies. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
