import { Observable } from 'rxjs';
import { Alarm, AlarmType } from './utils';
export declare class SignalKStream {
    private _connect;
    private _close;
    private _error;
    private _message;
    private ws;
    private _filter;
    private _wsTimeout;
    private _token;
    private _playbackMode;
    onConnect: Observable<any>;
    onClose: Observable<any>;
    onError: Observable<any>;
    onMessage: Observable<any>;
    endpoint: string;
    selfId: string;
    _source: any;
    source: string;
    authToken: string;
    connectionTimeout: number;
    readonly isOpen: boolean;
    filter: string;
    readonly playbackMode: boolean;
    constructor();
    close(): void;
    open(url: string, subscribe?: string, token?: string): void;
    private parseOnMessage;
    sendRequest(value: any): string;
    put(context: string, path: string, value: any): string;
    login(username: string, password: string): string;
    send(data: any): void;
    sendUpdate(context: string, path: Array<any>): any;
    sendUpdate(context: string, path: string, value: any): any;
    subscribe(context: string, path: Array<any>): any;
    subscribe(context: string, path: string, options?: any): any;
    unsubscribe(context?: string, path?: any): void;
    raiseAlarm(context: string, name: string, alarm: Alarm): any;
    raiseAlarm(context: string, type: AlarmType, alarm: Alarm): any;
    clearAlarm(context: string, name: string): void;
    isSelf(msg: any): boolean;
    isDelta(msg: any): boolean;
    isHello(msg: any): boolean;
    isResponse(msg: any): boolean;
}
