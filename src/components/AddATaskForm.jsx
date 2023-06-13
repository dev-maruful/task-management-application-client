import React from "react";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";

const AddATaskForm = () => {
  const axiosSecure = useAxiosSecure();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    axiosSecure.post("/tasks", data).then((data) => {
      if (data?.data?.insertedId) {
        toast.success("Task added successfully");
      } else if (data?.data?.message) {
        toast.error(data?.data?.message);
      }
    });
  };

  return (
    <div className="hero mt-10">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Add A Task!</h1>
        </div>
        <div className="card flex-shrink-0 w-full shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="flex gap-5">
              {" "}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">
                    Task Title
                  </span>
                </label>
                <input
                  {...register("taskTitle", { required: true })}
                  type="text"
                  placeholder="task title"
                  className="input input-bordered"
                />
                {errors.taskTitle?.type === "required" && (
                  <p className="text-error" role="alert">
                    Task title is required
                  </p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">Status</span>
                </label>
                <input
                  {...register("status", { required: true })}
                  type="text"
                  placeholder="status"
                  className="input input-bordered"
                />
                {errors.status?.type === "required" && (
                  <p className="text-error" role="alert">
                    Status is required
                  </p>
                )}
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text text-lg font-medium">
                  Description
                </span>
              </label>
              <textarea
                {...register("description", { required: true })}
                placeholder="description"
                className="textarea textarea-bordered textarea-lg w-full"
              ></textarea>
              {errors.description?.type === "required" && (
                <p className="text-error" role="alert">
                  Description is required
                </p>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-warning btn-outline">Add</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddATaskForm;
