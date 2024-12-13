import type { Web3ModalSignOptions } from '@web3modal/sign-html';
import { Web3ModalSign } from '@web3modal/sign-html';
export declare const emitter: import("mitt").Emitter<Record<import("mitt").EventType, unknown>>;
export type Web3ModalSignInstance = InstanceType<typeof Web3ModalSign>;
export declare function setWeb3ModalSignClient(options: Web3ModalSignOptions): void;
export declare function getWeb3ModalSignClient(): Promise<Web3ModalSign>;
