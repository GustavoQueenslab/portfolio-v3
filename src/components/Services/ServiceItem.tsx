import AccessibilityOutlinedIcon from "@mui/icons-material/AccessibilityOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import TerminalOutlinedIcon from "@mui/icons-material/TerminalOutlined";
import clsx from "clsx";

interface ServiceCategoryProps {
  service: {
    id: number;
    title: string;
    body: string;
  };
}
const borderCombo = {
  cyan: "border-t-cyan-400 hover:border-b-cyan-400",
  red: "border-t-red-400 hover:border-b-red-400",
  green: "border-t-green-400 hover:border-b-green-400",
  yellow: "border-t-yellow-400 hover:border-b-yellow-400",
  purple: "border-t-purple-400 hover:border-b-purple-400",
};
const iconComponents = [
  PhoneIphoneIcon,
  TerminalOutlinedIcon,
  AccessibilityOutlinedIcon,
  InsertChartOutlinedIcon,
];
export default function ServiceCategory({ service }: ServiceCategoryProps) {
  const IconComponent = iconComponents[service.id - 1];
  const borderClassColor =
    borderCombo[Object.keys(borderCombo)[service.id - 1]];
  return (
    <article
      className={clsx(
        "flex flex-col gap-4 p-4 border border-t-4 border-b-4 border-b-transparent shadow-2xl hover:border-b-4 w-80 shadow-dark hover:border-t-transparent",
        borderClassColor
      )}
    >
      <IconComponent color="inherit" fontSize="large" />
      <p className="text-xl font-bold font-quicksand">
        {`${service.id}. ${service.title}`}
      </p>
      <p className="text-justify">{service.body}</p>
    </article>
  );
}
