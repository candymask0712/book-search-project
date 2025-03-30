import Book from '../../assets/icons/book.svg?react';

interface Props {
  text: string;
}

const NoResult: React.FC<Props> = ({ text }) => {
  return (
    <section className="flex flex-col items-center justify-center text-caption">
      <Book className="mb-5" width={80} height={80} />
      <span className="text-text-secondary">{text}</span>
    </section>
  );
};

export default NoResult;
