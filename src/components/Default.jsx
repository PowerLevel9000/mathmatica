import React from 'react';
import { Link } from 'react-router-dom';

const Default = () => (
  <section role="separator" className="page_404">
    <div className="wrapper404">
      <h3 className="h2">
        Look like you&apos;re lost
      </h3>
      <p>the page you are looking for not avaible!</p>
      <Link to="/mathmatica" className="link_404">Go to Home</Link>
    </div>
  </section>
);

export default Default;
