import { createClient } from 'pexels';
import Link from 'next/link';
import NotFound from '@/app/photo/[id]/not-found';

export default async function Page({ params }: { params: { id: string } }) {
    const photo = await getData(params.id);

    if (false === photo || ('error' in photo && photo.error)) {
        return <NotFound />;
    }

    return (
        <div className="md:grid md:grid-cols-2 md:gap-5">
            <div>
                <img src={photo.src.large} alt={photo.alt} className="rounded" />
            </div>

            <div>
                <h2 className="text-2xl mb-2">{photo.photographer}</h2>
                <p>{photo.photographer_url}</p>
                <p>{photo.url}</p>
            </div>
        </div>
    );
}

async function getData(id: string) {
    const client = createClient(process.env.NEXT_PUBLIC_PEXELS_API_KEY || '');

    try {
        return await client.photos.show({ id });
    } catch (error) {
        return false;
    }
}
