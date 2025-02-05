import { Theme } from "../types/aqi";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  handleSearch: (e: React.FormEvent) => void;
  theme: Theme;
}

export const SearchBar = ({
  searchQuery,
  setSearchQuery,
  handleSearch,
  theme,
}: SearchBarProps) => (
  <form onSubmit={handleSearch} className={styles.form}>
    <input
      type="text"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      placeholder="Search city..."
      className={styles.input}
      style={{
        backgroundColor: theme.input,
        color: theme.text,
      }}
    />
    <button
      type="submit"
      className={styles.button}
      style={{
        backgroundColor: theme.input,
        color: theme.text,
      }}
    >
      🔍
    </button>
  </form>
);
