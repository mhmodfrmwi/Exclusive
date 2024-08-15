import Image from "next/image";
import image from "../../assets/Image.png";
const ImageComponent = () => {
  return (
    <div className="py-4 w-10/12 mx-auto flex flex-col gap-4">
      <Image src={image} width={1200} height={300} className="mx-auto" />
    </div>
  );
};
export default ImageComponent;
