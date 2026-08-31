import { Button } from "@mui/material";
import { useRouter } from "next/navigation";

export default function AddTaskButton() {
    const router = useRouter()
    const addTask = (e) => {
        router.push("/AddTask")
    }
    return (
        <Button onClick={addTask}>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z" fill="currentColor" fillOpacity="0.4" stroke="none" />
                <path d="M8 12H16M11.995 16.005V8.005" />
            </svg>
        </Button>
    )
}
