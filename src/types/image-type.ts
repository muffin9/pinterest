interface UserType {
    accepted_tos: boolean;
    bio: string;
    first_name: string;
    for_hire: boolean;
    id: string;
    instagram_username: string;
    last_name: string;
    links: { self: string; html: string; photos: string; likes: string };
    location: string | null;
    name: string;
    portfolio_url: string;
    profile_image: { small: string; medium: string; large: string };
    social: {
        instagram_username: string;
        portfolio_url: string;
        twitter_username: string | null;
        paypal_email: string | null;
    };
    total_collections: number;
    total_illustrations: number;
    total_likes: number;
    total_photos: number;
    total_promoted_illustrations: number;
    total_promoted_photos: number;
    twitter_username: string | null;
    updated_at: string;
    username: string;
}

export interface ImageCardType {
    id: string;
    slug: string;
    alternative_slugs: {
        en: string;
        es: string;
        ja: string;
        fr: string;
        it: string;
        ko: string;
        de: string;
        pt: string;
    };
    created_at: string;
    updated_at: string;
    promoted_at: string;
    width: number;
    height: number;
    color: string;
    blur_hash: string;
    description: string;
    alt_description: string;
    breadcrumbs: [];
    urls: {
        raw: string;
        full: string;
        regular: string;
        small: string;
        thumb: string;
        small_s3: string;
    };
    links: {
        self: string;
        html: string;
        download: string;
        download_location: string;
    };
    likes: number;
    liked_by_user: boolean;
    current_user_collections: [];
    sponsorship: string;
    topic_submissions: object;
    asset_type: string;
    user: UserType;
}
