import React, { useState, useContext } from "react";
import "./signUpForm.css";
import { Context as NotesContext } from "../context/notesContext";
import { useParams } from "react-router-dom";

const PostForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  const [semester, setSemester] = useState(0);
  const [branch, setBranch] = useState("");
  const [subject, setSubject] = useState("");
  const { createNotes } = useContext(NotesContext);
  const params = useParams();
  const semesters = [1, 2, 3, 4, 5, 6, 7, 8];
  const branches = ["CSE", "IT", "ECE", "EE", "ME", "CIVIL"];
  const subjects = [
    "Engg. Maths-1(first sem,all branch)",
    "Engg. Maths-2(second sem,all branch)",
  ];
  const handleSubmit = (event) => {
    event.preventDefault();
    createNotes({
      title: title,
      description: description,
      content: content,
      semester: semester,
      branch: branch,
      subject: subject,
      userId: params.userId,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-style-6">
        <h1>Upload Notes Form</h1>

        <label>Title</label>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>

        <label>Description</label>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        ></input>

        <label>Link of PDF</label>
        <input
          type="text"
          placeholder="Enter The Link Of Pdf"
          value={content}
          onChange={(event) => setContent(event.target.value)}
        ></input>

        <label>Branch</label>
        <select
          name="lavesh"
          onChange={(e) => setBranch(e.target.value)}
          placeholder="branch"
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

        <button type="submit">Upload Notes</button>
      </div>
    </form>
  );
};

export default PostForm;
