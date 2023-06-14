'use client';

import useLoadImage from '@/hooks/useLoadImage';
import { Song } from '@/types';

interface MediaItemProps {
	data: Song;
	onClick?: (id: string) => void;
}

const MediaItem: React.FC<MediaItemProps> = ({ data, onClick }) => {
	const imageUrl = useLoadImage(data);

	const handleClick = () => {
		if (onClick) {
			return onClick(data.id);
		}
		// TODO: default turn on player
	};
	return (
		<div
			onClick={handleClick}
			className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50 w-full p-2 rounded-md"
		>
			MediaItem
		</div>
	);
};

export default MediaItem;
