import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import TasksCard from "../components/TasksCard";
import { toast } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const TaskLists = () => {
  const axiosSecure = useAxiosSecure();

  const { data: allTasks = [], refetch } = useQuery(["allTasks"], async () => {
    const res = await axiosSecure("/tasks");
    return res.data;
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/tasks/${id}`).then((data) => {
          if (data?.data?.deletedCount > 0) {
            Swal.fire("Deleted!", "Your task has been deleted.", "success");
            refetch();
          }
        });
      }
    });
  };

  const handleUpdate = (id) => {
    axiosSecure.patch(`/tasks/${id}`).then((data) => {
      if (data?.data?.modifiedCount > 0) {
        toast.success("Task updated to read successfully");
        refetch();
      }
    });
  };

  return (
    <div>
      <h3 className="text-center text-3xl font-bold mb-10">
        All Tasks : {allTasks.length}
      </h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 mx-5 lg:mx-0 gap-10">
        {allTasks.map((task) => (
          <TasksCard
            key={task?._id}
            task={task}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          ></TasksCard>
        ))}
      </div>
    </div>
  );
};

export default TaskLists;
