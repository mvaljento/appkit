import type { AuthClientTypes } from '@walletconnect/auth-client';
import type { Web3ModalConfig } from '@web3modal/standalone';
export interface Web3ModalAuthOptions {
    projectId: string;
    metadata: AuthClientTypes.Metadata;
    modalOptions?: Omit<Web3ModalConfig, 'projectId' | 'walletConnectVersion'>;
}
export interface Web3ModalAuthSignInArguments {
    statement: string;
    chainId?: string;
    aud?: string;
    domain?: string;
}
export declare class Web3ModalAuth {
    #private;
    constructor(options: Web3ModalAuthOptions);
    signIn(args: Web3ModalAuthSignInArguments): Promise<{
        valid: boolean;
        address: string;
        cacao: Record<string, string>;
    }>;
}
