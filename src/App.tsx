import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import RingLoader from "react-spinners/RingLoader";
import css from "./App.module.css";
import unsplashApi from "./unsplash-my-api";
import { IPhoto, IPicture } from "./App.types";

import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

const App = () => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isThereMore, setIsThereMore] = useState(false);
  const [current_page, setCurrent_page] = useState(1);
  const [userRequest, setUserRequest] = useState<string>("");

  const [picture, setPicture] = useState<IPicture>({
    href: "",
    description: null,
    name: "",
  });
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (userRequest === "") return;
    setLoading(true);
    setError(false);
    setIsThereMore(false);

    unsplashApi({
      searchRequest: userRequest,
      searchPage: current_page,
      perPage: 30,
    })
      .then(({ results, total_pages }) => {
        setPhotos(photos.concat(results));
        checkEmptyReply(results);
        if (total_pages > current_page) setIsThereMore(true);
        else
          toast.custom(
            <span className={`${css.toast} ${css.toastEnd}`}>
              🎸more, 🎸more... no more... of that jazz
            </span>
          );
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        setError(true);
      })
      .finally(() => {
        setTimeout(() => setLoading(false), 2000);
      });
  }, [userRequest, current_page]);

  const onSearch = (userRequest: string) => {
    setUserRequest(userRequest);
    setCurrent_page(1);
    setPhotos([]);
  };

  const onLoadMore = () => {
    setCurrent_page(current_page + 1);
  };

  const viewInModal = (elem: IPicture): void => {
    setPicture(elem);
    setModalIsOpen(true);
  };

  return (
    <>
      <div className={css.colorSwitcherBtn}></div>
      <SearchBar onSearch={onSearch} />
      {photos.length > 0 && (
        <ImageGallery photos={photos} viewInModal={viewInModal} />
      )}
      {error && (
        <ErrorMessage>
          <div>
            Something went wrong.{" "}
            <a className={css.link} href="/">
              Reload the page
            </a>
            , please.
          </div>
        </ErrorMessage>
      )}
      {isThereMore && <LoadMoreBtn onLoadMore={onLoadMore} />}
      <RingLoader
        color="#909080ff"
        size={40}
        aria-label="Loading Spinner"
        loading={loading}
        cssOverride={{
          margin: "0 auto",
        }}
      />
      <ImageModal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}>
        {picture}
      </ImageModal>
    </>
  );
};
export default App;

function checkEmptyReply(arr: IPhoto[]) {
  if (arr.length === 0)
    toast.custom(
      <span className={css.toast}>
        🎸Empty spaces, what are we living for? ⌨️Empty replies, what are we
        looking for?
      </span>
    );
}
