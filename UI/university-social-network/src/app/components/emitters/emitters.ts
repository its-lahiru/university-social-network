import { EventEmitter } from "@angular/core";

export class Emitters {
    static authEmitter = new EventEmitter<boolean>();
    static storyEmitter = new EventEmitter<any>();
    static storiesEmitter = new EventEmitter<any>();
    static noticeEmitter = new EventEmitter<any>();
    static profileEmitter = new EventEmitter<any>();
}