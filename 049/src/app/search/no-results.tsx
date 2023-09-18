type Props = {
    query: string;
};

export default async function NoResults({ query }: Props) {
    if (query === '' || query === null) {
        return <></>;
    }

    return <div>No results found for {query}</div>;
}
