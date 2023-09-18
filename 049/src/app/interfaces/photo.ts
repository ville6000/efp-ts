export default interface Photo {
    alt: string | null;
    avg_color: string | null;
    height: number;
    id: number;
    liked: boolean;
    photographer: string;
    photographer_id: string;
    photographer_url: string;
    src: {
        original: string;
        large2x: string;
        large: string;
        medium: string;
        small: string;
    };
    url: string;
    width: number;
}
