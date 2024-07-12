import React,{ useState } from "react";
export const Contact = (props) => {
  const [state, setState] = useState({name:"",email:"",message:""});

  return (
    <div>   
      <div id="contact">   
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name"
                        required
                        onChange={(e) => setState({ ...state, name: e.target.value })}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        required
                        onChange={(e) => setState({ ...state, email: e.target.value })}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">                
                      <textarea
                        type="text"
                        id="message"
                        name="message"
                        className="form-control"
                        placeholder="Message"
                        rows="4"
                        required
                        onChange={(e) => setState({ ...state, message: e.target.value })}
                      />
                      <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg"  onClick={() => {
                        fetch("http://localhost:3003/entry", {
                            method: "POST",
                            body: JSON.stringify(state),
                            headers: {
                                "Content-Type": "application/json"
                            }
                        })
                            .then((res) => {
                                setState(state);
                                alert("Message sent successfully");
                            });
                    }}>
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Address
                </span>
                {props.data&&props.data.Contact ? props.data.Contact.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Phone
                </span>{" "}
                {props.data&&props.data.Contact ? props.data.Contact.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data&&props.data.Contact ? props.data.Contact.email : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href={props.data&&props.data.Contact ? props.data.Contact.facebook : "/"}>
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data&&props.data.Contact ? props.data.Contact.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.data&&props.data.Contact ? props.data.Contact.youtube : "/"}>
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}; 