/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { SplitterV4 } from "../SplitterV4";

export class SplitterV4__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<SplitterV4> {
    return super.deploy(overrides || {}) as Promise<SplitterV4>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): SplitterV4 {
    return super.attach(address) as SplitterV4;
  }
  connect(signer: Signer): SplitterV4__factory {
    return super.connect(signer) as SplitterV4__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SplitterV4 {
    return new Contract(address, _abi, signerOrProvider) as SplitterV4;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "percent",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    name: "TransferETH",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint32",
        name: "percent",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "success",
        type: "bool",
      },
    ],
    name: "TransferToken",
    type: "event",
  },
  {
    inputs: [],
    name: "PERCENTAGE_SCALE",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint32",
        name: "percent",
        type: "uint32",
      },
    ],
    name: "amountFromPercent",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "balanceForWindow",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "window",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "scaledPercentageAllocation",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "percentageAllocation",
        type: "uint256",
      },
      {
        internalType: "bytes32[]",
        name: "merkleProof",
        type: "bytes32[]",
      },
    ],
    name: "claimForAllWindows",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "currentWindow",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "window",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getClaimHash",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "incrementWindow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "window",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "isClaimed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "merkleRoot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "scaledPercent",
        type: "uint256",
      },
    ],
    name: "scaleAmountByPercentage",
    outputs: [
      {
        internalType: "uint256",
        name: "scaledAmount",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "wethAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610ceb806100206000396000f3fe608060405234801561001057600080fd5b50600436106100d45760003560e01c80637965ff9b11610081578063a8f5f5ab1161005b578063a8f5f5ab146101ab578063ba0bafb4146101be578063d2ef0795146101c7576100d4565b80637965ff9b1461017257806381e580d3146101855780638ffb5c9714610198576100d4565b8063338b1d31116100b2578063338b1d311461011d5780633f26479e146101255780634f0e0ef31461012d576100d4565b80631e7df9d3146100d95780632e7ba6ef146100ee5780632eb4a7ab14610101575b600080fd5b6100ec6100e7366004610a96565b6101ea565b005b6100ec6100fc366004610b58565b61038c565b61010a60015481565b6040519081526020015b60405180910390f35b6100ec6105ca565b61010a606481565b60025461014d9073ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff9091168152602001610114565b61010a610180366004610bdf565b610683565b61010a610193366004610b15565b6106aa565b61010a6101a6366004610bbe565b6106cb565b61010a6101b9366004610b2d565b6106e2565b61010a60035481565b6101da6101d5366004610b2d565b610730565b6040519015158152602001610114565b6040516bffffffffffffffffffffffff19606086901b1660208201526034810184905260009060540160405160208183030381529060405280519060200120905061026c83838080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050600154915084905061075b565b6102bd5760405162461bcd60e51b815260206004820152600d60248201527f496e76616c69642070726f6f660000000000000000000000000000000000000060448201526064015b60405180910390fd5b6000805b60035481101561032d576102d58188610730565b61031b5761030e600482815481106102fd57634e487b7160e01b600052603260045260246000fd5b9060005260206000200154876106cb565b6103189083610c16565b91505b8061032581610c84565b9150506102c1565b506103388682610818565b6103845760405162461bcd60e51b815260206004820152600f60248201527f5472616e73666572206661696c6564000000000000000000000000000000000060448201526064016102b4565b505050505050565b84600354116103dd5760405162461bcd60e51b815260206004820181905260248201527f63616e6e6f7420636c61696d20666f722061206675747572652077696e646f7760448201526064016102b4565b6103e78585610730565b1561045a5760405162461bcd60e51b815260206004820152602860248201527f4163636f756e7420616c726561647920636c61696d656420746865206769766560448201527f6e2077696e646f7700000000000000000000000000000000000000000000000060648201526084016102b4565b6104648585610962565b6040516bffffffffffffffffffffffff19606086901b166020820152603481018490526000906054016040516020818303038152906040528051906020012090506104e683838080602002602001604051908101604052809392919081815260200183836020028082843760009201919091525050600154915084905061075b565b6105325760405162461bcd60e51b815260206004820152600d60248201527f496e76616c69642070726f6f660000000000000000000000000000000000000060448201526064016102b4565b60006105696004888154811061055857634e487b7160e01b600052603260045260246000fd5b9060005260206000200154866106cb565b90506105758682610818565b6105c15760405162461bcd60e51b815260206004820152600f60248201527f5472616e73666572206661696c6564000000000000000000000000000000000060448201526064016102b4565b50505050505050565b60035461060c5760048054600181018255600091909152477f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b90910155610669565b600480600160035461061e9190610c6d565b8154811061063c57634e487b7160e01b600052603260045260246000fd5b9060005260206000200154476106529190610c6d565b815460018101835560009283526020909220909101555b60016003600082825461067c9190610c16565b9091555050565b6000606461069763ffffffff841685610c4e565b6106a19190610c2e565b90505b92915050565b600481815481106106ba57600080fd5b600091825260209091200154905081565b60006106d8606480610c4e565b6106978385610c4e565b6000828260405160200161071292919091825260601b6bffffffffffffffffffffffff1916602082015260340190565b60405160208183030381529060405280519060200120905092915050565b60006005600061074085856106e2565b815260208101919091526040016000205460ff169392505050565b600081815b855181101561080d57600086828151811061078b57634e487b7160e01b600052603260045260246000fd5b602002602001015190508083116107cd5760408051602081018590529081018290526060016040516020818303038152906040528051906020012092506107fa565b60408051602081018390529081018490526060016040516020818303038152906040528051906020012092505b508061080581610c84565b915050610760565b509092149392505050565b600061082483836109b3565b9050806106a457600260009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663d0e30db0836040518263ffffffff1660e01b81526004016000604051808303818588803b15801561089557600080fd5b505af11580156108a9573d6000803e3d6000fd5b50506002546040517fa9059cbb00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff888116600483015260248201889052909116935063a9059cbb92506044019050602060405180830381600087803b15801561092357600080fd5b505af1158015610937573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061095b9190610aee565b5092915050565b60016005600061097285856106e2565b8152602081019190915260400160002080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00169115159190911790555050565b6000808373ffffffffffffffffffffffffffffffffffffffff168361753090604051600060405180830381858888f193505050503d8060008114610a13576040519150601f19603f3d011682016040523d82523d6000602084013e610a18565b606091505b509095945050505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610a4757600080fd5b919050565b60008083601f840112610a5d578182fd5b50813567ffffffffffffffff811115610a74578182fd5b6020830191508360208260051b8501011115610a8f57600080fd5b9250929050565b60008060008060608587031215610aab578384fd5b610ab485610a23565b935060208501359250604085013567ffffffffffffffff811115610ad6578283fd5b610ae287828801610a4c565b95989497509550505050565b600060208284031215610aff578081fd5b81518015158114610b0e578182fd5b9392505050565b600060208284031215610b26578081fd5b5035919050565b60008060408385031215610b3f578182fd5b82359150610b4f60208401610a23565b90509250929050565b600080600080600060808688031215610b6f578081fd5b85359450610b7f60208701610a23565b935060408601359250606086013567ffffffffffffffff811115610ba1578182fd5b610bad88828901610a4c565b969995985093965092949392505050565b60008060408385031215610bd0578182fd5b50508035926020909101359150565b60008060408385031215610bf1578182fd5b82359150602083013563ffffffff81168114610c0b578182fd5b809150509250929050565b60008219821115610c2957610c29610c9f565b500190565b600082610c4957634e487b7160e01b81526012600452602481fd5b500490565b6000816000190483118215151615610c6857610c68610c9f565b500290565b600082821015610c7f57610c7f610c9f565b500390565b6000600019821415610c9857610c98610c9f565b5060010190565b634e487b7160e01b600052601160045260246000fdfea264697066735822122084246828cd2e10fcaf6d7a4deac0130855356d15974fb09c423b731e71b5a8ec64736f6c63430008030033";