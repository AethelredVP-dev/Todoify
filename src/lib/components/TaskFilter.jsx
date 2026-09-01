import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { useState } from "react";

function TaskFilter({ statusFilter, onStatusFilterChange }) {
    const handleFilterChange = (event, newFilter) => {
        if (!newFilter) return;

        onStatusFilterChange(newFilter);
    };

    return (
        <ToggleButtonGroup
            exclusive
            size="medium"
            value={statusFilter}
            onChange={handleFilterChange}
            aria-label="Filter tasks by status"
            sx={{
                gap: 1,

                "& .MuiToggleButtonGroup-grouped": {
                    border: 0,
                    borderRadius: 0,
                    margin: 0,
                },

                "& .MuiToggleButton-root": {
                    border: 0,
                    borderRadius: 0,
                    backgroundColor: "transparent",
                    color: "text.secondary",

                    "&:hover": {
                        backgroundColor: "transparent",
                        color: "text.primary",
                    },

                    "&.Mui-selected, &.Mui-selected:hover": {
                        backgroundColor: "transparent",
                        color: "primary.main",
                    },
                },
            }}
        >
            <ToggleButton value="all" aria-label="Show all tasks">
                All
            </ToggleButton>

            <ToggleButton value="pending" aria-label="Show pending tasks">
                Pending
            </ToggleButton>

            <ToggleButton value="done" aria-label="Show completed tasks">
                Done
            </ToggleButton>
        </ToggleButtonGroup>
    );
}

export default TaskFilter;