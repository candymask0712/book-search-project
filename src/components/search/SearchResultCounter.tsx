interface Props {
  title: string;
  count: number;
}

const SearchResultCounter = ({ title, count }: Props) => {
  return (
    <div className="flex flex-row gap-2 items-center">
      <span className="text-title3">{title}</span>
      <span className="text-body2 text-text-secondary">
        {`총 `}
        <span className="text-palette-primary">{count}</span>건
      </span>
    </div>
  );
};

export default SearchResultCounter;
