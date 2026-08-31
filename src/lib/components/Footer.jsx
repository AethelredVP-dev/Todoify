import { Box, Divider, Typography } from "@mui/material";
import quotes from "@/constants/quotes.json"
import { useState, useEffect } from 'react';
import TextTransition from "react-text-transition";
import { presets } from "react-text-transition";

function Footer() {
    const [index, setIndex] = useState(0)
    const quote = quotes.map(q => q.text)
    const author = quotes.map(q => q.author)
    useEffect(() => {
        const intervalId = setInterval(
            () => setIndex((index) => index + 1),
            3000, // every 3 seconds
        );
        return () => clearTimeout(intervalId);
    }, []);

    return (
        <Typography
            variant="h3"
            sx={{
                fontFamily: 'serif',
                fontWeight: 600,
                textAlign: "center"
            }}
        >
            <TextTransition
                className="quotes-text"
                springConfig={presets.wobbly}
                inline
            >
                {quote[index % quote.length]}
            </TextTransition>

            <Divider variant="middle" />

            <TextTransition
                className="quotes-author"
                springConfig={presets.gentle}
            >
                {author[index % author.length]}
            </TextTransition>
        </Typography>
    );
}

export default Footer;