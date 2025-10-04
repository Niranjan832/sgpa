import React, { useState } from "react";

export default function SgpaCalculator() {
  const [student, setStudent] = useState({
    name: "",
    rollNo: "",
  });

  const [courses, setCourses] = useState([
    { courseCode: "", creditsEarned: "", totalCredits: "" },
  ]);

  const [sgpa, setSgpa] = useState(null);

  const handleStudentChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleCourseChange = (index, e) => {
    const updatedCourses = [...courses];
    updatedCourses[index][e.target.name] = e.target.value;
    setCourses(updatedCourses);
  };

  const addCourse = () => {
    setCourses([...courses, { courseCode: "", creditsEarned: "", totalCredits: "" }]);
  };

  const calculateSgpa = () => {
    let totalEarned = 0;
    let totalCredits = 0;

    courses.forEach((c) => {
      const earned = parseFloat(c.creditsEarned) || 0;
      const total = parseFloat(c.totalCredits) || 0;

      totalEarned += earned;
      totalCredits += total;
    });

    if (totalCredits === 0) {
      setSgpa(0);
    } else {
      setSgpa((totalEarned / totalCredits) * 10); // SGPA formula (earned/total * 10)
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">SGPA Calculator</h1>

      {/* Student Details */}
      <div className="mb-6 grid grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          value={student.name}
          onChange={handleStudentChange}
          placeholder="Student Name"
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          name="rollNo"
          value={student.rollNo}
          onChange={handleStudentChange}
          placeholder="Roll Number"
          className="border p-2 rounded w-full"
        />
      </div>

      {/* Courses Form */}
      {courses.map((course, index) => (
        <div key={index} className="grid grid-cols-3 gap-4 mb-2">
          <input
            type="text"
            name="courseCode"
            value={course.courseCode}
            onChange={(e) => handleCourseChange(index, e)}
            placeholder="Course Code"
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="creditsEarned"
            value={course.creditsEarned}
            onChange={(e) => handleCourseChange(index, e)}
            placeholder="Credits Earned"
            className="border p-2 rounded"
          />
          <input
            type="number"
            name="totalCredits"
            value={course.totalCredits}
            onChange={(e) => handleCourseChange(index, e)}
            placeholder="Total Credits"
            className="border p-2 rounded"
          />
        </div>
      ))}

      <button
        onClick={addCourse}
        className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
      >
        Add Course
      </button>

      <div className="mt-6">
        <button
          onClick={calculateSgpa}
          className="bg-green-600 text-white px-6 py-2 rounded"
        >
          Calculate SGPA
        </button>
      </div>

      {/* Results Table */}
      {sgpa !== null && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-3">Result</h2>
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-3 py-2">Name</th>
                <th className="border border-gray-400 px-3 py-2">Roll No</th>
                <th className="border border-gray-400 px-3 py-2">SGPA</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-400 px-3 py-2">
                  {student.name}
                </td>
                <td className="border border-gray-400 px-3 py-2">
                  {student.rollNo}
                </td>
                <td className="border border-gray-400 px-3 py-2">
                  {sgpa.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
