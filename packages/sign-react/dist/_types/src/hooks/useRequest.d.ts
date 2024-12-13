import type { Web3ModalSignRequestArguments } from '@web3modal/sign-html';
export declare function useRequest<Result>(params: Web3ModalSignRequestArguments): {
    data: Result | undefined;
    error: unknown;
    loading: boolean;
    request: (paramsOverride?: Web3ModalSignRequestArguments) => Promise<Result>;
};
