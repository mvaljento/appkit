import type { Web3ModalSignConnectArguments } from '@web3modal/sign-html';
export declare function useConnect(params: Web3ModalSignConnectArguments): {
    data: import("@walletconnect/types").SessionTypes.Struct | undefined;
    error: unknown;
    loading: boolean;
    connect: (paramsOverride?: Web3ModalSignConnectArguments) => Promise<import("@walletconnect/types").SessionTypes.Struct>;
};
