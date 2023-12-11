import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  DefaultAdminDelayChangeCanceled,
  DefaultAdminDelayChangeScheduled,
  DefaultAdminTransferCanceled,
  DefaultAdminTransferScheduled,
  Initialized,
  OperatorAdded,
  OperatorFeeUpdated,
  OperatorWhitelistUpdated,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  ValidatorAllowanceUpdated,
  ValidatorsAdded,
  ValidatorsFunded,
  ValidatorsRedeemed,
  ValidatorsStatusUpdated,
  ValidatorsTrackBalanceUpdated,
  ValidatorsWhitelistUpdated
} from "../generated/Output/Output"

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

export function createOperatorAddedEvent(
  name: string,
  serviceFeeBps: BigInt,
  validatorFeeBps: BigInt,
  validatorAllowance: BigInt,
  manager: Address
): OperatorAdded {
  let operatorAddedEvent = changetype<OperatorAdded>(newMockEvent())

  operatorAddedEvent.parameters = new Array()

  operatorAddedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  operatorAddedEvent.parameters.push(
    new ethereum.EventParam(
      "serviceFeeBps",
      ethereum.Value.fromUnsignedBigInt(serviceFeeBps)
    )
  )
  operatorAddedEvent.parameters.push(
    new ethereum.EventParam(
      "validatorFeeBps",
      ethereum.Value.fromUnsignedBigInt(validatorFeeBps)
    )
  )
  operatorAddedEvent.parameters.push(
    new ethereum.EventParam(
      "validatorAllowance",
      ethereum.Value.fromUnsignedBigInt(validatorAllowance)
    )
  )
  operatorAddedEvent.parameters.push(
    new ethereum.EventParam("manager", ethereum.Value.fromAddress(manager))
  )

  return operatorAddedEvent
}

export function createOperatorFeeUpdatedEvent(
  serviceFeeBps: BigInt,
  validatorFeeBps: BigInt,
  operatorId: BigInt
): OperatorFeeUpdated {
  let operatorFeeUpdatedEvent = changetype<OperatorFeeUpdated>(newMockEvent())

  operatorFeeUpdatedEvent.parameters = new Array()

  operatorFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "serviceFeeBps",
      ethereum.Value.fromUnsignedBigInt(serviceFeeBps)
    )
  )
  operatorFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "validatorFeeBps",
      ethereum.Value.fromUnsignedBigInt(validatorFeeBps)
    )
  )
  operatorFeeUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "operatorId",
      ethereum.Value.fromUnsignedBigInt(operatorId)
    )
  )

  return operatorFeeUpdatedEvent
}

export function createOperatorWhitelistUpdatedEvent(
  operatorId: BigInt,
  whitelist: boolean
): OperatorWhitelistUpdated {
  let operatorWhitelistUpdatedEvent = changetype<OperatorWhitelistUpdated>(
    newMockEvent()
  )

  operatorWhitelistUpdatedEvent.parameters = new Array()

  operatorWhitelistUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "operatorId",
      ethereum.Value.fromUnsignedBigInt(operatorId)
    )
  )
  operatorWhitelistUpdatedEvent.parameters.push(
    new ethereum.EventParam("whitelist", ethereum.Value.fromBoolean(whitelist))
  )

  return operatorWhitelistUpdatedEvent
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

export function createValidatorAllowanceUpdatedEvent(
  newAllowance: BigInt,
  operatorId: BigInt
): ValidatorAllowanceUpdated {
  let validatorAllowanceUpdatedEvent = changetype<ValidatorAllowanceUpdated>(
    newMockEvent()
  )

  validatorAllowanceUpdatedEvent.parameters = new Array()

  validatorAllowanceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newAllowance",
      ethereum.Value.fromUnsignedBigInt(newAllowance)
    )
  )
  validatorAllowanceUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "operatorId",
      ethereum.Value.fromUnsignedBigInt(operatorId)
    )
  )

  return validatorAllowanceUpdatedEvent
}

