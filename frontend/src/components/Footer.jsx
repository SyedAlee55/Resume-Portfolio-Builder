import React from "react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-16 bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-bold">EnhanCV</h3>
          <p className="text-gray-400 mt-2">Helping you stand out.</p>
        </div>

        <div>
          <h4 className="font-bold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Resume</li>
            <li>Cover Letter</li>
            <li>Pricing</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-3">Social</h4>
          <ul className="space-y-2 text-gray-300">
            <li>Twitter</li>
            <li>LinkedIn</li>
            <li>Facebook</li>
          </ul>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-10">© 2025 EnhanCV Clone. All rights reserved.</p>
    </footer>
  );
}
