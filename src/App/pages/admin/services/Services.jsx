import React, { useEffect } from "react";

const Services = () => {
  useEffect(() => {
    document.title = "Services";
  }, []);
  return (
    <React.Fragment>
      <p className="text-blue-900 text-6xl">Services</p>
    </React.Fragment>
  );
};

export default Services;
