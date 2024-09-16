import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { IGalleryProps } from "../../App.types";

const ImageGallery = ({ photos, viewInModal }: IGalleryProps) => {
  return (
    <ul className={css.gallery}>
      {photos.map((photo) => (
        <li key={photo.id}>
          <ImageCard photo={photo} viewInModal={viewInModal} />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
