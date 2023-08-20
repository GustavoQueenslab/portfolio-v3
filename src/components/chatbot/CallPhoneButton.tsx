import CallIcon from "@mui/icons-material/Call";

export default function CallButton() {
  const handleCallClick = () => {
    window.location.href = "tel:+351931945231";
  };

  return (
    <button
      onClick={handleCallClick}
      className="flex items-center gap-3 justify-cente r text-semibold"
    >
      <CallIcon />
      Call Number
    </button>
  );
}
