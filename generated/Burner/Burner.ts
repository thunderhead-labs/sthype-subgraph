// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Burn extends ethereum.Event {
  get params(): Burn__Params {
    return new Burn__Params(this);
  }
}

export class Burn__Params {
  _event: Burn;

  constructor(event: Burn) {
    this._event = event;
  }

  get burner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get recipient(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get amount(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }

  get burnId(): BigInt {
    return this._event.parameters[3].value.toBigInt();
  }
}

export class DefaultAdminDelayChangeCanceled extends ethereum.Event {
  get params(): DefaultAdminDelayChangeCanceled__Params {
    return new DefaultAdminDelayChangeCanceled__Params(this);
  }
}

export class DefaultAdminDelayChangeCanceled__Params {
  _event: DefaultAdminDelayChangeCanceled;

  constructor(event: DefaultAdminDelayChangeCanceled) {
    this._event = event;
  }
}

export class DefaultAdminDelayChangeScheduled extends ethereum.Event {
  get params(): DefaultAdminDelayChangeScheduled__Params {
    return new DefaultAdminDelayChangeScheduled__Params(this);
  }
}

export class DefaultAdminDelayChangeScheduled__Params {
  _event: DefaultAdminDelayChangeScheduled;

  constructor(event: DefaultAdminDelayChangeScheduled) {
    this._event = event;
  }

