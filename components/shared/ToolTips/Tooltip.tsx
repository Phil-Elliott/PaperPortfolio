import { styled } from "@mui/material/styles";
import Tooltip, { TooltipProps, tooltipClasses } from "@mui/material/Tooltip";

export const StyledTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip
    {...props}
    arrow
    placement="bottom"
    classes={{ popper: className }}
  />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: "rgba(26, 28, 26, 0.9)",
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "rgba(26, 28, 26, 0.9)",
    color: "white",
    fontSize: "1rem",
  },
}));
