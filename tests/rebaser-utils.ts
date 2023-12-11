import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  DefaultAdminDelayChangeCanceled,
  DefaultAdminDelayChangeScheduled,
  DefaultAdminTransferCanceled,
  DefaultAdminTransferScheduled,
  FeeClaim,
  Initialized,
  NewAprThreshold,
  NewRebaseInterval,
  NewSlashThreshold,
  RebaserRebase,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked
} from "../generated/Rebaser/Rebaser"

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

export function createFeeClaimEvent(
  feeRecipient: Address,
  amount: BigInt,
  receivedFlip: boolean,
  operatorId: BigInt
): FeeClaim {
  let feeClaimEvent = changetype<FeeClaim>(newMockEvent())

  feeClaimEvent.parameters = new Array()

  feeClaimEvent.parameters.push(
    new ethereum.EventParam(
      "feeRecipient",
      ethereum.Value.fromAddress(feeRecipient)
    )
  )
  feeClaimEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  feeClaimEvent.parameters.push(
    new ethereum.EventParam(
      "receivedFlip",
      ethereum.Value.fromBoolean(receivedFlip)
    )
  )
  feeClaimEvent.parameters.push(
    new ethereum.EventParam(
      "operatorId",
      ethereum.Value.fromUnsignedBigInt(operatorId)
    )
  )

  return feeClaimEvent
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

export function createNewAprThresholdEvent(
  newAprThreshold: BigInt
): NewAprThreshold {
  let newAprThresholdEvent = changetype<NewAprThreshold>(newMockEvent())

  newAprThresholdEvent.parameters = new Array()

  newAprThresholdEvent.parameters.push(
    new ethereum.EventParam(
      "newAprThreshold",
      ethereum.Value.fromUnsignedBigInt(newAprThreshold)
    )
  )

  return newAprThresholdEvent
}

export function createNewRebaseIntervalEvent(
  newRebaseInterval: BigInt
): NewRebaseInterval {
  let newRebaseIntervalEvent = changetype<NewRebaseInterval>(newMockEvent())

  newRebaseIntervalEvent.parameters = new Array()

  newRebaseIntervalEvent.parameters.push(
    new ethereum.EventParam(
      "newRebaseInterval",
      ethereum.Value.fromUnsignedBigInt(newRebaseInterval)
    )
  )

  return newRebaseIntervalEvent
}

export function createNewSlashThresholdEvent(
  newSlashThreshold: BigInt
): NewSlashThreshold {
  let newSlashThresholdEvent = changetype<NewSlashThreshold>(newMockEvent())

  newSlashThresholdEvent.parameters = new Array()

  newSlashThresholdEvent.parameters.push(
    new ethereum.EventParam(
      "newSlashThreshold",
      ethereum.Value.fromUnsignedBigInt(newSlashThreshold)
    )
  )

  return newSlashThresholdEvent
}

export function createRebaserRebaseEvent(
  apr: BigInt,
  stateChainBalance: BigInt,
  previousSupply: BigInt,
  newSupply: BigInt
): RebaserRebase {
  let rebaserRebaseEvent = changetype<RebaserRebase>(newMockEvent())

  rebaserRebaseEvent.parameters = new Array()

  rebaserRebaseEvent.parameters.push(
    new ethereum.EventParam("apr", ethereum.Value.fromUnsignedBigInt(apr))
  )
  rebaserRebaseEvent.parameters.push(
    new ethereum.EventParam(
      "stateChainBalance",
      ethereum.Value.fromUnsignedBigInt(stateChainBalance)
    )
  )
  rebaserRebaseEvent.parameters.push(
    new ethereum.EventParam(
      "previousSupply",
      ethereum.Value.fromUnsignedBigInt(previousSupply)
    )
  )
  rebaserRebaseEvent.parameters.push(
    new ethereum.EventParam(
      "newSupply",
      ethereum.Value.fromUnsignedBigInt(newSupply)
    )
  )

  return rebaserRebaseEvent
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
