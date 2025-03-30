import { useAtom } from 'jotai';
import EmptyHeartIcon from '../../../assets/icons/empty-heart.svg?react';
import FilledHeartIcon from '../../../assets/icons/filled-heart.svg?react';
import { Document } from '../../../types/api.types';
import { likedBooksAtom } from '../../../atoms/liked';

const DEFAULT_THUMBNAIL_SRC = 'src/assets/images/no-image.png';

type Size = '4' | '6';

const POSITION_MAP: Record<Size, string> = {
  '4': 'top-0 right-0',
  '6': 'top-2 right-2'
};

interface Props {
  document: Document;
  size: Size;
}

const BookThumbnail: React.FC<Props> = ({ document, size }) => {
  const [likedBooks, setLikedBooks] = useAtom(likedBooksAtom);

  const isLiked = likedBooks.some(book => book.isbn === document.isbn);

  const handleLikeToggle = () => {
    if (isLiked) {
      setLikedBooks(likedBooks.filter(book => book.isbn !== document.isbn));
    } else {
      setLikedBooks([...likedBooks, document]);
    }
  };

  const pxWidth = String(Number(size) * 4);
  const pxHeight = String(Number(size) * 4);

  const position = POSITION_MAP[size];

  return (
    <div className="relative inline-block w-full">
      <img
        className="w-full object-cover"
        src={document.thumbnail || DEFAULT_THUMBNAIL_SRC}
        alt={document.title}
      />
      <div
        className={`absolute cursor-pointer h-${size} w-${size} ${position}`}
        onClick={handleLikeToggle}
      >
        {isLiked ? (
          <FilledHeartIcon width={pxWidth} height={pxHeight} />
        ) : (
          <EmptyHeartIcon width={pxWidth} height={pxHeight} />
        )}
      </div>
    </div>
  );
};

export default BookThumbnail;
