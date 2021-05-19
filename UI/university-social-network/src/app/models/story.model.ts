export interface Story {
    id?: string;
    authorId?: string;
    username?: string;
    content: string;
    date?: string;
    upVotes?: number;
    downVotes?: number;
}