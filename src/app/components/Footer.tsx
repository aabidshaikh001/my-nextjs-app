import Image from 'next/image';
import Link from 'next/link';
import {
  IconMapPinFilled,
  IconMailFilled,
  IconPhoneFilled,
  IconBrandFacebookFilled,
  IconBrandInstagramFilled,
  IconBrandTwitterFilled,
  IconBrandLinkedinFilled,
  IconBrandYoutubeFilled,
} from '@tabler/icons-react';

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-gray-800 pt-16 pb-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b-2 border-gray-300 pb-8">
          {/* Logo & Description */}
          <div className="col-span-1 flex flex-col gap-2 mb-8">
            <Image
              src="/logo.png"
              alt="Logo"
              className="mb-4 mr-6 w-32"
              height={300}
              width={300}
              priority
            />
            <p className="text-base">
              OneATM is a venture of OneATM Technology Private Limited,
              providing exceptional support and services. We offer 180+ services,
              including unique options to cater to your needs.
            </p>
          </div>

          {/* Contact Information */}
          <div className="col-span-1 flex flex-col justify-between mb-8">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="flex items-center mb-2">
              <IconMapPinFilled className="mr-2 text-blue-900" size={34} />
              3rd Floor, Landmark Cyber Park, Sector 67, Gurugram, Haryana, India, 122102
            </p>
            <p className="flex items-center mb-2">
              <IconMailFilled className="mr-2 text-blue-900" size={24} />
              Email: <a href="mailto:help@oneatm.in" className="text-blue-800 hover:underline">help@oneatm.in</a>
            </p>
            <p className="flex items-center">
              <IconPhoneFilled className="mr-2 text-blue-900" size={24} />
              Phone: <a href="mailto:cybercell@oneatm.in" className="text-blue-800 hover:underline">cybercell@oneatm.in</a>
            </p>
          </div>

          {/* Services */}
          <div className="col-span-1 flex flex-col mb-8">
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-1">
              <li><a className="hover:text-blue-800">Email Marketing</a></li>
              <li><a className="hover:text-blue-800">Campaigns</a></li>
              <li><a className="hover:text-blue-800">Branding</a></li>
              <li><a className="hover:text-blue-800">Offline</a></li>
            </ul>
          </div>

          {/* About & Help */}
          <div className="col-span-1 flex flex-col justify-between mb-8">
            <h3 className="text-lg font-semibold mb-4">About & Help</h3>
            <ul className="space-y-1">
              <li><a className="hover:text-blue-800">Our Story</a></li>
              <li><a className="hover:text-blue-800">Benefits</a></li>
              <li><a className="hover:text-blue-800">Team</a></li>
              <li><a className="hover:text-blue-800">Careers</a></li>
              <li><a className="hover:text-blue-800">FAQs</a></li>
              <li><a className="hover:text-blue-800">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center mt-8 space-x-6">
          <a
            href="https://www.facebook.com/p/Oneatm-100094629965731/"
            aria-label="Facebook"
            className="text-gray-600 hover:text-blue-500 transition-colors duration-200"
          >
            <IconBrandFacebookFilled fontSize="large" size={30} />
          </a>
          <a
            href="https://www.instagram.com/oneatm1/"
            aria-label="Instagram"
            className="text-gray-600 hover:text-pink-500 transition-colors duration-200"
          >
            <IconBrandInstagramFilled fontSize="large" size={30} />
          </a>
          <a
            aria-label="Twitter"
            className="text-gray-600 hover:text-blue-400 transition-colors duration-200"
          >
            <IconBrandTwitterFilled fontSize="large" size={30} />
          </a>
          <a
            href="https://www.linkedin.com/company/oneatmindia/posts/?feedView=all"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-blue-700 transition-colors duration-200"
          >
            <IconBrandLinkedinFilled fontSize="large" size={30} />
          </a>
          <a
            aria-label="YouTube"
            className="text-gray-600 hover:text-red-500 transition-colors duration-200"
          >
            <IconBrandYoutubeFilled fontSize="large" size={30} />
          </a>
        </div>

        {/* Footer Bottom */}
        <div className="text-center mt-8 text-sm text-gray-500">
          <p>&copy;All Rights Reserved By OneATM Technology PVT.LTD.</p>
          <div className="mt-4 space-x-2">
            <Link href="/TermsAndConditions" className="hover:underline">Terms & Conditions</Link> | 
            <Link href="/PrivacyPolicy" className="hover:underline">Privacy Policy</Link> | 
            <Link href="/RefundCancellationPolicy" className="hover:underline">Refund & Cancellation</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