  get newDelay(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get effectSchedule(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class DefaultAdminTransferCanceled extends ethereum.Event {
  get params(): DefaultAdminTransferCanceled__Params {
    return new DefaultAdminTransferCanceled__Params(this);
  }
}

export class DefaultAdminTransferCanceled__Params {
  _event: DefaultAdminTransferCanceled;

  constructor(event: DefaultAdminTransferCanceled) {
    this._event = event;
  }
}

export class DefaultAdminTransferScheduled extends ethereum.Event {
  get params(): DefaultAdminTransferScheduled__Params {
    return new DefaultAdminTransferScheduled__Params(this);
  }
}

export class DefaultAdminTransferScheduled__Params {
  _event: DefaultAdminTransferScheduled;

  constructor(event: DefaultAdminTransferScheduled) {
    this._event = event;
  }

  get newAdmin(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get acceptSchedule(): BigInt {
    return this._event.parameters[1].value.toBigInt();
  }
}

export class Initialized extends ethereum.Event {
  get params(): Initialized__Params {
    return new Initialized__Params(this);
  }
}

export class Initialized__Params {
  _event: Initialized;

  constructor(event: Initialized) {
    this._event = event;
  }

  get version(): i32 {
    return this._event.parameters[0].value.toI32();
  }
}

export class RoleAdminChanged extends ethereum.Event {
  get params(): RoleAdminChanged__Params {
    return new RoleAdminChanged__Params(this);
  }
}

export class RoleAdminChanged__Params {
  _event: RoleAdminChanged;

  constructor(event: RoleAdminChanged) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get previousAdminRole(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }

  get newAdminRole(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class RoleGranted extends ethereum.Event {
  get params(): RoleGranted__Params {
    return new RoleGranted__Params(this);
  }
}

export class RoleGranted__Params {
  _event: RoleGranted;

  constructor(event: RoleGranted) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class RoleRevoked extends ethereum.Event {
  get params(): RoleRevoked__Params {
    return new RoleRevoked__Params(this);
  }
}

export class RoleRevoked__Params {
  _event: RoleRevoked;

  constructor(event: RoleRevoked) {
    this._event = event;
  }

  get role(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }

  get account(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get sender(): Address {
    return this._event.parameters[2].value.toAddress();
  }
}

export class Burner__burnsResult {
  value0: BigInt;
  value1: Address;
  value2: boolean;

  constructor(value0: BigInt, value1: Address, value2: boolean) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromBoolean(this.value2));
    return map;
  }

  getAmount(): BigInt {
    return this.value0;
  }

  getUser(): Address {
    return this.value1;
  }

  getCompleted(): boolean {
    return this.value2;
  }
}

export class Burner__getAllBurnsResultValue0Struct extends ethereum.Tuple {
  get amount(): BigInt {
    return this[0].toBigInt();
  }

  get user(): Address {
    return this[1].toAddress();
  }

  get completed(): boolean {
    return this[2].toBoolean();
  }
}

export class Burner__getBurnsResultValue0Struct extends ethereum.Tuple {
  get amount(): BigInt {
    return this[0].toBigInt();
  }

  get user(): Address {
    return this[1].toAddress();
  }

  get completed(): boolean {
    return this[2].toBoolean();
  }
}

export class Burner__getBurnsResult {
  value0: Array<Burner__getBurnsResultValue0Struct>;
  value1: Array<BigInt>;
  value2: Array<boolean>;

  constructor(
    value0: Array<Burner__getBurnsResultValue0Struct>,
    value1: Array<BigInt>,
    value2: Array<boolean>
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromTupleArray(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigIntArray(this.value1));
    map.set("value2", ethereum.Value.fromBooleanArray(this.value2));
    return map;
  }

  getValue0(): Array<Burner__getBurnsResultValue0Struct> {
    return this.value0;
  }

  getValue1(): Array<BigInt> {
    return this.value1;
  }

  getValue2(): Array<boolean> {
    return this.value2;
  }
}

export class Burner__pendingDefaultAdminResult {
  value0: Address;
  value1: BigInt;

  constructor(value0: Address, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getNewAdmin(): Address {
    return this.value0;
  }

  getSchedule(): BigInt {
    return this.value1;
  }
}

export class Burner__pendingDefaultAdminDelayResult {
  value0: BigInt;
  value1: BigInt;

  constructor(value0: BigInt, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getNewDelay(): BigInt {
    return this.value0;
  }

  getSchedule(): BigInt {
    return this.value1;
  }
}

export class Burner extends ethereum.SmartContract {
  static bind(address: Address): Burner {
    return new Burner("Burner", address);
  }

  BURNER_ROLE(): Bytes {
    let result = super.call("BURNER_ROLE", "BURNER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_BURNER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("BURNER_ROLE", "BURNER_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  DEFAULT_ADMIN_ROLE(): Bytes {
    let result = super.call(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_DEFAULT_ADMIN_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "DEFAULT_ADMIN_ROLE",
      "DEFAULT_ADMIN_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  FEE_RECIPIENT_ROLE(): Bytes {
    let result = super.call(
      "FEE_RECIPIENT_ROLE",
      "FEE_RECIPIENT_ROLE():(bytes32)",
      []
    );

    return result[0].toBytes();
  }

  try_FEE_RECIPIENT_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "FEE_RECIPIENT_ROLE",
      "FEE_RECIPIENT_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  GOVERNOR_ROLE(): Bytes {
    let result = super.call("GOVERNOR_ROLE", "GOVERNOR_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_GOVERNOR_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "GOVERNOR_ROLE",
      "GOVERNOR_ROLE():(bytes32)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  MANAGER_ROLE(): Bytes {
    let result = super.call("MANAGER_ROLE", "MANAGER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_MANAGER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("MANAGER_ROLE", "MANAGER_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  MINTER_ROLE(): Bytes {
    let result = super.call("MINTER_ROLE", "MINTER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_MINTER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("MINTER_ROLE", "MINTER_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  PAUSER_ROLE(): Bytes {
    let result = super.call("PAUSER_ROLE", "PAUSER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_PAUSER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("PAUSER_ROLE", "PAUSER_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  REBASER_ROLE(): Bytes {
    let result = super.call("REBASER_ROLE", "REBASER_ROLE():(bytes32)", []);

    return result[0].toBytes();
  }

  try_REBASER_ROLE(): ethereum.CallResult<Bytes> {
    let result = super.tryCall("REBASER_ROLE", "REBASER_ROLE():(bytes32)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  burn(to: Address, amount: BigInt): BigInt {
    let result = super.call("burn", "burn(address,uint256):(uint256)", [
      ethereum.Value.fromAddress(to),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);

    return result[0].toBigInt();
  }

  try_burn(to: Address, amount: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("burn", "burn(address,uint256):(uint256)", [
      ethereum.Value.fromAddress(to),
      ethereum.Value.fromUnsignedBigInt(amount)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  burns(param0: BigInt): Burner__burnsResult {
    let result = super.call("burns", "burns(uint256):(uint88,address,bool)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return new Burner__burnsResult(
      result[0].toBigInt(),
      result[1].toAddress(),
      result[2].toBoolean()
    );
  }

  try_burns(param0: BigInt): ethereum.CallResult<Burner__burnsResult> {
    let result = super.tryCall(
      "burns",
      "burns(uint256):(uint88,address,bool)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Burner__burnsResult(
        value[0].toBigInt(),
        value[1].toAddress(),
        value[2].toBoolean()
      )
    );
  }

  defaultAdmin(): Address {
    let result = super.call("defaultAdmin", "defaultAdmin():(address)", []);

    return result[0].toAddress();
  }

  try_defaultAdmin(): ethereum.CallResult<Address> {
    let result = super.tryCall("defaultAdmin", "defaultAdmin():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  defaultAdminDelay(): BigInt {
    let result = super.call(
      "defaultAdminDelay",
      "defaultAdminDelay():(uint48)",
      []
    );

    return result[0].toBigInt();
  }

  try_defaultAdminDelay(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "defaultAdminDelay",
      "defaultAdminDelay():(uint48)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  defaultAdminDelayIncreaseWait(): BigInt {
    let result = super.call(
      "defaultAdminDelayIncreaseWait",
      "defaultAdminDelayIncreaseWait():(uint48)",
      []
    );

    return result[0].toBigInt();
  }

  try_defaultAdminDelayIncreaseWait(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "defaultAdminDelayIncreaseWait",
      "defaultAdminDelayIncreaseWait():(uint48)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  flip(): Address {
    let result = super.call("flip", "flip():(address)", []);

    return result[0].toAddress();
  }

  try_flip(): ethereum.CallResult<Address> {
    let result = super.tryCall("flip", "flip():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getAllBurns(): Array<Burner__getAllBurnsResultValue0Struct> {
    let result = super.call(
      "getAllBurns",
      "getAllBurns():((uint88,address,bool)[])",
      []
    );

    return result[0].toTupleArray<Burner__getAllBurnsResultValue0Struct>();
  }

  try_getAllBurns(): ethereum.CallResult<
    Array<Burner__getAllBurnsResultValue0Struct>
  > {
    let result = super.tryCall(
      "getAllBurns",
      "getAllBurns():((uint88,address,bool)[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      value[0].toTupleArray<Burner__getAllBurnsResultValue0Struct>()
    );
  }

  getBurnIds(account: Address): Array<BigInt> {
    let result = super.call("getBurnIds", "getBurnIds(address):(uint256[])", [
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBigIntArray();
  }

  try_getBurnIds(account: Address): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "getBurnIds",
      "getBurnIds(address):(uint256[])",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  getBurns(account: Address): Burner__getBurnsResult {
    let result = super.call(
      "getBurns",
      "getBurns(address):((uint88,address,bool)[],uint256[],bool[])",
      [ethereum.Value.fromAddress(account)]
    );

    return new Burner__getBurnsResult(
      result[0].toTupleArray<Burner__getBurnsResultValue0Struct>(),
      result[1].toBigIntArray(),
      result[2].toBooleanArray()
    );
  }

  try_getBurns(account: Address): ethereum.CallResult<Burner__getBurnsResult> {
    let result = super.tryCall(
      "getBurns",
      "getBurns(address):((uint88,address,bool)[],uint256[],bool[])",
      [ethereum.Value.fromAddress(account)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Burner__getBurnsResult(
        value[0].toTupleArray<Burner__getBurnsResultValue0Struct>(),
        value[1].toBigIntArray(),
        value[2].toBooleanArray()
      )
    );
  }

  getRoleAdmin(role: Bytes): Bytes {
    let result = super.call("getRoleAdmin", "getRoleAdmin(bytes32):(bytes32)", [
      ethereum.Value.fromFixedBytes(role)
    ]);

    return result[0].toBytes();
  }

  try_getRoleAdmin(role: Bytes): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "getRoleAdmin",
      "getRoleAdmin(bytes32):(bytes32)",
      [ethereum.Value.fromFixedBytes(role)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  hasRole(role: Bytes, account: Address): boolean {
    let result = super.call("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);

    return result[0].toBoolean();
  }

  try_hasRole(role: Bytes, account: Address): ethereum.CallResult<boolean> {
    let result = super.tryCall("hasRole", "hasRole(bytes32,address):(bool)", [
      ethereum.Value.fromFixedBytes(role),
      ethereum.Value.fromAddress(account)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  output(): Address {
    let result = super.call("output", "output():(address)", []);

    return result[0].toAddress();
  }

  try_output(): ethereum.CallResult<Address> {
    let result = super.tryCall("output", "output():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  pendingDefaultAdmin(): Burner__pendingDefaultAdminResult {
    let result = super.call(
      "pendingDefaultAdmin",
      "pendingDefaultAdmin():(address,uint48)",
      []
    );

    return new Burner__pendingDefaultAdminResult(
      result[0].toAddress(),
      result[1].toBigInt()
    );
  }

  try_pendingDefaultAdmin(): ethereum.CallResult<
    Burner__pendingDefaultAdminResult
  > {
    let result = super.tryCall(
      "pendingDefaultAdmin",
      "pendingDefaultAdmin():(address,uint48)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Burner__pendingDefaultAdminResult(
        value[0].toAddress(),
        value[1].toBigInt()
      )
    );
  }

  pendingDefaultAdminDelay(): Burner__pendingDefaultAdminDelayResult {
    let result = super.call(
      "pendingDefaultAdminDelay",
      "pendingDefaultAdminDelay():(uint48,uint48)",
      []
    );

    return new Burner__pendingDefaultAdminDelayResult(
      result[0].toBigInt(),
      result[1].toBigInt()
    );
  }

  try_pendingDefaultAdminDelay(): ethereum.CallResult<
    Burner__pendingDefaultAdminDelayResult
  > {
    let result = super.tryCall(
      "pendingDefaultAdminDelay",
      "pendingDefaultAdminDelay():(uint48,uint48)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Burner__pendingDefaultAdminDelayResult(
        value[0].toBigInt(),
        value[1].toBigInt()
      )
    );
  }

  redeemable(burnId: BigInt): boolean {
    let result = super.call("redeemable", "redeemable(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(burnId)
    ]);

    return result[0].toBoolean();
  }

  try_redeemable(burnId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("redeemable", "redeemable(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(burnId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  redeemed(): BigInt {
    let result = super.call("redeemed", "redeemed():(uint256)", []);

    return result[0].toBigInt();
  }

  try_redeemed(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("redeemed", "redeemed():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  stflip(): Address {
    let result = super.call("stflip", "stflip():(address)", []);

    return result[0].toAddress();
  }

  try_stflip(): ethereum.CallResult<Address> {
    let result = super.tryCall("stflip", "stflip():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  sums(param0: BigInt): BigInt {
    let result = super.call("sums", "sums(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBigInt();
  }

  try_sums(param0: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall("sums", "sums(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  totalPendingBurns(): BigInt {
    let result = super.call(
      "totalPendingBurns",
      "totalPendingBurns():(uint256)",
      []
    );

    return result[0].toBigInt();
  }

  try_totalPendingBurns(): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "totalPendingBurns",
      "totalPendingBurns():(uint256)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class AcceptDefaultAdminTransferCall extends ethereum.Call {
  get inputs(): AcceptDefaultAdminTransferCall__Inputs {
    return new AcceptDefaultAdminTransferCall__Inputs(this);
  }

  get outputs(): AcceptDefaultAdminTransferCall__Outputs {
    return new AcceptDefaultAdminTransferCall__Outputs(this);
  }
}

export class AcceptDefaultAdminTransferCall__Inputs {
  _call: AcceptDefaultAdminTransferCall;

  constructor(call: AcceptDefaultAdminTransferCall) {
    this._call = call;
  }
}

export class AcceptDefaultAdminTransferCall__Outputs {
  _call: AcceptDefaultAdminTransferCall;

  constructor(call: AcceptDefaultAdminTransferCall) {
    this._call = call;
  }
}

export class BeginDefaultAdminTransferCall extends ethereum.Call {
  get inputs(): BeginDefaultAdminTransferCall__Inputs {
    return new BeginDefaultAdminTransferCall__Inputs(this);
  }

  get outputs(): BeginDefaultAdminTransferCall__Outputs {
    return new BeginDefaultAdminTransferCall__Outputs(this);
  }
}

export class BeginDefaultAdminTransferCall__Inputs {
  _call: BeginDefaultAdminTransferCall;

  constructor(call: BeginDefaultAdminTransferCall) {
    this._call = call;
  }

  get newAdmin(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class BeginDefaultAdminTransferCall__Outputs {
  _call: BeginDefaultAdminTransferCall;

  constructor(call: BeginDefaultAdminTransferCall) {
    this._call = call;
  }
}

export class BurnCall extends ethereum.Call {
  get inputs(): BurnCall__Inputs {
    return new BurnCall__Inputs(this);
  }

  get outputs(): BurnCall__Outputs {
    return new BurnCall__Outputs(this);
  }
}

export class BurnCall__Inputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get to(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class BurnCall__Outputs {
  _call: BurnCall;

  constructor(call: BurnCall) {
    this._call = call;
  }

  get value0(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class CancelDefaultAdminTransferCall extends ethereum.Call {
  get inputs(): CancelDefaultAdminTransferCall__Inputs {
    return new CancelDefaultAdminTransferCall__Inputs(this);
  }

  get outputs(): CancelDefaultAdminTransferCall__Outputs {
    return new CancelDefaultAdminTransferCall__Outputs(this);
  }
}

export class CancelDefaultAdminTransferCall__Inputs {
  _call: CancelDefaultAdminTransferCall;

  constructor(call: CancelDefaultAdminTransferCall) {
    this._call = call;
  }
}

export class CancelDefaultAdminTransferCall__Outputs {
  _call: CancelDefaultAdminTransferCall;

  constructor(call: CancelDefaultAdminTransferCall) {
    this._call = call;
  }
}

export class ChangeDefaultAdminDelayCall extends ethereum.Call {
  get inputs(): ChangeDefaultAdminDelayCall__Inputs {
    return new ChangeDefaultAdminDelayCall__Inputs(this);
  }

  get outputs(): ChangeDefaultAdminDelayCall__Outputs {
    return new ChangeDefaultAdminDelayCall__Outputs(this);
  }
}

export class ChangeDefaultAdminDelayCall__Inputs {
  _call: ChangeDefaultAdminDelayCall;

  constructor(call: ChangeDefaultAdminDelayCall) {
    this._call = call;
  }

  get newDelay(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class ChangeDefaultAdminDelayCall__Outputs {
  _call: ChangeDefaultAdminDelayCall;

  constructor(call: ChangeDefaultAdminDelayCall) {
    this._call = call;
  }
}

export class GrantRoleCall extends ethereum.Call {
  get inputs(): GrantRoleCall__Inputs {
    return new GrantRoleCall__Inputs(this);
  }

  get outputs(): GrantRoleCall__Outputs {
    return new GrantRoleCall__Outputs(this);
  }
}

export class GrantRoleCall__Inputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class GrantRoleCall__Outputs {
  _call: GrantRoleCall;

  constructor(call: GrantRoleCall) {
    this._call = call;
  }
}

export class InitializeCall extends ethereum.Call {
  get inputs(): InitializeCall__Inputs {
    return new InitializeCall__Inputs(this);
  }

  get outputs(): InitializeCall__Outputs {
    return new InitializeCall__Outputs(this);
  }
}

export class InitializeCall__Inputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }

  get stflip_(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get gov_(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get flip_(): Address {
    return this._call.inputValues[2].value.toAddress();
  }

  get output_(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class InitializeCall__Outputs {
  _call: InitializeCall;

  constructor(call: InitializeCall) {
    this._call = call;
  }
}

export class RedeemCall extends ethereum.Call {
  get inputs(): RedeemCall__Inputs {
    return new RedeemCall__Inputs(this);
  }

  get outputs(): RedeemCall__Outputs {
    return new RedeemCall__Outputs(this);
  }
}

export class RedeemCall__Inputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }

  get burnId(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class RedeemCall__Outputs {
  _call: RedeemCall;

  constructor(call: RedeemCall) {
    this._call = call;
  }
}

export class RenounceRoleCall extends ethereum.Call {
  get inputs(): RenounceRoleCall__Inputs {
    return new RenounceRoleCall__Inputs(this);
  }

  get outputs(): RenounceRoleCall__Outputs {
    return new RenounceRoleCall__Outputs(this);
  }
}

export class RenounceRoleCall__Inputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RenounceRoleCall__Outputs {
  _call: RenounceRoleCall;

  constructor(call: RenounceRoleCall) {
    this._call = call;
  }
}

export class RevokeRoleCall extends ethereum.Call {
  get inputs(): RevokeRoleCall__Inputs {
    return new RevokeRoleCall__Inputs(this);
  }

  get outputs(): RevokeRoleCall__Outputs {
    return new RevokeRoleCall__Outputs(this);
  }
}

export class RevokeRoleCall__Inputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }

  get role(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }

  get account(): Address {
    return this._call.inputValues[1].value.toAddress();
  }
}

export class RevokeRoleCall__Outputs {
  _call: RevokeRoleCall;

  constructor(call: RevokeRoleCall) {
    this._call = call;
  }
}

export class RollbackDefaultAdminDelayCall extends ethereum.Call {
  get inputs(): RollbackDefaultAdminDelayCall__Inputs {
    return new RollbackDefaultAdminDelayCall__Inputs(this);
  }

  get outputs(): RollbackDefaultAdminDelayCall__Outputs {
    return new RollbackDefaultAdminDelayCall__Outputs(this);
  }
}

export class RollbackDefaultAdminDelayCall__Inputs {
  _call: RollbackDefaultAdminDelayCall;

  constructor(call: RollbackDefaultAdminDelayCall) {
    this._call = call;
  }
}

export class RollbackDefaultAdminDelayCall__Outputs {
  _call: RollbackDefaultAdminDelayCall;

  constructor(call: RollbackDefaultAdminDelayCall) {
    this._call = call;
  }
}
