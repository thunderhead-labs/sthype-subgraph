import {
  Approval as ApprovalEvent,
  DefaultAdminDelayChangeCanceled as DefaultAdminDelayChangeCanceledEvent,
  DefaultAdminDelayChangeScheduled as DefaultAdminDelayChangeScheduledEvent,
  DefaultAdminTransferCanceled as DefaultAdminTransferCanceledEvent,
  DefaultAdminTransferScheduled as DefaultAdminTransferScheduledEvent,
  Initialized as InitializedEvent,
  Mint as MintEvent,
  Rebase as RebaseEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  Transfer as TransferEvent
} from "../generated/stHYPE/stHYPE"
import {
  // Approval,
  // DefaultAdminDelayChangeCanceled,
  // DefaultAdminDelayChangeScheduled,
  // DefaultAdminTransferCanceled,
  // DefaultAdminTransferScheduled,
  // Initialized,
  // Mint,
  Rebase,
  // RoleAdminChanged,
  // RoleGranted,
  // RoleRevoked,
  // Transfer
} from "../generated/schema"

// export function handleApproval(event: ApprovalEvent): void {
//   let entity = new Approval(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.owner = event.params.owner
//   entity.spender = event.params.spender
//   entity.amount = event.params.amount

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

// export function handleDefaultAdminDelayChangeCanceled(
//   event: DefaultAdminDelayChangeCanceledEvent
// ): void {
//   let entity = new DefaultAdminDelayChangeCanceled(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

// export function handleDefaultAdminDelayChangeScheduled(
//   event: DefaultAdminDelayChangeScheduledEvent
// ): void {
//   let entity = new DefaultAdminDelayChangeScheduled(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.newDelay = event.params.newDelay
//   entity.effectSchedule = event.params.effectSchedule

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

// export function handleDefaultAdminTransferCanceled(
//   event: DefaultAdminTransferCanceledEvent
// ): void {
//   let entity = new DefaultAdminTransferCanceled(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

// export function handleDefaultAdminTransferScheduled(
//   event: DefaultAdminTransferScheduledEvent
// ): void {
//   let entity = new DefaultAdminTransferScheduled(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.newAdmin = event.params.newAdmin
//   entity.acceptSchedule = event.params.acceptSchedule

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

// export function handleInitialized(event: InitializedEvent): void {
//   let entity = new Initialized(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.version = event.params.version

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

// export function handleMint(event: MintEvent): void {
//   let entity = new Mint(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.to = event.params.to
//   entity.amount = event.params.amount

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

export function handleRebase(event: RebaseEvent): void {
  let entity = new Rebase(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  //entity.epoch = event.params.epoch
  entity.currentSupply = event.params.currentSupply
  entity.newSupply = event.params.newSupply
  entity.rebaseInterval = event.params.rebaseInterval

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

// export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
//   let entity = new RoleAdminChanged(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.role = event.params.role
//   entity.previousAdminRole = event.params.previousAdminRole
//   entity.newAdminRole = event.params.newAdminRole

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

// export function handleRoleGranted(event: RoleGrantedEvent): void {
//   let entity = new RoleGranted(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.role = event.params.role
//   entity.account = event.params.account
//   entity.sender = event.params.sender

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

// export function handleRoleRevoked(event: RoleRevokedEvent): void {
//   let entity = new RoleRevoked(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.role = event.params.role
//   entity.account = event.params.account
//   entity.sender = event.params.sender

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }

// export function handleTransfer(event: TransferEvent): void {
//   let entity = new Transfer(
//     event.transaction.hash.concatI32(event.logIndex.toI32())
//   )
//   entity.from = event.params.from
//   entity.to = event.params.to
//   entity.amount = event.params.amount

//   entity.blockNumber = event.block.number
//   entity.blockTimestamp = event.block.timestamp
//   entity.transactionHash = event.transaction.hash

//   entity.save()
// }
