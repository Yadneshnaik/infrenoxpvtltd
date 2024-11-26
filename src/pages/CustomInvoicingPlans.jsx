import React from 'react';
import { Link } from 'react-router-dom'; 

function CustomInvoicingPlans() {
  return (
    <div className="container py-5">
      <h2 className="text-center">Custom Invoicing Plans</h2>
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Starter Plan</h5>
              <p className="card-text">₹1500/month</p>
              <ul>
                <li>Custom invoice templates</li>
                <li>Basic invoice tracking</li>
                <li>Up to 50 invoices per month</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Business Plan</h5>
              <p className="card-text">₹1500/month</p>
              <ul>
                <li>Custom branding</li>
                <li>Invoice automation</li>
                <li>Up to 200 invoices per month</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Premium Plan</h5>
              <p className="card-text">₹1500/month</p>
              <ul>
                <li>Multiple currencies</li>
                <li>Advanced invoice automation</li>
                <li>Unlimited invoices</li>
              </ul>
              <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomInvoicingPlans;
