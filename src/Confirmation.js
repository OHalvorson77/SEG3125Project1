import React from "react";

const Confirmation = () => {
  return (
    <div 
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        textAlign: "center",
      }}
    >
      <div 
        style={{
          background: "rgba(255, 255, 255, 0.9)",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          maxWidth: "400px",
          width: "100%",
        }}
      >
        <h2>Thank You for Your Submission!</h2>
        <p>Your request has been successfully submitted. We will get back to you shortly.</p>
      </div>
    </div>
  );
};

export default Confirmation;
