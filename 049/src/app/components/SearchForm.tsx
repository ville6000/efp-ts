export default function SearchForm() {
    return (
        <form action="search" method="GET" className="flex mb-8">
            <div className="">
                <label htmlFor="search" className="mr-2">
                    Search images
                </label>
                <input type="text" name="q" id="search" className="rounded" required />
            </div>

            <div className="ml-2">
                <button
                    type="submit"
                    className="rounded px-4 py-2 bg-pink-800 text-pink-100 hover:bg-pink-900 disabled:bg-pink-400 disabled:text-pink-50"
                >
                    Search
                </button>
            </div>
        </form>
    );
}
