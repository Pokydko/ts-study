import css from "./SearchBar.module.css";
import toast, { Toaster } from "react-hot-toast";
import { RxMagnifyingGlass } from "react-icons/rx";
import { ITextInVoidFunc } from "../../App.types";

const SearchBar = ({ onSearch }: ITextInVoidFunc) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (e.currentTarget.userInput.value.trim() === "") {
      toast.custom(
        <span className={css.toast}>
          ☝️search field shouldn&apos;t be empty
        </span>
      );
      return;
    }
    onSearch && onSearch(e.currentTarget.userInput.value);
  };
  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          name="userInput"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button className={css.searchBtn} type="submit">
          <RxMagnifyingGlass />
        </button>
        <Toaster />
      </form>
    </header>
  );
};
export default SearchBar;
