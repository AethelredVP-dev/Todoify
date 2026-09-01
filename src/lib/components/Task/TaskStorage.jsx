"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTasks } from "@/features/TaskSlice";

const TASKS_STORAGE_KEY = "todoify-tasks";

function TaskStorage() {
    const dispatch = useDispatch();
    const tasks = useSelector((state) => state.task.tasks);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {
        const savedTasks = window.localStorage.getItem(TASKS_STORAGE_KEY);

        if (!savedTasks) {
            setHasLoaded(true);
            return;
        }

        try {
            const parsedTasks = JSON.parse(savedTasks);

            if (Array.isArray(parsedTasks)) {
                dispatch(setTasks(parsedTasks));
            }
        } catch (error) {
            console.error("Could not restore saved tasks:", error);
            window.localStorage.removeItem(TASKS_STORAGE_KEY);
        } finally {
            setHasLoaded(true);
        }
    }, [dispatch]);

    useEffect(() => {
        if (!hasLoaded) return;

        window.localStorage.setItem(
            TASKS_STORAGE_KEY,
            JSON.stringify(tasks)
        );
    }, [tasks, hasLoaded]);

    return null;
}

export default TaskStorage;