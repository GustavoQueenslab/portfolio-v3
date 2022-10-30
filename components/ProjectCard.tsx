import Image from "next/image";

interface ProjectCardProps {
  title: string;
  subtitle: string;
  image: string;
  imageWidth: number;
  imageHeight: number;
}

export default function ProjectCard({
  title,
  image,
  subtitle,
  imageWidth,
  imageHeight,
}: ProjectCardProps) {
  console.log(image);
  return (
    <div
      className="bg-dhr flex justify-center items-center flex-col gap-8 transition
hover:opacity-80 px-7 py-8 w-80 h-[440px]"
    >
      <Image src={image} alt={title} width={imageWidth} height={imageHeight} />
    </div>
  );
}
