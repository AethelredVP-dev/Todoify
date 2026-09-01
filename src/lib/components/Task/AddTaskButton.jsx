import { Plus } from "@keyline-icons/react";
import { Fab } from "@mui/material";
import { useRouter } from "next/navigation";

export default function AddTaskButton() {
    const router = useRouter()
    const addTask = () => {
        router.push("/AddTask")
    }
    return (
        <Fab variant="extended" onClick={addTask}>
            <Plus />
            Add Task
        </Fab>
    )
}
