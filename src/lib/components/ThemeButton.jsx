import IconButton from "@mui/material/IconButton";
import { LightModeOutlined, DarkModeOutlined } from "@mui/icons-material";
import { useColorScheme } from "@mui/material/styles";

function ThemeButton() {
    const { mode, setMode } = useColorScheme(); // MUI persists the choice to localStorage [39]

    return (
        <IconButton
            aria-label="Toggle color scheme"
            onClick={() => setMode(mode === "dark" ? "light" : "dark")}
        >
            {mode === "dark" ? (
                <LightModeOutlined />
            ) : (
                <DarkModeOutlined />
            )}
        </IconButton>);
}

export default ThemeButton;