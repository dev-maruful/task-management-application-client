import React from "react";

const TasksCard = ({ task, handleDelete }) => {
  const { taskTitle, status, description, _id } = task;
  return (
    <div className="card  bg-primary text-primary-content">
      <div className="card-body">
        <h2 className="card-title">{taskTitle}</h2>
        <p>Status : {status}</p>
        <p>Task description : {description}</p>
        <div className="flex gap-5 justify-end mt-5">
          <div className="card-actions">
            <button className="btn btn-sm btn-success">mark as read</button>
          </div>
          <div className="card-actions">
            <button
              onClick={() => handleDelete(_id)}
              className="btn btn-sm btn-error"
            >
              delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TasksCard;
