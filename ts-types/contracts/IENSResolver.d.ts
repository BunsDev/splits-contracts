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

interface IENSResolverInterface extends ethers.utils.Interface {
  functions: {
    "addr(bytes32)": FunctionFragment;
    "name(bytes32)": FunctionFragment;
    "setAddr(bytes32,address)": FunctionFragment;
    "setName(bytes32,string)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addr", values: [BytesLike]): string;
  encodeFunctionData(functionFragment: "name", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "setAddr",
    values: [BytesLike, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setName",
    values: [BytesLike, string]
  ): string;

  decodeFunctionResult(functionFragment: "addr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setAddr", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "setName", data: BytesLike): Result;

  events: {
    "AddrChanged(bytes32,address)": EventFragment;
    "NameChanged(bytes32,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddrChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NameChanged"): EventFragment;
}

export class IENSResolver extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: IENSResolverInterface;

  functions: {
    addr(_node: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    "addr(bytes32)"(
      _node: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    name(_node: BytesLike, overrides?: CallOverrides): Promise<[string]>;

    "name(bytes32)"(
      _node: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setAddr(
      _node: BytesLike,
      _addr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setAddr(bytes32,address)"(
      _node: BytesLike,
      _addr: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setName(
      _node: BytesLike,
      _name: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setName(bytes32,string)"(
      _node: BytesLike,
      _name: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  addr(_node: BytesLike, overrides?: CallOverrides): Promise<string>;

  "addr(bytes32)"(_node: BytesLike, overrides?: CallOverrides): Promise<string>;

  name(_node: BytesLike, overrides?: CallOverrides): Promise<string>;

  "name(bytes32)"(_node: BytesLike, overrides?: CallOverrides): Promise<string>;

  setAddr(
    _node: BytesLike,
    _addr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setAddr(bytes32,address)"(
    _node: BytesLike,
    _addr: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setName(
    _node: BytesLike,
    _name: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setName(bytes32,string)"(
    _node: BytesLike,
    _name: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    addr(_node: BytesLike, overrides?: CallOverrides): Promise<string>;

    "addr(bytes32)"(
      _node: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    name(_node: BytesLike, overrides?: CallOverrides): Promise<string>;

    "name(bytes32)"(
      _node: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    setAddr(
      _node: BytesLike,
      _addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setAddr(bytes32,address)"(
      _node: BytesLike,
      _addr: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setName(
      _node: BytesLike,
      _name: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "setName(bytes32,string)"(
      _node: BytesLike,
      _name: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    AddrChanged(_node: BytesLike | null, _addr: null): EventFilter;

    NameChanged(_node: BytesLike | null, _name: null): EventFilter;
  };

  estimateGas: {
    addr(_node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "addr(bytes32)"(
      _node: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    name(_node: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    "name(bytes32)"(
      _node: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setAddr(
      _node: BytesLike,
      _addr: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setAddr(bytes32,address)"(
      _node: BytesLike,
      _addr: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setName(
      _node: BytesLike,
      _name: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setName(bytes32,string)"(
      _node: BytesLike,
      _name: string,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addr(
      _node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "addr(bytes32)"(
      _node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    name(
      _node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "name(bytes32)"(
      _node: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setAddr(
      _node: BytesLike,
      _addr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setAddr(bytes32,address)"(
      _node: BytesLike,
      _addr: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setName(
      _node: BytesLike,
      _name: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setName(bytes32,string)"(
      _node: BytesLike,
      _name: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}