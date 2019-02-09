import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <React.Fragment>
        <footer className="footer ">
          <footer className="container py-5">
            <div className="row">
              <div className="col-12 col-md">

                <small className="d-block mb-3 text-muted"><span>Hidayat Turrahman S.T</span>© 2017-2018</small>
                We provide the best Beard oil all over the world. We are the worldd best store for Beard Oil. You can buy our

    228, East Zone, Momeno Tower, South City, England

    +12546 687 987  / +15425 987 541

    demo@example.com ww.example.com
          </div>



              <div className="col-6 col-md">
                <h5>Resources</h5>
                <ul className="list-unstyled text-small">
                  <li><a className="text-muted" href="a">Resource</a></li>
                  <li><a className="text-muted" href="a">Resource name</a></li>
                  <li><a className="text-muted" href="a">Another resource</a></li>
                  <li><a className="text-muted" href="a">Final resource</a></li>
                </ul>
              </div>
              <div className="col-6 col-md">
                <h5>Resources</h5>
                <ul className="list-unstyled text-small">
                  <li><a className="text-muted" href="a">Business</a></li>
                  <li><a className="text-muted" href="a">Education</a></li>
                  <li><a className="text-muted" href="a">Government</a></li>
                  <li><a className="text-muted" href="a">Gaming</a></li>
                </ul>
              </div>
              <div className="col-6 col-md">
                <h5>News Feed</h5>

              </div>
            </div>
          </footer>
        </footer>
      </React.Fragment>
    )
  }
}