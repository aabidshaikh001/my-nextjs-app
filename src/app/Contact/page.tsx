'use client';
import React, { useState, ChangeEvent, FormEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import { IconMessageFilled, IconMapPinFilled } from "@tabler/icons-react";
import "react-toastify/dist/ReactToastify.css";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  contactNumber: string;
  message: string;
}

const ContactUsPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    contactNumber: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateForm = (): boolean => {
    const { firstName, email, contactNumber, message } = formData;
    const namePattern = /^[A-Za-z ]+$/;
    const errors = [];

    if (!firstName || !namePattern.test(firstName)) errors.push("Enter a valid first name.");
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.push("Enter a valid email address.");
    if (!contactNumber || !/^\d{10}$/.test(contactNumber)) errors.push("Enter a 10-digit contact number.");
    if (!message || message.length < 10) errors.push("Message must be at least 10 characters.");

    errors.forEach((err) => toast.error(err, { autoClose: 2000 }));
    return errors.length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated fast API call
      toast.success("Your message has been sent successfully!", { autoClose: 2000 });
      setFormData({ firstName: "", lastName: "", email: "", contactNumber: "", message: "" });
    } catch {
      toast.error("Failed to send your message. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 pt-28">
      <ToastContainer />
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Contact Details */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-lg text-gray-600">
            Have a question or need assistance? Fill out the form below, or use the provided
            contact details to reach us.
          </p>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Visit Us</h2>
            <div className="flex items-start mb-4">
              <IconMapPinFilled size={60} className="text-blue-600 mr-3" />
              <p className="text-gray-600">
                3rd Floor, Landmark Cyber Park, Sector 67, Gurugram, Haryana, India, 122102
              </p>
            </div>
            <div className="flex items-start mb-4">
              <IconMessageFilled size={28} className="text-blue-600 mr-3" />
              <div>
                <p className="text-gray-600">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:help@oneatm.in" className="text-blue-600 underline">
                    help@oneatm.in
                  </a>
                </p>
                <p className="text-gray-600">
                  <strong>Cyber Cell:</strong>{" "}
                  <a href="mailto:cybercell@oneatm.in" className="text-blue-600 underline">
                    cybercell@oneatm.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className="block text-gray-700 mb-2">First Name*</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="John"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Doe"
              />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Email*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Contact Number*</label>
            <input
              type="tel"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              placeholder="9876543210"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Your Message*</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"
              rows={4}
              placeholder="Write your message here..."
            />
          </div>
          <button
            type="submit"
            className={`w-full py-3 rounded-lg text-white ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}`}
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
