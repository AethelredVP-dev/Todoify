import { School, Work } from "@mui/icons-material";
import { Heart } from "@keyline-icons/react";
import { Pen } from "@keyline-icons/react";
export const categoryProps = (category) => {
  switch (category) {
    case "work":
      return { icon: <Work />, color: "primary" };
    case "personal":
      return { icon: <Pen />, color: "secondary" };
    case "learning":
      return { icon: <School />, color: "info" };
    case "health":
      return { icon: <Heart />, color: "success" };
    default:
      return null;
  }
};
