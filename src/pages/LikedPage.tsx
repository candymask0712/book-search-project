import React from 'react';
import ResultComponent from '../components/shared/result/ResultComponent';
import { useInfiniteLikedBooks } from '../hooks/useInfiniteLikedBooks';
import { useInfiniteScroll } from '../hooks/useInfiniteScroll';

const LikedPage: React.FC = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, totalCount } =
    useInfiniteLikedBooks();

  const observerElem = useInfiniteScroll<HTMLDivElement>(
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage
  );

  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-col w-[568px] gap-2">
        <h1 className="text-title2">내가 찜한 책</h1>
        <ResultComponent
          subTitle="찜한 책"
          data={data}
          totalCount={totalCount}
        />
      </div>
      <div ref={observerElem} className="h-1 w-full" />
      {isFetchingNextPage && <p>Loading...</p>}
    </div>
  );
};

export default LikedPage;
