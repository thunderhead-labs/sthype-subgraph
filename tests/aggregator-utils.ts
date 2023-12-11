import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  BurnAggregation,
  CanonicalPoolChanged,
  DefaultAdminDelayChangeCanceled,
  DefaultAdminDelayChangeScheduled,
  DefaultAdminTransferCanceled,
  DefaultAdminTransferScheduled,
  Initialized,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  StakeAggregation
} from "../generated/Aggregator/Aggregator"

export function createBurnAggregationEvent(
  sender: Address,
  amountInstantBurn: BigInt,
  amountBurn: BigInt,
  received: BigInt
): BurnAggregation {
  let burnAggregationEvent = changetype<BurnAggregation>(newMockEvent())

  burnAggregationEvent.parameters = new Array()

  burnAggregationEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  burnAggregationEvent.parameters.push(
    new ethereum.EventParam(
      "amountInstantBurn",
      ethereum.Value.fromUnsignedBigInt(amountInstantBurn)
    )
  )
  burnAggregationEvent.parameters.push(
    new ethereum.EventParam(
      "amountBurn",
      ethereum.Value.fromUnsignedBigInt(amountBurn)
    )
  )
  burnAggregationEvent.parameters.push(
    new ethereum.EventParam(
      "received",
      ethereum.Value.fromUnsignedBigInt(received)
    )
  )

  return burnAggregationEvent
}

export function createCanonicalPoolChangedEvent(
  pool: Address
): CanonicalPoolChanged {
  let canonicalPoolChangedEvent = changetype<CanonicalPoolChanged>(
    newMockEvent()
  )

  canonicalPoolChangedEvent.parameters = new Array()

  canonicalPoolChangedEvent.parameters.push(
    new ethereum.EventParam("pool", ethereum.Value.fromAddress(pool))
  )

  return canonicalPoolChangedEvent
}

export function createDefaultAdminDelayChangeCanceledEvent(): DefaultAdminDelayChangeCanceled {
  let defaultAdminDelayChangeCanceledEvent = changetype<
    DefaultAdminDelayChangeCanceled
  >(newMockEvent())

  defaultAdminDelayChangeCanceledEvent.parameters = new Array()

  return defaultAdminDelayChangeCanceledEvent
}

export function createDefaultAdminDelayChangeScheduledEvent(
  newDelay: BigInt,
  effectSchedule: BigInt
): DefaultAdminDelayChangeScheduled {
  let defaultAdminDelayChangeScheduledEvent = changetype<
    DefaultAdminDelayChangeScheduled
  >(newMockEvent())

  defaultAdminDelayChangeScheduledEvent.parameters = new Array()

  defaultAdminDelayChangeScheduledEvent.parameters.push(
    new ethereum.EventParam(
      "newDelay",
      ethereum.Value.fromUnsignedBigInt(newDelay)
    )
  )
  defaultAdminDelayChangeScheduledEvent.parameters.push(
    new ethereum.EventParam(
      "effectSchedule",
      ethereum.Value.fromUnsignedBigInt(effectSchedule)
    )
  )

  return defaultAdminDelayChangeScheduledEvent
}

export function createDefaultAdminTransferCanceledEvent(): DefaultAdminTransferCanceled {
  let defaultAdminTransferCanceledEvent = changetype<
    DefaultAdminTransferCanceled
  >(newMockEvent())

  defaultAdminTransferCanceledEvent.parameters = new Array()

  return defaultAdminTransferCanceledEvent
}

export function createDefaultAdminTransferScheduledEvent(
  newAdmin: Address,
  acceptSchedule: BigInt
): DefaultAdminTransferScheduled {
  let defaultAdminTransferScheduledEvent = changetype<
    DefaultAdminTransferScheduled
  >(newMockEvent())

  defaultAdminTransferScheduledEvent.parameters = new Array()

  defaultAdminTransferScheduledEvent.parameters.push(
    new ethereum.EventParam("newAdmin", ethereum.Value.fromAddress(newAdmin))
  )
  defaultAdminTransferScheduledEvent.parameters.push(
    new ethereum.EventParam(
      "acceptSchedule",
      ethereum.Value.fromUnsignedBigInt(acceptSchedule)
    )
  )

  return defaultAdminTransferScheduledEvent
}

export function createInitializedEvent(version: i32): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(version))
    )
  )

  return initializedEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createStakeAggregationEvent(
  sender: Address,
  swapReceived: BigInt,
  minted: BigInt
): StakeAggregation {
  let stakeAggregationEvent = changetype<StakeAggregation>(newMockEvent())

  stakeAggregationEvent.parameters = new Array()

  stakeAggregationEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  stakeAggregationEvent.parameters.push(
    new ethereum.EventParam(
      "swapReceived",
      ethereum.Value.fromUnsignedBigInt(swapReceived)
    )
  )
  stakeAggregationEvent.parameters.push(
    new ethereum.EventParam("minted", ethereum.Value.fromUnsignedBigInt(minted))
  )

  return stakeAggregationEvent
}
