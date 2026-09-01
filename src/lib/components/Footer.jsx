"use client";

import { useEffect, useState } from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";
import TextTransition, { presets } from "react-text-transition";
import quotes from "@/constants/quotes.json";

function Footer() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setIndex((previousIndex) => (previousIndex + 1) % quotes.length);
        }, 4000);

        return () => clearInterval(intervalId);
    }, []);

    const qouteText = quotes.map(q => q.text)
    const qouteAuthor = quotes.map(q => q.author)

    return (
        <Box
            component="footer"
            sx={{
                position: "sticky",
                bottom: 0,
                zIndex: 10,
                width: "100%",
                px: 3,
                py: 2.5,
                textAlign: "center",
                borderTop: "1px solid rgba(148, 163, 184, 0.14)",
                backgroundColor: "rgba(7, 11, 26, 0.78)",
                backdropFilter: "blur(14px)",
            }}
        >
            <Stack spacing={1.5} sx={{ alignItems: "center" }}>

                <TextTransition
                    springConfig={presets.stiff}
                    inline
                    direction="up"
                    style={{ fontSize: "2rem", fontFamily: "serif" }}
                >
                    “{qouteText[index]}”
                </TextTransition>


                <Divider
                    sx={{
                        width: 56,
                        borderColor: "rgba(148, 163, 184, 0.2)",
                    }}
                />



                <TextTransition
                    springConfig={presets.stiff}
                    inline
                    direction="up"

                >
                    {qouteAuthor[index]}
                </TextTransition>

            </Stack>
        </Box>
    );
}

export default Footer;