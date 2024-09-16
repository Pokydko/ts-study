import css from "./LoadMoreBtn.module.css";
import { IVoidOutFunc } from "../../App.types";

const LoadMoreBtn = ({ onLoadMore }: IVoidOutFunc) => {
  return (
    <button className={css.loadBtn} onClick={onLoadMore}>
      Load more
    </button>
  );
};
export default LoadMoreBtn;
