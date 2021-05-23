import React, { useContext } from "react";
import { Context as NoteContext } from "../context/notesContext";
import { useParams } from "react-router-dom";
import Card from "./Card";

const AdminProfile = () => {
  const params = useParams();
  const { AllNotes, state } = useContext(NoteContext);

  return (
    <div>
      <h1>Hello to Admin Panel</h1>
      <button
        onClick={(event) => {
          event.preventDefault();
          AllNotes({ userId: params.userId });
        }}
      >
        Click Here to View all Notes
      </button>
      {state.adminArray.map((post, index) => {
        console.log("lavesh", post, state.adminArray.length);
        return (
          <div key={index}>
            <Card post={post} />
          </div>
        );
      })}
    </div>
  );
};

export default AdminProfile;
