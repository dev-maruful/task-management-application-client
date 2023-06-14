import React, { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import TasksCard from "../components/TasksCard";
import { toast } from "react-hot-toast";

const TaskLists = () => {
  const axiosSecure = useAxiosSecure();
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    axiosSecure("/tasks").then((data) => {
      setAllTasks(data?.data);
    });
  }, []);

  const handleDelete = (id) => {
    axiosSecure.delete(`/tasks/${id}`).then((data) => {
      if (data?.data?.deletedCount > 0) {
        toast.success("Task deleted successfully");
        const remaining = allTasks.filter((task) => task._id !== id);
        setAllTasks(remaining);
      }
    });
  };

  return (
    <div>
      <h3 className="text-center text-3xl font-bold mb-10">
        All Tasks : {allTasks.length}
      </h3>
      <div className="grid grid-cols-3 gap-10">
        {allTasks.map((task) => (
          <TasksCard
            key={task?._id}
            task={task}
            handleDelete={handleDelete}
          ></TasksCard>
        ))}
      </div>
    </div>
  );
};

export default TaskLists;
