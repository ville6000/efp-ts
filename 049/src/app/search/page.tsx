import { createClient } from 'pexels';
import Photo from '@/app/interfaces/photo';
import PhotoGridItem from '@/app/components/photoGridItem';
import SearchQueryInfo from '@/app/components/searchQueryInfo';
import SearchForm from '@/app/components/SearchForm';
import NoResults from '@/app/search/no-results';

type Props = {
    searchParams: {
        q: string | null;
    };
};

export default async function SearchPage({ searchParams }: Props) {
    let total = 0;
    let photos: Photo[] = [];
    const response = await getPhotos(searchParams.q || '');

    if ('error' in response && response.error) {
        console.error(response.error);
    } else {
        if ('total_results' in response) {
            total = response.total_results;
        }

        if ('photos' in response && response.photos) {
            photos = response.photos;
        }
    }

    return (
        <div>
            <SearchForm />

            {photos.length > 0 ? (
                <SearchQueryInfo total={total || 0} searchQuery={searchParams.q || ''} />
            ) : (
                <NoResults query={searchParams.q || ''} />
            )}

            <div className="md:grid md:grid-cols-4 md:gap-5">
                {photos && photos.map((photo: any) => <PhotoGridItem key={photo.id} photo={photo} />)}
            </div>
        </div>
    );
}

async function getPhotos(searchQuery: string) {
    const client = createClient(process.env.NEXT_PUBLIC_PEXELS_API_KEY || '');
    return await client.photos.search({ query: searchQuery, per_page: 12 });
}
