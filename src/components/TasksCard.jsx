import React from "react";

const TasksCard = ({ task, handleDelete, handleUpdate }) => {
  const { taskTitle, status, description, _id } = task;
  return (
    <div
      className={`card bg-primary text-primary-content ${
        status === "completed" && "bg-base-300 text-black"
      }`}
    >
      <div className="card-body">
        <h2 className="card-title">Task title : {taskTitle}</h2>
        <p>
          <span className="font-medium">Status </span>:{" "}
          <span
            className={`${
              status === "pending"
                ? "text-error"
                : status === "completed"
                ? "text-success font-medium"
                : ""
            }`}
          >
            {status}
          </span>
        </p>
        <p>
          <span className="font-medium">Task description</span> : {description}
        </p>
        <div className="flex gap-5 justify-end mt-5">
          <div className="card-actions">
            <button
              disabled={status === "completed"}
              onClick={() => handleUpdate(_id)}
              className="btn btn-sm btn-success"
            >
              mark as read
            </button>
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
