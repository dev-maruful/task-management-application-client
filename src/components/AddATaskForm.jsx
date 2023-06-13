import React from "react";

const AddATaskForm = () => {
  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Add A Task!</h1>
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="flex gap-5">
              {" "}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">
                    Task Title
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="task title"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">Status</span>
                </label>
                <input
                  type="text"
                  placeholder="status"
                  className="input input-bordered"
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Description
                </span>
              </label>
              <textarea
                placeholder="description"
                className="textarea textarea-bordered textarea-lg w-full"
              ></textarea>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-warning btn-outline">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddATaskForm;
