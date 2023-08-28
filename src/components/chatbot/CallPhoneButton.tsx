import CallIcon from "@mui/icons-material/Call";

export default function CallButton() {
  const handleCallClick = () => {
    window.location.href = "tel:+351931945231";
  };

  return (
    <button
      onClick={handleCallClick}
      className="flex items-center justify-center gap-3 text-semibold"
    >
      <CallIcon />
      Call Number
    </button>
  );
}
