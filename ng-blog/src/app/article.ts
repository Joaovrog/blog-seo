export class Article {
        id: number;
        title: string;
        content: string;
        description: string;
        key: string;
        date: Date = new Date();
        imageUrl: string;
        viewCount: number;
        published: boolean;
}
