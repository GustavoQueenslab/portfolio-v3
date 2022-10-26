import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import AccessibilityOutlinedIcon from "@mui/icons-material/AccessibilityOutlined";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";

import clsx from "clsx";

interface ServiceCategoryProps {
  title: String;
  body: String;
  index?: number;
}
const borderCombo = {
  cyan: "border-t-cyan-400 hover:border-b-cyan-400",
  red: "border-t-red-400 hover:border-b-red-400",
  green: "border-t-green-400 hover:border-b-green-400",
  yellow: "border-t-yellow-400 hover:border-b-yellow-400",
  purple: "border-t-purple-400 hover:border-b-purple-400",
};
function getIcons(index: number) {
  switch (index) {
    case 0:
      return <PhoneIphoneIcon color="inherit" fontSize="large" />;
    case 1:
      return <TerminalOutlinedIcon color="inherit" fontSize="large" />;
    case 2:
      return <AccessibilityOutlinedIcon color="inherit" fontSize="large" />;
    case 3:
      return <InsertChartOutlinedIcon color="inherit" fontSize="large" />;
    default:
      return <PhoneIphoneIcon color="inherit" fontSize="large" />;
  }
}
export default function ServiceCategory({
  title,
  body,
  index = 0,
}: ServiceCategoryProps) {
  return (
    <article
      className={clsx(
        "flex flex-col gap-4 p-4 border border-t-4 border-b-4 border-b-transparent shadow-2xl hover:border-b-4 w-80  shadow-dark hover:border-t-transparent",
        Object.values(borderCombo)[index]
      )}
    >
      {getIcons(index)}
      <p className="text-xl font-bold">{title}</p>
      <p className="text-justify">{body}</p>
    </article>
  );
}
