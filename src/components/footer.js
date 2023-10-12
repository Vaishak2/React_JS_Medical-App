import { Link } from 'react-router-dom';
function Footer() {
  
  return (
    <div
      className=""
      style={{width:"100%",marginTop:"100px"}}
    >
      {/* <!-- Remove the container if you want to extend the Footer to full width. --> */}
     
        <footer
          className="text-center text-lg-start text-white bg-dark"
          style={{backgroundColor: "#929fba"}}
        >
          {/* <!-- Grid container --> */}
          <div className="container p-4 pb-0">
            {/* <!-- Section: Links --> */}
            <section className="">
              {/* <!--Grid row--> */}
              <div className="row">
                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3 text-left">
                  <h6 className="text-uppercase text-info mb-4 font-weight-bold">
                    MED<span className='text-info'>i</span>STORE
                  </h6>
                  <p className='text-muted'>
                  A website for Medical consulting & ordering.!
                  High quality medicines at lowest rates.!

                  </p>
                </div>
                {/* <!-- Grid column --> */}

                <hr className="w-100 clearfix d-md-none" />

                {/* <!-- Grid column --> */}
                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 text-left">
                  <h6 className="text-uppercase mb-4 text-info font-weight-bold">Products</h6>
                  <p >
                    <Link className="text-muted ">High Dose Meds</Link>
                  </p>
                  <p >
                    <Link className="text-muted">Low Dose Meds</Link>
                  </p>
                  <p >
                    <Link className="text-muted">Homeo Medicines</Link>
                  </p>
                  <p >
                    <Link className="text-muted">English Medicines</Link>
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                <hr className="w-100 clearfix d-md-none" />

                {/* <!-- Grid column --> */}
                <hr className="w-100 clearfix d-md-none" />

                {/* <!-- Grid column --> */}
                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 text-left">
                  <h6 className="text-uppercase mb-4 font-weight-bold text-info">Contact</h6>
                  <p className="text-muted">
                    <i className="fas fa-home mr-3"></i> New York, NY 10012, US
                  </p>
                  <p className="text-muted">
                    <i className="fas fa-envelope mr-3"></i> info@gmail.com
                  </p>
                  <p className="text-muted">
                    <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                  </p>
                  <p className="text-muted">
                    <i className="fas fa-print mr-3"></i> + 01 234 567 89
                  </p>
                </div>
                {/* <!-- Grid column --> */}

                {/* <!-- Grid column --> */}
                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                  <h6 className="text-uppercase mb-4 font-weight-bold text-info text-left ml-2">
                    Follow us
                  </h6>

                  {/* <!-- Facebook --> */}
                  <Link
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: "#3b5998"}}
                    to=""
                    role="button"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </Link>

                  {/* <!-- Twitter --> */}
                  <Link
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: "#55acee"}}
                    to=""
                    role="button"
                  >
                    <i className="fab fa-twitter"></i>
                  </Link>

                  {/* <!-- Google --> */}
                  <Link
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: "#dd4b39"}}
                    to=""
                    role="button"
                  >
                    <i className="fab fa-google"></i>
                  </Link>

                  {/* <!-- Instagram --> */}
                  <Link
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: "#ac2bac"}}
                    to=""
                    role="button"
                  >
                    <i className="fab fa-instagram"></i>
                  </Link>

                  {/* <!-- Linkedin --> */}
                  <Link
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: "#0082ca"}}
                    to=""
                    role="button"
                  >
                    <i className="fab fa-linkedin-in"></i>
                  </Link>
                  {/* <!-- Github --> */}
                  <Link
                    className="btn btn-primary btn-floating m-1"
                    style={{backgroundColor: "#333333"}}
                    to=""
                    role="button"
                  >
                    <i className="fab fa-github"></i>
                  </Link>
                </div>
              </div>
              {/* <!--Grid row--> */}
            </section>
            {/* <!-- Section: Links --> */}
          </div>
          {/* <!-- Grid container --> */}

          {/* <!-- Copyright --> */}
          <div
            className="text-center p-3 text-muted"
            style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}
          >
            © 2020 Copyright:
            <Link className="text-info" href="https://mdbootstrap.com/">
              VK-Designz.com
            </Link>
          </div>
          {/* <!-- Copyright --> */}
        </footer>
        {/* <!-- Footer --> */}
      
      {/* <!-- End of .container --> */}
    </div>
  );
}

export default Footer;
