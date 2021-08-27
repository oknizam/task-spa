import "./App.css";
import React from "react";
import MetaTags from "react-meta-tags";

function Home() {
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setlastName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [pin, setPin] = React.useState("");
  const [dist, setDist] = React.useState("");
  const [country, setCountry] = React.useState("");
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <>
      <MetaTags>
        <title>Home</title>
        <meta name="description" content="Single page app" />
        <meta property="og:title" content="Single page app" />
      </MetaTags>
      <div className="row p-4" style={{ margin: 0 }}>
        <div className="col-lg-4">
          <div className="mb-3">
            <label className="form-label">First Name</label>
            <input
              type="text"
              className={`form-control ${
                firstName ? "is-valid" : "is-invalid"
              }`}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            {!firstName && (
              <div id="validationServer03Feedback" className="invalid-feedback">
                Please enter first name.
              </div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Last Name</label>
            <input
              type="text"
              className="form-control"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Telephone No</label>
            <input
              type="number"
              className={`form-control ${
                phone.length >= 10 && phone.length < 11
                  ? "is-valid"
                  : "is-invalid"
              }`}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
            {phone.length < 10 && (
              <div id="validationServer03Feedback" className="invalid-feedback">
                Please enter 10 digit phone number.
              </div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="text"
              className={`form-control ${
                re.test(String(email).toLowerCase()) ? "is-valid" : "is-invalid"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {!re.test(String(email).toLowerCase()) && (
              <div id="validationServer03Feedback" className="invalid-feedback">
                Please enter valid email.
              </div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Address</label>
            <textarea
              className={`form-control ${address ? "is-valid" : "is-invalid"}`}
              rows="3"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            {!address && (
              <div id="validationServer03Feedback" className="invalid-feedback">
                Please enter address.
              </div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Pincode</label>
            <input
              type="text"
              className={`form-control ${
                pin.length >= 6 ? "is-valid" : "is-invalid"
              }`}
              onChange={(e) => setPin(e.target.value)}
              required
            />
            {!pin.length < 6 && pin.length >= 7 && (
              <div id="validationServer03Feedback" className="invalid-feedback">
                Please enter 6 pincode.
              </div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">District</label>
            <input
              type="text"
              className={`form-control ${dist ? "is-valid" : "is-invalid"}`}
              value={dist}
              onChange={(e) => setDist(e.target.value)}
              required
            />
            {!dist && (
              <div id="validationServer03Feedback" className="invalid-feedback">
                Please enter District.
              </div>
            )}
          </div>
          <div className="mb-3">
            <label className="form-label">Country</label>
            <input
              type="text"
              className={`form-control ${country ? "is-valid" : "is-invalid"}`}
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            />
            {!country && (
              <div id="validationServer03Feedback" className="invalid-feedback">
                Please enter Country.
              </div>
            )}
          </div>
        </div>
        <div className="col-lg-8">
          <p>
            {firstName} Lorem Ipsum is simply dummy text of the printing{" "}
            {lastName} and typesetting industry. Lorem Ipsum has been the
            industry&#39;s {phone} standard dummy text ever since the 1500s,
            when
            {email} an unknown printer took a galley of type and scrambled it to
            make a type specimen book. It
            {address} has survived not only five centuries, but also the leap
            into electronic typesetting, remaining {pin} essentially unchanged.
            It was popularized in the 1960s {dist} with the release of Letraset
            sheets containing Lorem Ipsum passages, and more recently with
            desktop publishing {country}
            software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
