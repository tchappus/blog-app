class Author {
    id?: number;
    firstName!: string;
    lastName!: string;
    userName!: string;
    joinTimestamp?: string;
    blogs?: Blog[];
}

class Blog {
    id?: number;
    name!: string;
    createdTimestamp?: string;
    authorId!: number;
}

class Post {
    id?: number;
    title!: string;
    markdownText!: string;
    isPublic!: boolean;
    isDraft!: boolean;
    attachmentUrls!: string;
    postedTimestamp?: string;
    blogId!: number;
    authorId!: number;
}

export { Author, Blog, Post };