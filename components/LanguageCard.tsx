import Image from "next/image";

interface LanguageCardProps {
  image: string;
  name: string;
}

export default function LanguageCard({ image, name }: LanguageCardProps) {
  return (
    <>
      <div className="flex p-4 rounded-2xl w-36 h-36 bg-primary align-center">
        <Image src={image} alt={name} height={100} width={100} />
      </div>
    </>
  );
}
