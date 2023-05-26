import PropTypes from "prop-types";

export default function Navbar(pro) {
  return (
    <nav
      className={`navbar navbar-expand-lg bg-${pro.mode}`}
      data-bs-theme={pro.mode}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {pro.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse mx-5"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            {/* <li className="nav-item">
              <a className="nav-link" href="/">
                {pro.about}
              </a>
            </li> */}
          </ul>
          <div className={`d-${pro.display} mx-3`}>
            <i
              className="bi bi-circle-fill mx-1 "
              onClick={pro.handleRedMode}
              style={{ color: "rgb(84, 11, 6)" }}
            ></i>
            <i
              className="bi bi-circle-fill mx-1 "
              onClick={pro.handlePinkMode}
              style={{ color: "rgb(84, 6, 55)" }}
            ></i>
            <i
              className="bi bi-circle-fill mx-1 "
              onClick={pro.handleGreenMode}
              style={{ color: "rgb(2, 64, 33)" }}
            ></i>
          </div>
          {/* <form className="d-flex" role="search">
            <input
              className="form-control me-2 bg-light"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </form> */}
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              onClick={pro.toggelMode}
              role="switch"
              id="flexSwitchCheckDefault"
            />
            <label
              className={`form-check-label text-${
                pro.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              Enable Dark Mode
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
};
