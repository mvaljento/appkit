import type { ConfigCtrlState, ThemeCtrlState } from '@web3modal/core';
import type { EthereumClient } from '@web3modal/ethereum';
/**
 * Types
 */
export type Web3ModalConfig = Omit<ConfigCtrlState, 'enableAuthMode' | 'enableStandaloneMode' | 'standaloneChains' | 'walletConnectVersion'> & ThemeCtrlState;
/**
 * Client
 */
export declare class Web3Modal {
    constructor(config: Web3ModalConfig, client: EthereumClient);
    private initUi;
    openModal: (options?: import("packages/core/dist/_types/src/controllers/ModalCtrl").OpenOptions | undefined) => Promise<void>;
    closeModal: () => void;
    subscribeModal: (callback: (newState: import("packages/core/dist/_types/src/types/controllerTypes").ModalCtrlState) => void) => () => void;
    setTheme: (theme: ThemeCtrlState) => void;
    setDefaultChain: (selectedChain: import("packages/core/dist/_types/src/types/controllerTypes").Chain | undefined) => void;
    subscribeEvents: (callback: (newEvent: import("@web3modal/core").ModalEvent) => void) => () => void;
}
