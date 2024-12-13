import SignClient from '@walletconnect/sign-client';
import type { Web3ModalConfig } from '@web3modal/standalone';
export type Web3ModalSignSession = SignClient['session']['values'][number];
export interface Web3ModalSignOptions {
    projectId: string;
    metadata: SignClient['metadata'];
    relayUrl?: string;
    modalOptions?: Omit<Web3ModalConfig, 'projectId' | 'walletConnectVersion'>;
}
export type Web3ModalSignConnectArguments = Parameters<SignClient['connect']>[0];
export type Web3ModalSignRequestArguments = Parameters<SignClient['request']>[0];
export type Web3ModalSignDisconnectArguments = Parameters<SignClient['disconnect']>[0];
export type Web3ModalEventCallback = (data: any) => void;
export declare class Web3ModalSign {
    #private;
    constructor(options: Web3ModalSignOptions);
    connect(args: Web3ModalSignConnectArguments): Promise<import("@walletconnect/types").SessionTypes.Struct>;
    disconnect(args: Web3ModalSignDisconnectArguments): Promise<void>;
    request<Result>(args: Web3ModalSignRequestArguments): Promise<Result>;
    getSessions(): Promise<import("@walletconnect/types").SessionTypes.Struct[]>;
    getSession(): Promise<import("@walletconnect/types").SessionTypes.Struct | undefined>;
    onSessionEvent(callback: Web3ModalEventCallback): Promise<void>;
    offSessionEvent(callback: Web3ModalEventCallback): Promise<void>;
    onSessionUpdate(callback: Web3ModalEventCallback): Promise<void>;
    offSessionUpdate(callback: Web3ModalEventCallback): Promise<void>;
    onSessionDelete(callback: Web3ModalEventCallback): Promise<void>;
    offSessionDelete(callback: Web3ModalEventCallback): Promise<void>;
    onSessionExpire(callback: Web3ModalEventCallback): Promise<void>;
    offSessionExpire(callback: Web3ModalEventCallback): Promise<void>;
}
