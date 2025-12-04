import React from "react";

export default function Testimonials() {
  const items = [
    { name: "Sarah", text: "Got interviews within 3 days!" },
    { name: "Daniel", text: "My resume finally looks professional." },
    { name: "Aisha", text: "Best resume builder I've ever used." },
  ];

  return (
    <section className="py-16 px-6 lg:px-16 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white">Loved by job seekers worldwide</h2>

        <div className="grid md:grid-cols-3 gap-8 mt-10">
          {items.map((it, idx) => (
            <div key={idx} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow">
              <p className="italic text-gray-700 dark:text-gray-300">“{it.text}”</p>
              <p className="font-bold text-gray-900 dark:text-white mt-4">— {it.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
