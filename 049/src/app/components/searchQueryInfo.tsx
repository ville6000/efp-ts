export default function SearchQueryInfo({ total, searchQuery }: { total: number; searchQuery: string }) {
    return (
        <div className="my-4">
            {total} images for search query: &quot;{searchQuery}&quot;
        </div>
    );
}
