//SPDX-License-Identifier: GPL-3.0-or-later
pragma solidity 0.6.8;
pragma experimental ABIEncoderV2;

import {SafeMath} from "./lib/SafeMath.sol";
import {IMirrorENSRegistrar} from "./ens/interfaces/IMirrorENSRegistrar.sol";
import {IMirrorWriteToken} from "./interfaces/IMirrorWriteToken.sol";

/**
 * @title MirrorWriteToken
 * @author MirrorXYZ
 *
 *  An ERC20 that grants access to the ENS namespace through a
 *  burn-and-register model.
 */
contract MirrorWriteToken is IMirrorWriteToken {
    using SafeMath for uint256;

    // ============ Immutable ERC20 Attributes ============

    string public constant override symbol = "WRITE";
    string public constant override name = "Mirror Write Token";
    uint8 public constant override decimals = 18;

    // ============ Immutable Registration Configuration ============

    uint256 internal constant REGISTRATION_COST = 1e18;

    // ============ Mutable Ownership Configuration ============

    address private _owner;
    /**
     * @dev Allows for two-step ownership transfer, whereby the next owner
     * needs to accept the ownership transfer explicitly.
     */
    address private _nextOwner;

    // ============ Mutable Registration Configuration ============

    bool public registrable = true;
    address public ensRegistrar;

    // ============ Mutable ERC20 Attributes ============

    uint256 public override totalSupply;
    mapping(address => uint256) public override balanceOf;
    mapping(address => mapping(address => uint256)) public override allowance;

    // ============ Events ============

    event Registered(string label, address owner);
    event Mint(address indexed to, uint256 amount);
    event Approval(
        address indexed owner,
        address indexed spender,
        uint256 value
    );
    event Transfer(address indexed from, address indexed to, uint256 value);
    event OwnershipTransferred(
        address indexed previousOwner,
        address indexed newOwner
    );

    // ============ Modifiers ============

    modifier canRegister() {
        require(registrable, "MirrorWriteToken: registration is closed.");
        _;
    }

    modifier onlyOwner() {
        require(isOwner(), "MirrorWriteToken: caller is not the owner.");
        _;
    }

    modifier onlyNextOwner() {
        require(
            isNextOwner(),
            "MirrorWriteToken: current owner must set caller as next owner."
        );
        _;
    }

    // ============ Constructor ============

    constructor() public {
        _owner = tx.origin;
        emit OwnershipTransferred(address(0), _owner);
    }

    // ============ Minting ============

    /**
     * @dev Function to mint tokens
     * @param to The address that will receive the minted tokens.
     * @param amount The amount of tokens to mint.
     */
    function mint(address to, uint256 amount) external onlyOwner {
        _mint(to, amount);

        emit Mint(to, amount);
    }

    // ============ Registration ============

    /**
     * @dev Returns the cost of registration in tokens with full decimals.
     */
    function registrationCost() external view override returns (uint256) {
        return REGISTRATION_COST;
    }

    /**
     * Burns the sender's invite tokens and registers an ENS given label to a given address.
     * @param label The user's ENS label, e.g. "dev" for dev.mirror.xyz.
     * @param owner The address that should own the label.
     */
    function register(string calldata label, address owner)
        external
        override
        canRegister
    {
        _burn(msg.sender, REGISTRATION_COST);

        emit Registered(label, owner);

        IMirrorENSRegistrar(ensRegistrar).register(label, owner);
    }

    // ============ Ownership ============

    /**
     * @dev Returns true if the caller is the current owner.
     */
    function isOwner() public view returns (bool) {
        return msg.sender == _owner;
    }

    /**
     * @dev Returns true if the caller is the next owner.
     */
    function isNextOwner() public view returns (bool) {
        return msg.sender == _nextOwner;
    }

    /**
     * @dev Allows a new account (`newOwner`) to accept ownership.
     * Can only be called by the current owner.
     */
    function transferOwnership(address nextOwner_) external onlyOwner {
        require(
            nextOwner_ != address(0),
            "MirrorWriteToken: next owner is the zero address."
        );

        _nextOwner = nextOwner_;
    }

    /**
     * @dev Cancel a transfer of ownership to a new account.
     * Can only be called by the current owner.
     */
    function cancelOwnershipTransfer() external onlyOwner {
        delete _nextOwner;
    }

    /**
     * @dev Transfers ownership of the contract to the caller.
     * Can only be called by a new potential owner set by the current owner.
     */
    function acceptOwnership() external onlyNextOwner {
        delete _nextOwner;

        emit OwnershipTransferred(_owner, msg.sender);

        _owner = msg.sender;
    }

    /**
     * @dev Leaves the contract without owner. It will not be possible to call
     * `onlyOwner` functions anymore. Can only be called by the current owner.
     *
     * NOTE: Renouncing ownership will leave the contract without an owner,
     * thereby removing any functionality that is only available to the owner.
     */
    function renounceOwnership() external onlyOwner {
        emit OwnershipTransferred(_owner, address(0));
        _owner = address(0);
    }

    // ============ Configuration Management ============

    /**
     * Allows the owner to change the ENS Registrar address.
     */
    function setENSRegistrar(address ensRegistrar_) external onlyOwner {
        ensRegistrar = ensRegistrar_;
    }

    /**
     * Allows the owner to pause registration.
     */
    function setRegistrable(bool registrable_) external onlyOwner {
        registrable = registrable_;
    }

    // ============ ERC20 Spec ============

    function _mint(address to, uint256 value) internal {
        totalSupply = totalSupply.add(value);
        balanceOf[to] = balanceOf[to].add(value);
        emit Transfer(address(0), to, value);
    }

    function _burn(address from, uint256 value) internal {
        balanceOf[from] = balanceOf[from].sub(value);
        totalSupply = totalSupply.sub(value);
        emit Transfer(from, address(0), value);
    }

    function _approve(
        address owner,
        address spender,
        uint256 value
    ) private {
        allowance[owner][spender] = value;
        emit Approval(owner, spender, value);
    }

    function _transfer(
        address from,
        address to,
        uint256 value
    ) private {
        balanceOf[from] = balanceOf[from].sub(value);
        balanceOf[to] = balanceOf[to].add(value);
        emit Transfer(from, to, value);
    }

    function approve(address spender, uint256 value)
        external
        override
        returns (bool)
    {
        _approve(msg.sender, spender, value);
        return true;
    }

    function transfer(address to, uint256 value)
        external
        override
        returns (bool)
    {
        _transfer(msg.sender, to, value);
        return true;
    }

    function transferFrom(
        address from,
        address to,
        uint256 value
    ) external override returns (bool) {
        if (allowance[from][msg.sender] != uint256(-1)) {
            allowance[from][msg.sender] = allowance[from][msg.sender].sub(
                value
            );
        }
        _transfer(from, to, value);
        return true;
    }
}
