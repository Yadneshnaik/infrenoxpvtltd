import React from 'react';

function Home() {
  return (
    <div className="container py-5">
      {/* Welcome Section */}
      <section className="welcome-section text-center">
        <h1>Welcome to Infrenox Pvt Ltd</h1>
        <p>Simplify your billing process with our innovative solutions.</p>
      </section>

      {/* Features Section */}
      <section className="features-section my-5">
        <h2 className="text-center">Why Choose Us?</h2>
        <div className="row text-center mt-4">
          <div className="col-md-4">
            <i className="bi bi-speedometer2" style={{ fontSize: '2rem', color: '#007bff' }}></i>
            <h3>Fast & Efficient</h3>
            <p>Our software ensures quick and seamless billing processes.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-shield-lock" style={{ fontSize: '2rem', color: '#007bff' }}></i>
            <h3>Secure</h3>
            <p>Your data is protected with top-notch security protocols.</p>
          </div>
          <div className="col-md-4">
            <i className="bi bi-pie-chart" style={{ fontSize: '2rem', color: '#007bff' }}></i>
            <h3>Insightful Analytics</h3>
            <p>Get detailed reports to make informed business decisions.</p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="cta-section text-center my-5">
        <h2>Ready to Transform Your Billing Process?</h2>
        <p>Contact us today to learn more about our services and solutions.</p>
        <a href="/contact" className="btn btn-primary btn-lg">Get Started</a>
      </section>
    </div>
  );
}

export default Home;
