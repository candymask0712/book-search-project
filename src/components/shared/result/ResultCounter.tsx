interface Props {
  subTitle: string;
  count: number;
}

const ResultCounter = ({ subTitle, count }: Props) => {
  return (
    <div className="flex flex-row gap-2 items-start text-palette-black">
      <span className="text-caption mr-2">{`${subTitle}`}</span>
      {'  '}
      <span className="text-caption ">
        {`총 `}
        <span className="text-palette-primary">{count}</span>건
      </span>
    </div>
  );
};

export default ResultCounter;