export function createValidatorsAddedEvent(
  count: BigInt,
  operatorId: BigInt
): ValidatorsAdded {
  let validatorsAddedEvent = changetype<ValidatorsAdded>(newMockEvent())

  validatorsAddedEvent.parameters = new Array()

  validatorsAddedEvent.parameters.push(
    new ethereum.EventParam("count", ethereum.Value.fromUnsignedBigInt(count))
  )
  validatorsAddedEvent.parameters.push(
    new ethereum.EventParam(
      "operatorId",
      ethereum.Value.fromUnsignedBigInt(operatorId)
    )
  )

  return validatorsAddedEvent
}

export function createValidatorsFundedEvent(
  count: BigInt,
  amount: BigInt
): ValidatorsFunded {
  let validatorsFundedEvent = changetype<ValidatorsFunded>(newMockEvent())

  validatorsFundedEvent.parameters = new Array()

  validatorsFundedEvent.parameters.push(
    new ethereum.EventParam("count", ethereum.Value.fromUnsignedBigInt(count))
  )
  validatorsFundedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return validatorsFundedEvent
}

export function createValidatorsRedeemedEvent(
  count: BigInt,
  amount: BigInt
): ValidatorsRedeemed {
  let validatorsRedeemedEvent = changetype<ValidatorsRedeemed>(newMockEvent())

  validatorsRedeemedEvent.parameters = new Array()

  validatorsRedeemedEvent.parameters.push(
    new ethereum.EventParam("count", ethereum.Value.fromUnsignedBigInt(count))
  )
  validatorsRedeemedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return validatorsRedeemedEvent
}

export function createValidatorsStatusUpdatedEvent(
  count: BigInt,
  whitelist: boolean,
  trackBalance: boolean
): ValidatorsStatusUpdated {
  let validatorsStatusUpdatedEvent = changetype<ValidatorsStatusUpdated>(
    newMockEvent()
  )

  validatorsStatusUpdatedEvent.parameters = new Array()

  validatorsStatusUpdatedEvent.parameters.push(
    new ethereum.EventParam("count", ethereum.Value.fromUnsignedBigInt(count))
  )
  validatorsStatusUpdatedEvent.parameters.push(
    new ethereum.EventParam("whitelist", ethereum.Value.fromBoolean(whitelist))
  )
  validatorsStatusUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "trackBalance",
      ethereum.Value.fromBoolean(trackBalance)
    )
  )

  return validatorsStatusUpdatedEvent
}

export function createValidatorsTrackBalanceUpdatedEvent(
  count: BigInt,
  status: boolean
): ValidatorsTrackBalanceUpdated {
  let validatorsTrackBalanceUpdatedEvent = changetype<
    ValidatorsTrackBalanceUpdated
  >(newMockEvent())

  validatorsTrackBalanceUpdatedEvent.parameters = new Array()

  validatorsTrackBalanceUpdatedEvent.parameters.push(
    new ethereum.EventParam("count", ethereum.Value.fromUnsignedBigInt(count))
  )
  validatorsTrackBalanceUpdatedEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )

  return validatorsTrackBalanceUpdatedEvent
}

export function createValidatorsWhitelistUpdatedEvent(
  count: BigInt,
  status: boolean
): ValidatorsWhitelistUpdated {
  let validatorsWhitelistUpdatedEvent = changetype<ValidatorsWhitelistUpdated>(
    newMockEvent()
  )

  validatorsWhitelistUpdatedEvent.parameters = new Array()

  validatorsWhitelistUpdatedEvent.parameters.push(
    new ethereum.EventParam("count", ethereum.Value.fromUnsignedBigInt(count))
  )
  validatorsWhitelistUpdatedEvent.parameters.push(
    new ethereum.EventParam("status", ethereum.Value.fromBoolean(status))
  )

  return validatorsWhitelistUpdatedEvent
}
