import { EventEmitter } from "@angular/core";
import { Vote } from "src/app/models/vote.model";

export class Emitters {
    static authEmitter = new EventEmitter<boolean>();
    static storyEmitter = new EventEmitter<any>();
    static storiesEmitter = new EventEmitter<any>();
    static noticeEmitter = new EventEmitter<any>();
    static profileEmitter = new EventEmitter<any>();
    static currentUserVotesEmitter = new EventEmitter<Vote[]>();
}