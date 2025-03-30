import { useAtom } from 'jotai';
import { likedBooksAtom } from '../atoms/liked';
import ResultComponent from '../components/shared/result/ResultComponent';

const FavoritePage: React.FC = () => {
  const [likedBooks] = useAtom(likedBooksAtom);

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col w-[568px] gap-2">
        <h1 className="text-title2">내가 찜한 책</h1>
        <ResultComponent
          subTitle="찜한 책"
          data={likedBooks}
          totalCount={likedBooks.length}
        />
      </div>
    </div>
  );
};

export default FavoritePage;
