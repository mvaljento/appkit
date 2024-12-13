import type { Web3ModalAuthOptions } from '@web3modal/auth-html';
import { Web3ModalAuth } from '@web3modal/auth-html';
export declare function setWeb3ModalAuthClient(options: Web3ModalAuthOptions): void;
export type Web3ModalAuthInstance = InstanceType<typeof Web3ModalAuth>;
export declare function getWeb3ModalAuthClient(): Promise<Web3ModalAuth>;
