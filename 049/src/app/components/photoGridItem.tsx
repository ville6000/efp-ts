import Link from 'next/link';
import Photo from '../interfaces/photo';

interface PhotoProps {
    photo: Photo;
}
export default function PhotoGridItem({ photo }: PhotoProps) {
    if (photo.alt === null) {
        photo.alt = '';
    }

    return (
        <div>
            <Link href={`/photo/${photo.id}`}>
                <img src={photo.src.medium} alt={photo.alt} className="object-cover h-96 w-full rounded" />
                <div>{photo.photographer}</div>
            </Link>
        </div>
    );
}
