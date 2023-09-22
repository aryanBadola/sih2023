import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

const HomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="index">
      <div className="div">
        
      
        <p className="welcome-to-a-living">
          <p className="text-wrapper">Welcome to A living ecosystem to find best lawyers, legal information, empower yourself with great legal tech and grow your legal business. </p>
          {/* <p className="p">best lawyers, legal information</p>
          <p className="text-wrapper">, empower yourself with </p>
          <p className="p">great legal tech</p>
          <p className="text-wrapper"> and grow your legal business.</p> */}
        </p>
       
        <div className="overlap">
          <div className="text-wrapper-2">Chat with us</div>
          <img
            className="right-arrow"
            alt="Right arrow"
            src="https://cdn.animaapp.com/projects/650686d58cf5b8425321283e/releases/650c7019f3ee8909211e2134/img/right-arrow.svg"
          />
        </div>
        <div className="overlap-group">
          <img
            className="polygon"
            alt="Polygon"
            src="https://cdn.animaapp.com/projects/650686d58cf5b8425321283e/releases/650c7019f3ee8909211e2134/img/polygon-1.png"
          />
          <img
            className="img"
            alt="Polygon"
            src="https://cdn.animaapp.com/projects/650686d58cf5b8425321283e/releases/650c7019f3ee8909211e2134/img/polygon-2@2x.png"
          />
        </div>
        <div className="match-card">
          <div className="overlap-group-2">
            <img
              className="match-logo"
              alt="Match logo"
              src="https://cdn.animaapp.com/projects/650686d58cf5b8425321283e/releases/650c7019f3ee8909211e2134/img/match-logo.png"
            />
            <div className="text-wrapper-3">Match</div>
            <div className="overlap-2">
              <img
                className="right-arrow-2"
                alt="Right arrow"
                src="https://cdn.animaapp.com/projects/650686d58cf5b8425321283e/releases/650c7019f3ee8909211e2134/img/right-arrow-1.svg"
              />
              <p className="p">A place for legal professionals and consumers to connect and collaborate</p>
              <div className="text-wrapper-4">Find a Lawyer</div>
            </div>
            <img
              className="women-photo"
              alt="Women photo"
              src="https://cdn.animaapp.com/projects/650686d58cf5b8425321283e/releases/650c7019f3ee8909211e2134/img/women-photo.png"
            />
          </div>
        </div>
        <div className="for-you-and-your">
          <div className="overlap-3">
            <div className="overlap-group-3">
              <img
                className="right-arrow-3"
                alt="Right arrow"
                src="https://cdn.animaapp.com/projects/650686d58cf5b8425321283e/releases/650c7019f3ee8909211e2134/img/right-arrow-2.svg"
              />
              <div className="text-wrapper-5">Find a Lawyer</div>
              <p className="text-wrapper-6">
                From wills to powers of attorney, the right estate planning documents can safeguard you and your loved
                ones—both now, and later such as Last Will, Living Trust, Power of Attorney etc.
              </p>
            </div>
            <p className="text-wrapper-7">For you and your family</p>
            <img
              className="match-logo-2"
              alt="Match logo"
              src="https://cdn.animaapp.com/projects/650686d58cf5b8425321283e/releases/650c7019f3ee8909211e2134/img/match-logo.png"
            />
          </div>
        </div>
        <div className="features-card">
          <div className="overlap-4">
            <div className="text-wrapper-8">Our Platform provides</div>
            <p className="text-wrapper-9">Help you find the best advocate for your need.</p>
            <p className="text-wrapper-10">Search the lawyers according to your needs.</p>
            <p className="text-wrapper-11">Find the latest information and legal help.</p>
            <p className="text-wrapper-12">Keeps the client`s data safe and secure.</p>
            <img
              className="line"
              alt="Line"
              src="https://cdn.animaapp.com/projects/650686d58cf5b8425321283e/releases/650c7019f3ee8909211e2134/img/line-1.svg"
            />
            <img
              className="line-2"
              alt="Line"
              src="https://cdn.animaapp.com/projects/650686d58cf5b8425321283e/releases/650c7019f3ee8909211e2134/img/line-1.svg"
            />
            <img
              className="line-3"
              alt="Line"
              src="https://cdn.animaapp.com/projects/650686d58cf5b8425321283e/releases/650c7019f3ee8909211e2134/img/line-1.svg"
            />
          </div>
        </div>
        <div className="for-your">
          <div className="overlap-5">
            <div className="overlap-group-4">
              <img
                className="right-arrow-4"
                alt="Right arrow"
                src="https://cdn.animaapp.com/projects/650686d58cf5b8425321283e/releases/650c7019f3ee8909211e2134/img/right-arrow-2.svg"
              />
              <div className="text-wrapper-13">Find a Lawyer</div>
            </div>
            <p className="text-wrapper-14">
              Need to trademark your logo, copyright a creative work, or patent an invention? Protect yourself against
              copycats.
            </p>
            <div className="text-wrapper-15">For your intellectual property</div>
            <img
              className="match-logo-3"
              alt="Match logo"
              src="https://cdn.animaapp.com/projects/650686d58cf5b8425321283e/releases/650c7019f3ee8909211e2134/img/match-logo.png"
            />
          </div>
        </div>
        <div className="client-trust-sec">
          <div className="overlap-6">
            <img
              className="hand-photo"
              alt="Hand photo"
              src="https://cdn.animaapp.com/projects/650686d58cf5b8425321283e/releases/650c7019f3ee8909211e2134/img/hand-photo.png"
            />
            <div className="text-wrapper-16">LEGAL PROFESSIONAL?</div>
            <div className="overlap-group-5">
              <p className="text-wrapper-17">Why our clients trust us?</p>
              <img
                className="search-icon"
                alt="Search icon"
                src="https://cdn.animaapp.com/projects/650686d58cf5b8425321283e/releases/650c7019f3ee8909211e2134/img/search-icon.svg"
              />
              <p className="a-highly-qualified">
                A highly qualified and diverse pool of top legal talent, handpicked by experienced recruiters to fit
                your organization&#39;s specific needs.
              </p>
            </div>
            <p className="text-wrapper-18">
              Find the right fit at the speed of business, and scale your team in days, not weeks.
            </p>
            <p className="text-wrapper-19">
              Hire talent at transparent and competitive rates. Save 60% over traditional law firms without trading off
              on quality.
            </p>
            <img
              className="briefcase-icon"
              alt="Briefcase icon"
              src="https://cdn.animaapp.com/projects/650686d58cf5b8425321283e/releases/650c7019f3ee8909211e2134/img/briefcase-icon.svg"
            />
            <img
              className="dollar-icon"
              alt="Dollar icon"
              src="https://cdn.animaapp.com/projects/650686d58cf5b8425321283e/releases/650c7019f3ee8909211e2134/img/dollar-icon.svg"
            />
          </div>
        </div>
        <footer className="footer">
          <p className="text-wrapper-20">© 2023 Team Dev Yogis. All rights reserved.</p>
        </footer>
        <div className="navbar">
          <div className="overlap-7">
            <div className="text-wrapper-21">icon</div>
            <div className="advocate" onClick={()=>navigate('/Card')}>Advocates</div>
            <div className="advocate-2">News</div>
            <div className="text-wrapper-22" onClick={()=>navigate('/chatWithUs')}>Chat with us!</div>
            <div className="join-as-lawyer-btn">
              <div className="div-wrapper">
                <div className="text-wrapper-23" onClick={()=>navigate('/lawyerSignup')
                }>Join as a lawyer</div>
              </div>
            </div>
            <div className="create-account-btn">
              <div className="overlap-8">
                <div className="text-wrapper-24" onClick={()=>navigate('/userSignup')}>Create Account</div>
              </div>
            </div>
            <button className="login-btn">
              <div className="overlap-9">
                <div className="text-wrapper-25" onClick={()=>navigate('/lawyerLogin')}>Login</div>
              </div>
            </button>
          </div>
          <img
            className="navbar-line"
            alt="Navbar line"
            src="https://cdn.animaapp.com/projects/650686d58cf5b8425321283e/releases/650c7019f3ee8909211e2134/img/navbar-line.svg"
          />
        </div>
      </div>
    </div>
  );
};
export default HomePage;