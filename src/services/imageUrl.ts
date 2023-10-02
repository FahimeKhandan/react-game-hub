import noImage from "../assets/noImage.png";

const getCroppedImageUrl = (url: string) => {
  if (!url) return noImage;

  const target = "/media/";
  const targetIndex = url.indexOf(target) + target.length;
  const newUrl =
    url.slice(0, targetIndex) + "crop/600/400/" + url.slice(targetIndex);
  return newUrl;
};

export default getCroppedImageUrl;
