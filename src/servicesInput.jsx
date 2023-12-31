import { useState } from "react";
import { firestore } from "./firebase";
import { collection, addDoc } from "firebase/firestore";

function servicesInput({ handleUpload, myImg }) {
  // State variables for form inputs
  const [newName, setNewName] = useState("");
  const [newSkills, setNewSkills] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [newdescrip, setNewDescrip] = useState("");
  const [newEmailUrl, setNewEmailUrl] = useState("");
  const [newWhatsappLink, setNewWhatsappLink] = useState("");
  
  const jobscollectionRef = collection(firestore, "jobs");

  // Function to submit a new job
  const onSubmitNewJob = async () => {
    try {
      await addDoc(jobscollectionRef, {
        yourName: newName,
        skills: newSkills,
        location: newLocation,
        descrip: newdescrip,
        emailUrl: newEmailUrl,
        whatsappLink: newWhatsappLink,
        imgUrl: myImg
      });
    } catch (err) {
      console.error(err);
    }
  };
  // console.log(myImg);
  return (
    <div>
      {/* Services Modal */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabindex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content text-center">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Post a Service
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-5">
              <div className="row row-cols-1 row-cols-md-2 g-4 fw-bold">
                <div className="col">
                  <input
                    onChange={(e) => setNewName(e.target.value)}
                    type="text"
                    className="form-control p-3"
                    placeholder="Name"
                  />
                </div>
                <div className="col">
                  <select
                    onChange={(e) => setNewSkills(e.target.value)}
                    className="form-select p-3 text-center"
                    id="inputGroupSelect01"
                  >
                    <option>Tailoring and Fashion Design</option>
                    <option>Carpentry and Woodworking</option>
                    <option>Welding and Metal Fabrication</option>
                    <option>Plumbing</option>
                    <option>Masonry and Bricklaying</option>
                    <option>Hairdressing and Beauty Therapy</option>
                    <option>Catering and Culinary Arts</option>
                    <option>Auto Mechanics</option>
                    <option>Electrical Installation and Repair</option>
                    <option>Agriculture and Farming</option>
                    <option>Soap Making and Detergent Production</option>
                    <option>Bead Making and Jewelry Design</option>
                    <option>Interior Decoration</option>
                    <option>Painting and Wall Finishing</option>
                    <option>Furniture Making</option>
                    <option>Leatherwork and Shoe Making</option>
                    <option>Event Planning and Management</option>
                    <option>Graphic Design and Printing</option>
                    <option>Textile Design and Printing</option>
                    <option>Pottery and Ceramics</option>
                    <option>Landscaping and Gardening</option>
                    <option>
                      Renewable Energy Installation and Maintenance
                    </option>
                    <option>Refrigeration and Air Conditioning Repair</option>
                    <option>Digital Marketing</option>
                    <option>Sewing and Embroidery</option>
                    <option>Bicycle and Motorcycle Repair</option>
                    <option>Poultry Farming</option>
                    <option>Fish Farming (Aquaculture)</option>
                    <option>Tailoring and Textile Design</option>
                    <option>Soap Making and Cosmetics Production</option>
                    <option>Animal Husbandry</option>
                    <option>Beekeeping</option>
                    <option>Waste Management and Recycling</option>
                    <option>Photography and Videography</option>
                    <option>Carpentry and Joinery</option>
                    <option>Hair Braiding and Weaving</option>
                    <option>Electronics Repair</option>
                    <option>Floristry and Flower Arrangement</option>
                    <option>Pottery and Clay Sculpting</option>
                    <option>Auto Body Repair</option>
                    <option>Basket Weaving</option>
                    <option>Carp Fishing</option>
                    <option>Roofing Installation and Repair</option>
                    <option>Shoe Repair and Cobbling</option>
                    <option>Fruits and Vegetable Processing</option>
                    <option>Brickmaking</option>
                    <option>Candle Making</option>
                    <option>Herbal Medicine Production</option>
                    <option>Dairy Farming</option>
                    <option>Building Painting and Decorating</option>
                    <option>Snail Farming</option>
                    <option>Tile Laying and Installation</option>
                    <option>Handicrafts (Beads, Crafts, etc.)</option>
                    <option>Furniture Upholstery</option>
                    <option>Food Processing and Packaging</option>
                    <option>Computer Literacy</option>
                    <option>Software Developer</option>
                    <option>Basic Coding and Programming</option>
                    <option>
                      Graphic Design using Software (e.g., Adobe Suite)
                    </option>
                    <option>Web Development</option>
                    <option>Social Media Management</option>
                    <option>Search Engine Optimization (SEO)</option>
                    <option>Content Creation and Blogging</option>
                    <option>Digital Photography and Photo Editing</option>
                    <option>Video Editing</option>
                    <option>E-commerce Management</option>
                    <option>Data Entry and Analysis</option>
                    <option>Email Marketing</option>
                    <option>
                      Online Advertising (Google Ads, Facebook Ads)
                    </option>
                    <option>UI/UX Designer</option>
                    <option>Mobile App Development</option>
                    <option>Cybersecurity Developer</option>
                    <option>Cloud Computing (e.g., AWS, Azure)</option>
                    <option>
                      Virtual Reality (VR) and Augmented Reality (AR)
                    </option>
                    <option>3D Modeling and Animation</option>
                    <option>Digital Copywriting</option>
                    <option>illustration Designer</option>
                    <option>E-book Publishing</option>
                    <option>Online Course Creation</option>
                    <option>Influencer Marketing</option>
                    <option>Digital Analytics</option>
                    <option>Podcasting and Audio Editing</option>
                    <option>Remote Work Tools and Collaboration</option>
                    <option>Online Payment Systems</option>
                    <option>Online Customer Support</option>
                    <option>Data Visualization</option>
                    <option>Affiliate Marketing</option>
                    <option>Internet Research</option>
                    <option>Barber</option>
                    <option>Social Media Advertising</option>
                    <option>Digital Project Management</option>
                    <option>Cryptocurrency and Blockchain Basics</option>
                    <option>Online Fundraising and Crowdfunding</option>
                    <option>Digital Music Production</option>
                    <option>Online Reputation Management</option>
                    <option>Web Analytics</option>
                    <option>Mobile Marketing</option>
                    <option>Virtual Assistance</option>
                    <option>Online Survey Design and Analysis</option>
                    <option>Digital Health Technologies</option>
                    <option>Digital Product Design</option>
                    <option>Online Networking and Relationship Building</option>
                    <option>Online Tutoring and Teaching</option>
                    <option>Internet of Things (IoT) Concepts</option>
                    <option>Voice Search Optimization</option>
                    <option>Digital Event Planning and Management</option>
                    <option>Data Privacy and GDPR Compliance</option>
                    <option>Online Language Translation</option>
                  </select>
                </div>
                <div className="col">
                  <select
                    onChange={(e) => setNewLocation(e.target.value)}
                    className="form-select p-3 text-center"
                    id="inputGroupSelect01"
                  >
                    <option>Ado Ekiti</option>
                    <option>Efon</option>
                    <option>Ekiti East</option>
                    <option>Ekiti South-West</option>
                    <option>Ekiti West</option>
                    <option>Emure</option>
                    <option>Gbonyin</option>
                    <option>Ido Osi</option>
                    <option>Ijero Ekiti</option>
                    <option>Ikere Ekiti</option>
                    <option>Ikole Ekiti</option>
                    <option>Ilejemeje</option>
                    <option>Irepodun/Ifelodun</option>
                    <option>Ise/Orun</option>
                    <option>Moba</option>
                    <option>Oye Ekiti</option>
                  </select>
                </div>
                <div className="col">
                <div className="fw-bold">
                    Your recent Work here
                    <input
                      type="file"
                      className="form-control p-3"
                      id="inputFile"
                      placeholder="Upload your recent work"
                      onChange={(e) => handleUpload(e)}
                    />
                  </div>
                </div>
                <div className="col input-group">
                  <span className="input-group-text" id="inputGroup-sizing-sm">
                    +234
                  </span>
                  <input
                    onChange={(e) => setNewWhatsappLink(e.target.value)}
                    type="text"
                    className="form-control p-3"
                    placeholder="WhatsApp"
                    maxLength={10}
                  />
                </div>
                <div className="col">
                  <input
                    onChange={(e) => setNewDescrip(e.target.value)}
                    type="text"
                    className="form-control p-3"
                    placeholder="Describe your recent work here"
                  />
                </div>
                <div className="col">
                <input
                    onChange={(e) => setNewEmailUrl(e.target.value)}
                    type="text"
                    className="form-control p-3"
                    placeholder="Enter Work Email"
                  />
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-warning"
                data-bs-dismiss="modal"
                onClick={() => {
                  onSubmitNewJob();
                }}
                data-bs-toggle="modal"
                data-bs-target="#exampleModalsuccessmsg"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal fade"
        id="exampleModalsuccessmsg"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body text-center">
              <img
                className="img-fluid w-50"
                src="./img/checked.webp"
                alt="posted successful"
              />
              <h3 className="text-success fw-bold">
                Service Posted Successfully
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default servicesInput;
