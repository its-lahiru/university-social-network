import { ClientProxy } from '@nestjs/microservices';
export declare class VotesService {
    private readonly voteClient;
    constructor(voteClient: ClientProxy);
    saveUpVote(data: any): Promise<import("rxjs").Observable<any>>;
    saveDownVote(data: any): Promise<import("rxjs").Observable<any>>;
    resetVote(data: any): Promise<import("rxjs").Observable<any>>;
    getAllVotes(data: any): Promise<import("rxjs").Observable<any>>;
}
