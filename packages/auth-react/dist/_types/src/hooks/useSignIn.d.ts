import type { Web3ModalAuthSignInArguments } from '@web3modal/auth-html';
export declare function useSignIn(params: Web3ModalAuthSignInArguments): {
    signIn: (paramsOverride?: Web3ModalAuthSignInArguments) => Promise<{
        valid: boolean;
        address: string;
        cacao: Record<string, string>;
    }>;
    data: {
        valid: boolean;
        address: string;
        cacao: Record<string, string>;
    } | undefined;
    error: unknown;
    loading: boolean;
};
