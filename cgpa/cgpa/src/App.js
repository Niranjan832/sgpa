import React, { useState } from "react";

export default function StringManipulator() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const capitalize = (str) => {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  };

  const reverse = (str) => {
    return str.split("").reverse().join("");
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">
        String Manipulation Application
      </h1>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        className="space-y-4 border p-4 rounded shadow"
      >
        <div>
          <label className="block text-sm font-medium">Name:</label>
          <input
            type="text"
            className="border rounded p-2 w-full"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Address:</label>
          <textarea
            className="border rounded p-2 w-full"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter Address"
            required
          />
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Submit
        </button>
      </form>

      {/* Results */}
      {submitted && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Operations */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Name Operations</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <b>Original Name:</b> {name}
              </li>
              <li>
                <b>Padded Start (len=10, *):</b> {name.padStart(10, "*")}
              </li>
              <li>
                <b>Padded End (len=12, -):</b> {name.padEnd(12, "-")}
              </li>
              <li>
                <b>Reversed:</b> {reverse(name)}
              </li>
              <li>
                <b>Capitalized:</b> {capitalize(name)}
              </li>
              <li>
                <b>As Array:</b> [{name.split("").join(", ")}]
              </li>
            </ul>
          </div>

          {/* Address Operations */}
          <div>
            <h2 className="text-lg font-semibold mb-2">Address Operations</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <b>Original Address:</b> {address}
              </li>
              <li>
                <b>Split by , or ; :</b>{" "}
                {address.split(/[,;]/).map((part, i) => (
                  <span key={i}>{part.trim()} | </span>
                ))}
              </li>
              <li>
                <b>Includes "Street":</b>{" "}
                {address.includes("Street") ? "Yes" : "No"}
              </li>
              <li>
                <b>Starts with Number:</b>{" "}
                {Number.isNaN(Number(address.charAt(0))) ? "No" : "Yes"}
              </li>
              <li>
                <b>Ends with '.' :</b> {address.endsWith(".") ? "Yes" : "No"}
              </li>
              <li>
                <b>Replace 'Road' → 'Rd.':</b>{" "}
                {address.replace(/Road/g, "Rd.")}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
