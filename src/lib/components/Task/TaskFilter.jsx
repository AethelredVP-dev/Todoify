"use client";

import { Box, Button, ButtonGroup } from "@mui/material";
import { motion } from "framer-motion";

const filters = [
    { label: "All", value: "all" },
    { label: "Pending", value: "pending" },
    { label: "Done", value: "done" },
];

function TaskFilter({ statusFilter, onStatusFilterChange }) {
    const activeIndex = filters.findIndex(
        (filter) => filter.value === statusFilter
    );

    return (
        <Box
            sx={{
                position: "relative",
                display: "inline-flex",
                p: "4px",
                borderRadius: 2,
                backgroundColor: "rgba(16, 24, 47, 0.7)",
            }}
        >
            <Box
                component={motion.div}
                animate={{
                    x: `${activeIndex * 100}%`,
                }}
                transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 28,
                }}
                sx={{
                    position: "absolute",
                    top: "4px",
                    bottom: "4px",
                    left: "4px",
                    width: "calc((100% - 8px) / 3)",
                    borderRadius: 1.5,
                    backgroundColor: "primary.main",
                }}
            />

            <ButtonGroup
                variant="text"
                aria-label="Filter tasks by status"
                sx={{
                    "& .MuiButton-root": {
                        zIndex: 1,
                        minWidth: 92,
                        border: 0,
                        color: "text.secondary",

                        "&:hover": {
                            border: 0,
                            backgroundColor: "transparent",
                        },
                    },
                }}
            >
                {filters.map((filter) => {
                    const isActive = statusFilter === filter.value;

                    return (
                        <Button
                            key={filter.value}
                            onClick={() => onStatusFilterChange(filter.value)}
                            sx={{
                                color: isActive ? "common.white" : "text.secondary",
                            }}
                        >
                            {filter.label}
                        </Button>
                    );
                })}
            </ButtonGroup>
        </Box>
    );
}

export default TaskFilter;