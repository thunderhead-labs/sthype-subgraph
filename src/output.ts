import {
  DefaultAdminDelayChangeCanceled as DefaultAdminDelayChangeCanceledEvent,
  DefaultAdminDelayChangeScheduled as DefaultAdminDelayChangeScheduledEvent,
  DefaultAdminTransferCanceled as DefaultAdminTransferCanceledEvent,
  DefaultAdminTransferScheduled as DefaultAdminTransferScheduledEvent,
  Initialized as InitializedEvent,
  OperatorAdded as OperatorAddedEvent,
  OperatorFeeUpdated as OperatorFeeUpdatedEvent,
  OperatorWhitelistUpdated as OperatorWhitelistUpdatedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  ValidatorAllowanceUpdated as ValidatorAllowanceUpdatedEvent,
  ValidatorsAdded as ValidatorsAddedEvent,
  ValidatorsFunded as ValidatorsFundedEvent,
  ValidatorsRedeemed as ValidatorsRedeemedEvent,
  ValidatorsStatusUpdated as ValidatorsStatusUpdatedEvent,
  ValidatorsTrackBalanceUpdated as ValidatorsTrackBalanceUpdatedEvent,
  ValidatorsWhitelistUpdated as ValidatorsWhitelistUpdatedEvent
} from "../generated/Output/Output"
import {Bytes, Value} from "@graphprotocol/graph-ts";
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
} from "../generated/schema"

export function handleDefaultAdminDelayChangeCanceled(
  event: DefaultAdminDelayChangeCanceledEvent
): void {
  let entity = new DefaultAdminDelayChangeCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDefaultAdminDelayChangeScheduled(
  event: DefaultAdminDelayChangeScheduledEvent
): void {
  let entity = new DefaultAdminDelayChangeScheduled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newDelay = event.params.newDelay
  entity.effectSchedule = event.params.effectSchedule

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDefaultAdminTransferCanceled(
  event: DefaultAdminTransferCanceledEvent
): void {
  let entity = new DefaultAdminTransferCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDefaultAdminTransferScheduled(
  event: DefaultAdminTransferScheduledEvent
): void {
  let entity = new DefaultAdminTransferScheduled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newAdmin = event.params.newAdmin
  entity.acceptSchedule = event.params.acceptSchedule

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOperatorAdded(event: OperatorAddedEvent): void {
  let entity = new OperatorAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.name = event.params.name.toString()
  entity.serviceFeeBps = event.params.serviceFeeBps
  entity.validatorFeeBps = event.params.validatorFeeBps
  entity.validatorAllowance = event.params.validatorAllowance
  entity.manager = event.params.manager

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOperatorFeeUpdated(event: OperatorFeeUpdatedEvent): void {
  let entity = new OperatorFeeUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.serviceFeeBps = event.params.serviceFeeBps
  entity.validatorFeeBps = event.params.validatorFeeBps
  entity.operatorId = event.params.operatorId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOperatorWhitelistUpdated(
  event: OperatorWhitelistUpdatedEvent
): void {
  let entity = new OperatorWhitelistUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operatorId = event.params.operatorId
  entity.whitelist = event.params.whitelist

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleValidatorAllowanceUpdated(
  event: ValidatorAllowanceUpdatedEvent
): void {
  let entity = new ValidatorAllowanceUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.newAllowance = event.params.newAllowance
  entity.operatorId = event.params.operatorId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleValidatorsAdded(event: ValidatorsAddedEvent): void {
  let entity = new ValidatorsAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.count = event.params.count
  entity.operatorId = event.params.operatorId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleValidatorsFunded(event: ValidatorsFundedEvent): void {
  let entity = new ValidatorsFunded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.count = event.params.count
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleValidatorsRedeemed(event: ValidatorsRedeemedEvent): void {
  let entity = new ValidatorsRedeemed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.count = event.params.count
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleValidatorsStatusUpdated(
  event: ValidatorsStatusUpdatedEvent
): void {
  let entity = new ValidatorsStatusUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.count = event.params.count
  entity.whitelist = event.params.whitelist
  entity.trackBalance = event.params.trackBalance

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleValidatorsTrackBalanceUpdated(
  event: ValidatorsTrackBalanceUpdatedEvent
): void {
  let entity = new ValidatorsTrackBalanceUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.count = event.params.count
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleValidatorsWhitelistUpdated(
  event: ValidatorsWhitelistUpdatedEvent
): void {
  let entity = new ValidatorsWhitelistUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.count = event.params.count
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
