/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { IMirrorENSRegistrar } from "../IMirrorENSRegistrar";

export class IMirrorENSRegistrar__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IMirrorENSRegistrar {
    return new Contract(address, _abi, signerOrProvider) as IMirrorENSRegistrar;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner_",
        type: "address",
      },
    ],
    name: "changeRootNodeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "label_",
        type: "string",
      },
      {
        internalType: "address",
        name: "owner_",
        type: "address",
      },
    ],
    name: "register",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "updateENSReverseRegistrar",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];
