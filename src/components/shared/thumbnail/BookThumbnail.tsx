import React from 'react';
import { useAtom } from 'jotai';
import EmptyHeartIcon from '../../../assets/icons/empty-heart.svg?react';
import FilledHeartIcon from '../../../assets/icons/filled-heart.svg?react';
import { Document } from '../../../types/api.types';
import { likedBooksAtom } from '../../../atoms/liked';

const DEFAULT_THUMBNAIL_SRC = 'src/assets/images/no-image.png';

interface BookThumbnailProps {
  document: Document;
  size: '16' | '24';
}

const BookThumbnail: React.FC<BookThumbnailProps> = ({
  document,
  size = '16'
}) => {
  const [likedBooks, setLikedBooks] = useAtom(likedBooksAtom);

  const isLiked = likedBooks.some(book => book.isbn === document.isbn);

  const handleLikeToggle = () => {
    if (isLiked) {
      setLikedBooks(likedBooks.filter(book => book.isbn !== document.isbn));
    } else {
      setLikedBooks([...likedBooks, document]);
    }
  };

  return (
    <div className="relative inline-block">
      <img
        className="w-full object-cover"
        src={document.thumbnail || DEFAULT_THUMBNAIL_SRC}
        alt={document.title}
      />
      <div
        className={`absolute top-1 right-1 cursor-pointer h-${size} w-${size}`}
        onClick={handleLikeToggle}
      >
        {isLiked ? (
          <FilledHeartIcon className="text-red-500 text-xl" />
        ) : (
          <EmptyHeartIcon className="text-white text-xl stroke-current" />
        )}
      </div>
    </div>
  );
};

export default BookThumbnail;
