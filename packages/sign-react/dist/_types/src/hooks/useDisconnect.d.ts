import type { Web3ModalSignDisconnectArguments } from '@web3modal/sign-html';
export declare function useDisconnect(params: Web3ModalSignDisconnectArguments): {
    error: unknown;
    loading: boolean;
    disconnect: (paramsOverride?: Web3ModalSignDisconnectArguments) => Promise<void>;
};
