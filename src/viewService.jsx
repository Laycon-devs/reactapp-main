function viewService(props) {

  return (
    <div>
      <div
        className="modal fade"
        id="staticBackdrop2"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content text-center">
            <div className="modal-header">
              <h1
                className="modal-title fs-3 fw-normal fw-bold"
                id="staticBackdropLabel"
              >
                {props.job.yourName}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-3">
              <div className="card-flush text-center">
                <div className="card-header text-success fw-bold">{props.job.yourName}</div>
                <div className="card-body">
                  <h5 className="card-title">{props.job.skills}</h5>
                  <p className="card-text">{props.job.descrip}</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <a
                      href={`https://wa.me/+234${props.job.whatsappLink}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-success me-3"
                    >
                      <i className="bi bi-whatsapp fs-4"></i>
                    </a>
                    <a
                      className="btn btn-danger"
                      href={`https://mailto:${props.job.emailUrl}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-envelope-at fs-4"></i>
                    </a>
                  </div>
                </div>
                <div className="card-footer text-black fs-5 fw-bold">
                  Phone Number: <span className="text-success">0{props.job.whatsappLink}</span>
                  <br />
                  <span className="fst-italic text-black h6">{props.job.emailUrl}</span>
                </div>


                {/* IMAGE UPLOAD................... */}
                <div className="row g-2 mt-4">
                  <h4 className="fw-bold">
                    My Recent Work
                  </h4>
                  <div className="col">
                    {}
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default viewService;
