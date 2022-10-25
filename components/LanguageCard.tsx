import Image from "next/image";

interface LanguageCardProps {
  image: string;
  name: string;
}

export default function LanguageCard({ image, name }: LanguageCardProps) {
  return (
    <>
      <div className="flex items-center justify-center transition ease-in-out duration-400 rounded-2xl w-36 h-36 bg-primary hover:opacity-40 hover:scale-95">
        <Image src={image} alt={name} height={100} width={100} />
      </div>
    </>
  );
}
