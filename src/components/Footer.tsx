import React from "react";

const Footer = () => {
  return (
    <footer className="w-full dark:text-white text-slate-900 bg-slate-100 dark:bg-slate-900">
      {/* absolute left-0 bottom-0 */}
      <div className="container">
        <p className="text-center py-5">
          © 2024 next.js . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
