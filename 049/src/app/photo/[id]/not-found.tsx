import Link from 'next/link';

export default function NotFound() {
    return (
        <div>
            <p className="text-xl font-bold py-4">Photo not found</p>

            <Link href={'/search'}>Return to search page</Link>
        </div>
    );
}
