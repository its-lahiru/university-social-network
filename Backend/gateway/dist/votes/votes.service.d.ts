import { ClientProxy } from '@nestjs/microservices';
export declare class VotesService {
    private readonly voteClient;
    constructor(voteClient: ClientProxy);
    saveUpVote(data: any): Promise<any>;
    saveDownVote(data: any): Promise<any>;
    resetVote(data: any): Promise<any>;
    getAllVotes(data: any): Promise<any>;
}
