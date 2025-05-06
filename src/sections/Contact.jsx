import React, { useRef, useState } from "react";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = ({target:{ name , value }}) => {
    setForm({...form , [name]:value});
  };
  
  const handleSubmit = () => {};

  return (
    <section className="c-space my-10" id='contact'>
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        
        <div className="contact-container">
          <h3 className="head-text">Let's Talk</h3>
          <p className="text-lg text-white-600 mt-3 ">
            whether you are looking for bulding a website or improve your
            existing ones , Im here to help
          </p>
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex-col space-y-7"
          >
            <label className="space-y-3">
              <span className="field-label">Full Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="john Doe"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="johndoe@gmail.com"
              />
            </label>
            <label className="space-y-3">
              <span className="field-label">Message</span>
              <textarea
                type="text"
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                className="field-input"
                placeholder="your message"
              />
            </label>
            <button
              className="field-btn cursor-pointer"
              type="submit"
              disabled={loading}
            >
              {" "}
              {loading ? "sending..." : "Send Message"}{" "}
            </button>
          </form>
        </div>
      </div>
      <h3 className="head-text">Contact Me</h3>
    </section>
  );
};

export default Contact;
