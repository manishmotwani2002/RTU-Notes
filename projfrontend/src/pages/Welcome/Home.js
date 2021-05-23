import React, { useState, useContext } from "react";

import { Context as notesContext } from "../../context/notesContext";
import "./Home";
import Card from "../../component/Card";

const Home = () => {
  const { filterNotes, state } = useContext(notesContext);

  const [semester, setSemester] = useState(0);
  const [branch, setBranch] = useState("");
  const [subject, setSubject] = useState("");

  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];
  const branches = ["CSE", "IT", "ECE", "EE", "ME", "CIVIL"];
  const subjects = [
    "Engg. Maths-1(first sem,all branch)",
    "Engg. Maths-2(second sem,all branch)",
  ];

  const handleChange = (event) => {
    filterNotes({ branch, semester, subject });
    console.log("array", state.postArray);
    state.postArray.map((post, index) => {
      return <Card post={post} />;
    });
  };

  return (
    <div className="my-10">
      <div className="form-style-6">
        <h1>
          Welcome to our website, To get notes select the specifications below
        </h1>
        <label>Branch</label>
        <select
          name="lavesh"
          onChange={(e) => setBranch(e.target.value)}
          placeholder="branch"
          className="form-style-6"
        >
          <option>Select</option>
          {branches.map((branch, index) => {
            return (
              <option key={index} value={branch}>
                {branch}
              </option>
            );
          })}
        </select>

        <label>Semester</label>
        <select
          onChange={(e) => setSemester(e.target.value)}
          placeholder="semester"
        >
          <option>Select</option>
          {semesters.map((sem, index) => {
            return (
              <option key={index} value={sem}>
                {sem}
              </option>
            );
          })}
        </select>

        <label>Subject</label>
        <select
          onChange={(e) => setSubject(e.target.value)}
          placeholder="subject"
        >
          <option>Select</option>
          {subjects.map((sub, index) => {
            return (
              <option key={index} value={sub}>
                {sub}
              </option>
            );
          })}
        </select>

        <button
          onClick={(event) => {
            event.preventDefault();
            filterNotes({ branch, semester, subject });
          }}
        >
          Get Notes
        </button>
      </div>
      {state.postArray.map((post, index) => {
        console.log("Hellodkjhdb", post);
        return (
          <div key={index}>
            <Card post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
