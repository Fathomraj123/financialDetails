interface SearchProps {
    search: string;
    setSearch: (value: string) => void;
    handleSubmit: () => void;
    placeholder: string;
  }
  
  interface SortProps {
    sort: string;
    setSort: (value: string) => void;
    option: string[];
  }