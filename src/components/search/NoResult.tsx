import Book from '../../assets/icons/book.svg?react';

const NoResult = () => {
  return (
    <section className="flex flex-col items-center justify-center w-40 h-30 text-caption">
      <Book className="mb-5" />
      <span className="text-text-secondary">검색 결과가 없습니다.</span>
    </section>
  );
};

export default NoResult;
