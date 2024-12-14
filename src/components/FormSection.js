import { useState } from "react";
import "./FormSection.css";

export function FormSection() {
  const form_details = {
    title: "How to reach us",
    description: "Lorem ipsum dolor sit amet, consetetur.",
    fields: [
      "First Name*",
      "Last Name*",
      "Email*",
      "Telephone",
      " Message*",
      "Submit",
    ],
    terms: "I agree to the Terms & Conditions",
  };

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    telephone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const fieldValidation = () => {
    const errorMessages = {};
    if (!formData.firstname)
      errorMessages.firstname = "First Name is required.";
    if (!formData.lastname) errorMessages.lastname = "Last Name is required.";
    if (!formData.email) {
      errorMessages.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errorMessages.email = "Email is invalid.";
    }
    if (!/^\d{10}$/.test(formData.telephone)) {
      errorMessages.telephone = "Telephone must be a 10-digit number.";
    }
    if (!formData.message) errorMessages.message = "Message is required.";

    return errorMessages;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = fieldValidation();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      fetch("http://localhost:8000/form-controller.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
        .then((res) => {
          if (res.ok) {
            alert("Form submitted successfully!");
            setFormData({
              firstname: "",
              lastname: "",
              email: "",
              telephone: "",
              message: "",
            });
            setErrors({});
          } else {
            alert("Form submission failed!");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="form-section">
      <div className="form-header">
        <h2>{form_details.title}</h2>
        <p>{form_details.description}</p>
      </div>

      <div className="form-layout">
        <form className="form" onSubmit={handleSubmit} noValidate>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div className="form-field name-field">
              <label>{form_details.fields[0]}</label>
              <input
                type="text"
                name="firstname"
                value={formData.firstname}
                onChange={handleChange}
                style={{
                  height: "2rem",
                  backgroundColor: "#3C3C3C",
                  color: "white",
                  borderRadius: "5px",
                  border: "none",
                }}
              />
              {errors.firstname && (
                <p style={{ color: "red", margin: "5px 0px" }}>
                  {errors.firstname}
                </p>
              )}
            </div>

            <div className="form-field name-field">
              <label>{form_details.fields[1]}</label>
              <input
                type="text"
                name="lastname"
                value={formData.lastname}
                onChange={handleChange}
                style={{
                  height: "2rem",
                  backgroundColor: "#3C3C3C",
                  borderRadius: "5px",
                  color: "white",
                  border: "none",
                }}
              />
              {errors.lastname && (
                <p style={{ color: "red", margin: "5px 0px" }}>
                  {errors.lastname}
                </p>
              )}
            </div>
          </div>

          <div className="form-field">
            <label>{form_details.fields[2]}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{
                height: "2rem",
                backgroundColor: "#3C3C3C",
                borderRadius: "5px",
                color: "white",
                border: "none",
              }}
            />
            {errors.email && (
              <p style={{ color: "red", margin: "5px 0px" }}>{errors.email}</p>
            )}
          </div>

          <div className="form-field">
            <label>{form_details.fields[3]}</label>
            <input
              type="text"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              style={{
                height: "2rem",
                backgroundColor: "#3C3C3C",
                borderRadius: "5px",
                color: "white",
                border: "none",
              }}
            />
            {errors.telephone && (
              <p style={{ color: "red", margin: "5px 0px" }}>
                {errors.telephone}
              </p>
            )}
          </div>

          <div className="form-field">
            <label>{form_details.fields[4]}</label>
            <textarea
              type="text"
              name="message"
              value={formData.message}
              onChange={handleChange}
              style={{
                height: "4rem",
                backgroundColor: "#3C3C3C",
                borderRadius: "5px",
                color: "white",
                border: "none",
              }}
            />
            {errors.message && (
              <p style={{ color: "red", margin: "5px 0px" }}>
                {errors.message}
              </p>
            )}
          </div>

          <div style={{ display: "flex", gap: "1rem" }}>
            <input type="checkbox" />
            <p>{form_details.terms}</p>
          </div>

          <div className="submit-btn">
            <button className="btn" type="submit">
              {form_details.fields[5]}
            </button>
          </div>
        </form>

        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.3811634179897!2d79.93785737397691!3d6.84482651934799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25069caa2f53b%3A0xe7eae3a8b1f1214d!2seBEYONDS%20eBusiness%20%26%20Digital%20Solutions!5e0!3m2!1sen!2slk!4v1734095469696!5m2!1sen!2slk"
            title="Company location"
            width="100%"
            height="440"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
