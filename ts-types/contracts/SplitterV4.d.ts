/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface SplitterV4Interface extends ethers.utils.Interface {
  functions: {
    "amountFromPercent(uint256,uint32)": FunctionFragment;
    "balanceForWindow(uint256)": FunctionFragment;
    "claim(uint256,address,uint256,bytes32[])": FunctionFragment;
    "claimForAllWindows(address,uint256,bytes32[])": FunctionFragment;
    "currentWindow()": FunctionFragment;
    "getClaimHash(uint256,address)": FunctionFragment;
    "incrementWindow()": FunctionFragment;
    "initialized()": FunctionFragment;
    "isClaimed(uint256,address)": FunctionFragment;
    "merkleRoot()": FunctionFragment;
    "wethAddress()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "amountFromPercent",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "balanceForWindow",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "claim",
    values: [BigNumberish, string, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "claimForAllWindows",
    values: [string, BigNumberish, BytesLike[]]
  ): string;
  encodeFunctionData(
    functionFragment: "currentWindow",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getClaimHash",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "incrementWindow",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "initialized",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isClaimed",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "merkleRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "wethAddress",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "amountFromPercent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "balanceForWindow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "claimForAllWindows",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentWindow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getClaimHash",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "incrementWindow",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "initialized",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isClaimed", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "merkleRoot", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "wethAddress",
    data: BytesLike
  ): Result;

  events: {
    "TransferETH(address,uint256,uint32,bool)": EventFragment;
    "TransferToken(address,address,uint256,uint32,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TransferETH"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TransferToken"): EventFragment;
}

export class SplitterV4 extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: SplitterV4Interface;

  functions: {
    amountFromPercent(
      amount: BigNumberish,
      percent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "amountFromPercent(uint256,uint32)"(
      amount: BigNumberish,
      percent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    balanceForWindow(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "balanceForWindow(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    claim(
      window: BigNumberish,
      account: string,
      percentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "claim(uint256,address,uint256,bytes32[])"(
      window: BigNumberish,
      account: string,
      percentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    claimForAllWindows(
      account: string,
      percentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "claimForAllWindows(address,uint256,bytes32[])"(
      account: string,
      percentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    currentWindow(overrides?: CallOverrides): Promise<[BigNumber]>;

    "currentWindow()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getClaimHash(
      window: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getClaimHash(uint256,address)"(
      window: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    incrementWindow(overrides?: Overrides): Promise<ContractTransaction>;

    "incrementWindow()"(overrides?: Overrides): Promise<ContractTransaction>;

    initialized(overrides?: CallOverrides): Promise<[boolean]>;

    "initialized()"(overrides?: CallOverrides): Promise<[boolean]>;

    isClaimed(
      window: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isClaimed(uint256,address)"(
      window: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    merkleRoot(overrides?: CallOverrides): Promise<[string]>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<[string]>;

    wethAddress(overrides?: CallOverrides): Promise<[string]>;

    "wethAddress()"(overrides?: CallOverrides): Promise<[string]>;
  };

  amountFromPercent(
    amount: BigNumberish,
    percent: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "amountFromPercent(uint256,uint32)"(
    amount: BigNumberish,
    percent: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  balanceForWindow(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "balanceForWindow(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  claim(
    window: BigNumberish,
    account: string,
    percentageAllocation: BigNumberish,
    merkleProof: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "claim(uint256,address,uint256,bytes32[])"(
    window: BigNumberish,
    account: string,
    percentageAllocation: BigNumberish,
    merkleProof: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  claimForAllWindows(
    account: string,
    percentageAllocation: BigNumberish,
    merkleProof: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "claimForAllWindows(address,uint256,bytes32[])"(
    account: string,
    percentageAllocation: BigNumberish,
    merkleProof: BytesLike[],
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  currentWindow(overrides?: CallOverrides): Promise<BigNumber>;

  "currentWindow()"(overrides?: CallOverrides): Promise<BigNumber>;

  getClaimHash(
    window: BigNumberish,
    account: string,
    overrides?: CallOverrides
  ): Promise<string>;

  "getClaimHash(uint256,address)"(
    window: BigNumberish,
    account: string,
    overrides?: CallOverrides
  ): Promise<string>;

  incrementWindow(overrides?: Overrides): Promise<ContractTransaction>;

  "incrementWindow()"(overrides?: Overrides): Promise<ContractTransaction>;

  initialized(overrides?: CallOverrides): Promise<boolean>;

  "initialized()"(overrides?: CallOverrides): Promise<boolean>;

  isClaimed(
    window: BigNumberish,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isClaimed(uint256,address)"(
    window: BigNumberish,
    account: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  merkleRoot(overrides?: CallOverrides): Promise<string>;

  "merkleRoot()"(overrides?: CallOverrides): Promise<string>;

  wethAddress(overrides?: CallOverrides): Promise<string>;

  "wethAddress()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    amountFromPercent(
      amount: BigNumberish,
      percent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "amountFromPercent(uint256,uint32)"(
      amount: BigNumberish,
      percent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceForWindow(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceForWindow(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim(
      window: BigNumberish,
      account: string,
      percentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    "claim(uint256,address,uint256,bytes32[])"(
      window: BigNumberish,
      account: string,
      percentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    claimForAllWindows(
      account: string,
      percentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    "claimForAllWindows(address,uint256,bytes32[])"(
      account: string,
      percentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: CallOverrides
    ): Promise<void>;

    currentWindow(overrides?: CallOverrides): Promise<BigNumber>;

    "currentWindow()"(overrides?: CallOverrides): Promise<BigNumber>;

    getClaimHash(
      window: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<string>;

    "getClaimHash(uint256,address)"(
      window: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<string>;

    incrementWindow(overrides?: CallOverrides): Promise<void>;

    "incrementWindow()"(overrides?: CallOverrides): Promise<void>;

    initialized(overrides?: CallOverrides): Promise<boolean>;

    "initialized()"(overrides?: CallOverrides): Promise<boolean>;

    isClaimed(
      window: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isClaimed(uint256,address)"(
      window: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    merkleRoot(overrides?: CallOverrides): Promise<string>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<string>;

    wethAddress(overrides?: CallOverrides): Promise<string>;

    "wethAddress()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    TransferETH(
      account: null,
      amount: null,
      percent: null,
      success: null
    ): EventFilter;

    TransferToken(
      token: null,
      account: null,
      amount: null,
      percent: null,
      success: null
    ): EventFilter;
  };

  estimateGas: {
    amountFromPercent(
      amount: BigNumberish,
      percent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "amountFromPercent(uint256,uint32)"(
      amount: BigNumberish,
      percent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    balanceForWindow(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "balanceForWindow(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    claim(
      window: BigNumberish,
      account: string,
      percentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "claim(uint256,address,uint256,bytes32[])"(
      window: BigNumberish,
      account: string,
      percentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    claimForAllWindows(
      account: string,
      percentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    "claimForAllWindows(address,uint256,bytes32[])"(
      account: string,
      percentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<BigNumber>;

    currentWindow(overrides?: CallOverrides): Promise<BigNumber>;

    "currentWindow()"(overrides?: CallOverrides): Promise<BigNumber>;

    getClaimHash(
      window: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getClaimHash(uint256,address)"(
      window: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    incrementWindow(overrides?: Overrides): Promise<BigNumber>;

    "incrementWindow()"(overrides?: Overrides): Promise<BigNumber>;

    initialized(overrides?: CallOverrides): Promise<BigNumber>;

    "initialized()"(overrides?: CallOverrides): Promise<BigNumber>;

    isClaimed(
      window: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isClaimed(uint256,address)"(
      window: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    merkleRoot(overrides?: CallOverrides): Promise<BigNumber>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<BigNumber>;

    wethAddress(overrides?: CallOverrides): Promise<BigNumber>;

    "wethAddress()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    amountFromPercent(
      amount: BigNumberish,
      percent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "amountFromPercent(uint256,uint32)"(
      amount: BigNumberish,
      percent: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    balanceForWindow(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "balanceForWindow(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    claim(
      window: BigNumberish,
      account: string,
      percentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "claim(uint256,address,uint256,bytes32[])"(
      window: BigNumberish,
      account: string,
      percentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    claimForAllWindows(
      account: string,
      percentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "claimForAllWindows(address,uint256,bytes32[])"(
      account: string,
      percentageAllocation: BigNumberish,
      merkleProof: BytesLike[],
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    currentWindow(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "currentWindow()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getClaimHash(
      window: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getClaimHash(uint256,address)"(
      window: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    incrementWindow(overrides?: Overrides): Promise<PopulatedTransaction>;

    "incrementWindow()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    initialized(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "initialized()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isClaimed(
      window: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isClaimed(uint256,address)"(
      window: BigNumberish,
      account: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    merkleRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "merkleRoot()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wethAddress(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "wethAddress()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
