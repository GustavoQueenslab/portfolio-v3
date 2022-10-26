import { AccessAlarm } from "@mui/icons-material";
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
export default function ServiceCategory({
  title,
  body,
  index = 0,
}: ServiceCategoryProps) {
  return (
    <article
      className={clsx(
        "flex flex-col gap-4 p-4 border border-t-4 shadow-2xl hover:border-b-4 w-80 shadow-dark hover:border-t-transparent",
        Object.values(borderCombo)[index]
      )}
    >
      <AccessAlarm color="primary" fontSize="large" />
      <p className="text-xl font-bold">{title}</p>
      <p className="text-justify">{body}</p>
    </article>
  );
}
