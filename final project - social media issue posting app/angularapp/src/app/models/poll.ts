export interface Poll {
    id?: string | undefined;
    issueId?: string | undefined;
    userId: string;
    pollOption: string;
}
