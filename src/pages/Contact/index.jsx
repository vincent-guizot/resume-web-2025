import React, { useState } from "react";
import { TextStyles } from "../../components"; // adjust path
import Swal from "sweetalert2";
import { Mail, Phone, Send } from "lucide-react"; // icons

const Contact = () => {
  const [form, setForm] = useState({ name: "", subject: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = "vincentguizot@yahoo.com";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      form.subject
    )}&body=${encodeURIComponent(`Name: ${form.name}\n\n${form.message}`)}`;

    // Open email client
    window.location.href = mailtoLink;

    // SweetAlert2 popup
    Swal.fire({
      icon: "success",
      title: "Email ready!",
      text: "Your email client has opened with the message ready to send.",
      confirmButtonText: "OK",
      timer: 4000,
    });

    setForm({ name: "", subject: "", message: "" });
  };

  return (
    <div className="px-6 d">
      {/* Styled heading */}
      <TextStyles text="Contact" />

      {/* Contact info grid */}
      <div className="grid grid-cols-2 gap-4 text-gray-700 mb-6">
        <div className="flex items-center gap-2">
          <Mail className="w-5 h-5 text-blue-600" />
          <span className="text-sm">vincentguizot@yahoo.com</span>
        </div>
        <div className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-blue-600" />
          <span className="text-sm">081818801005</span>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name & Subject row */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium">Subject</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block mb-1 text-sm font-medium">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows="5"
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 resize-none"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          <Send className="w-4 h-4" />
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
