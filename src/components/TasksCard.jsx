import React from "react";

const TasksCard = ({ task, handleDelete, handleUpdate }) => {
  const { taskTitle, status, description, _id } = task;
  return (
    <div
      className={`card ${
        status === "completed"
          ? "bg-gray-100 text-black"
          : "bg-primary text-primary-content"
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
              mark as completed
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
