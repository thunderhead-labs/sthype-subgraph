import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  AddToDelegateCallAllowlist,
  AddToSafeAllowlist,
  EIP712DomainChanged,
  ProposalCanceled,
  ProposalCreated,
  ProposalExecuted,
  ProposalThresholdSet,
  QuorumNumeratorUpdated,
  RemoveFromDelegateCallAllowlist,
  RemoveFromSafeAllowlist,
  SafeVotingPeriodSet,
  ShortCircuitNumeratorUpdated,
  TransactionProposed,
  VeFxsVotingDelegationSet,
  VoteCast,
  VoteCastWithParams,
  VotingDelayBlocksSet,
  VotingDelaySet,
  VotingPeriodSet
} from "../generated/FraxGovernorOmega/FraxGovernorOmega"

export function createAddToDelegateCallAllowlistEvent(
  contractAddress: Address
): AddToDelegateCallAllowlist {
  let addToDelegateCallAllowlistEvent = changetype<AddToDelegateCallAllowlist>(
    newMockEvent()
  )

  addToDelegateCallAllowlistEvent.parameters = new Array()

  addToDelegateCallAllowlistEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )

  return addToDelegateCallAllowlistEvent
}

export function createAddToSafeAllowlistEvent(
  safe: Address
): AddToSafeAllowlist {
  let addToSafeAllowlistEvent = changetype<AddToSafeAllowlist>(newMockEvent())

  addToSafeAllowlistEvent.parameters = new Array()

  addToSafeAllowlistEvent.parameters.push(
    new ethereum.EventParam("safe", ethereum.Value.fromAddress(safe))
  )

  return addToSafeAllowlistEvent
}

export function createEIP712DomainChangedEvent(): EIP712DomainChanged {
  let eip712DomainChangedEvent = changetype<EIP712DomainChanged>(newMockEvent())

  eip712DomainChangedEvent.parameters = new Array()

  return eip712DomainChangedEvent
}

export function createProposalCanceledEvent(
  proposalId: BigInt
): ProposalCanceled {
  let proposalCanceledEvent = changetype<ProposalCanceled>(newMockEvent())

  proposalCanceledEvent.parameters = new Array()

  proposalCanceledEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )

  return proposalCanceledEvent
}

export function createProposalCreatedEvent(
  proposalId: BigInt,
  proposer: Address,
  targets: Array<Address>,
  values: Array<BigInt>,
  signatures: Array<string>,
  calldatas: Array<Bytes>,
  voteStart: BigInt,
  voteEnd: BigInt,
  description: string
): ProposalCreated {
  let proposalCreatedEvent = changetype<ProposalCreated>(newMockEvent())

  proposalCreatedEvent.parameters = new Array()

  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam("proposer", ethereum.Value.fromAddress(proposer))
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam("targets", ethereum.Value.fromAddressArray(targets))
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "values",
      ethereum.Value.fromUnsignedBigIntArray(values)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "signatures",
      ethereum.Value.fromStringArray(signatures)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "calldatas",
      ethereum.Value.fromBytesArray(calldatas)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "voteStart",
      ethereum.Value.fromUnsignedBigInt(voteStart)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "voteEnd",
      ethereum.Value.fromUnsignedBigInt(voteEnd)
    )
  )
  proposalCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "description",
      ethereum.Value.fromString(description)
    )
  )

  return proposalCreatedEvent
}

export function createProposalExecutedEvent(
  proposalId: BigInt
): ProposalExecuted {
  let proposalExecutedEvent = changetype<ProposalExecuted>(newMockEvent())

  proposalExecutedEvent.parameters = new Array()

  proposalExecutedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )

  return proposalExecutedEvent
}

export function createProposalThresholdSetEvent(
  oldProposalThreshold: BigInt,
  newProposalThreshold: BigInt
): ProposalThresholdSet {
  let proposalThresholdSetEvent = changetype<ProposalThresholdSet>(
    newMockEvent()
  )

  proposalThresholdSetEvent.parameters = new Array()

  proposalThresholdSetEvent.parameters.push(
    new ethereum.EventParam(
      "oldProposalThreshold",
      ethereum.Value.fromUnsignedBigInt(oldProposalThreshold)
    )
  )
  proposalThresholdSetEvent.parameters.push(
    new ethereum.EventParam(
      "newProposalThreshold",
      ethereum.Value.fromUnsignedBigInt(newProposalThreshold)
    )
  )

  return proposalThresholdSetEvent
}

export function createQuorumNumeratorUpdatedEvent(
  oldQuorumNumerator: BigInt,
  newQuorumNumerator: BigInt
): QuorumNumeratorUpdated {
  let quorumNumeratorUpdatedEvent = changetype<QuorumNumeratorUpdated>(
    newMockEvent()
  )

  quorumNumeratorUpdatedEvent.parameters = new Array()

  quorumNumeratorUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldQuorumNumerator",
      ethereum.Value.fromUnsignedBigInt(oldQuorumNumerator)
    )
  )
  quorumNumeratorUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newQuorumNumerator",
      ethereum.Value.fromUnsignedBigInt(newQuorumNumerator)
    )
  )

  return quorumNumeratorUpdatedEvent
}

export function createRemoveFromDelegateCallAllowlistEvent(
  contractAddress: Address
): RemoveFromDelegateCallAllowlist {
  let removeFromDelegateCallAllowlistEvent = changetype<
    RemoveFromDelegateCallAllowlist
  >(newMockEvent())

  removeFromDelegateCallAllowlistEvent.parameters = new Array()

  removeFromDelegateCallAllowlistEvent.parameters.push(
    new ethereum.EventParam(
      "contractAddress",
      ethereum.Value.fromAddress(contractAddress)
    )
  )

  return removeFromDelegateCallAllowlistEvent
}

export function createRemoveFromSafeAllowlistEvent(
  safe: Address
): RemoveFromSafeAllowlist {
  let removeFromSafeAllowlistEvent = changetype<RemoveFromSafeAllowlist>(
    newMockEvent()
  )

  removeFromSafeAllowlistEvent.parameters = new Array()

  removeFromSafeAllowlistEvent.parameters.push(
    new ethereum.EventParam("safe", ethereum.Value.fromAddress(safe))
  )

  return removeFromSafeAllowlistEvent
}

export function createSafeVotingPeriodSetEvent(
  safe: Address,
  oldSafeVotingPeriod: BigInt,
  newSafeVotingPeriod: BigInt
): SafeVotingPeriodSet {
  let safeVotingPeriodSetEvent = changetype<SafeVotingPeriodSet>(newMockEvent())

  safeVotingPeriodSetEvent.parameters = new Array()

  safeVotingPeriodSetEvent.parameters.push(
    new ethereum.EventParam("safe", ethereum.Value.fromAddress(safe))
  )
  safeVotingPeriodSetEvent.parameters.push(
    new ethereum.EventParam(
      "oldSafeVotingPeriod",
      ethereum.Value.fromUnsignedBigInt(oldSafeVotingPeriod)
    )
  )
  safeVotingPeriodSetEvent.parameters.push(
    new ethereum.EventParam(
      "newSafeVotingPeriod",
      ethereum.Value.fromUnsignedBigInt(newSafeVotingPeriod)
    )
  )

  return safeVotingPeriodSetEvent
}

export function createShortCircuitNumeratorUpdatedEvent(
  oldShortCircuitNumerator: BigInt,
  newShortCircuitNumerator: BigInt
): ShortCircuitNumeratorUpdated {
  let shortCircuitNumeratorUpdatedEvent = changetype<
    ShortCircuitNumeratorUpdated
  >(newMockEvent())

  shortCircuitNumeratorUpdatedEvent.parameters = new Array()

  shortCircuitNumeratorUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldShortCircuitNumerator",
      ethereum.Value.fromUnsignedBigInt(oldShortCircuitNumerator)
    )
  )
  shortCircuitNumeratorUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newShortCircuitNumerator",
      ethereum.Value.fromUnsignedBigInt(newShortCircuitNumerator)
    )
  )

  return shortCircuitNumeratorUpdatedEvent
}

export function createTransactionProposedEvent(
  safe: Address,
  nonce: BigInt,
  txHash: Bytes,
  proposalId: BigInt
): TransactionProposed {
  let transactionProposedEvent = changetype<TransactionProposed>(newMockEvent())

  transactionProposedEvent.parameters = new Array()

  transactionProposedEvent.parameters.push(
    new ethereum.EventParam("safe", ethereum.Value.fromAddress(safe))
  )
  transactionProposedEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )
  transactionProposedEvent.parameters.push(
    new ethereum.EventParam("txHash", ethereum.Value.fromFixedBytes(txHash))
  )
  transactionProposedEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )

  return transactionProposedEvent
}

export function createVeFxsVotingDelegationSetEvent(
  oldVotingDelegation: Address,
  newVotingDelegation: Address
): VeFxsVotingDelegationSet {
  let veFxsVotingDelegationSetEvent = changetype<VeFxsVotingDelegationSet>(
    newMockEvent()
  )

  veFxsVotingDelegationSetEvent.parameters = new Array()

  veFxsVotingDelegationSetEvent.parameters.push(
    new ethereum.EventParam(
      "oldVotingDelegation",
      ethereum.Value.fromAddress(oldVotingDelegation)
    )
  )
  veFxsVotingDelegationSetEvent.parameters.push(
    new ethereum.EventParam(
      "newVotingDelegation",
      ethereum.Value.fromAddress(newVotingDelegation)
    )
  )

  return veFxsVotingDelegationSetEvent
}

export function createVoteCastEvent(
  voter: Address,
  proposalId: BigInt,
  support: i32,
  weight: BigInt,
  reason: string
): VoteCast {
  let voteCastEvent = changetype<VoteCast>(newMockEvent())

  voteCastEvent.parameters = new Array()

  voteCastEvent.parameters.push(
    new ethereum.EventParam("voter", ethereum.Value.fromAddress(voter))
  )
  voteCastEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  voteCastEvent.parameters.push(
    new ethereum.EventParam(
      "support",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(support))
    )
  )
  voteCastEvent.parameters.push(
    new ethereum.EventParam("weight", ethereum.Value.fromUnsignedBigInt(weight))
  )
  voteCastEvent.parameters.push(
    new ethereum.EventParam("reason", ethereum.Value.fromString(reason))
  )

  return voteCastEvent
}

export function createVoteCastWithParamsEvent(
  voter: Address,
  proposalId: BigInt,
  support: i32,
  weight: BigInt,
  reason: string,
  params: Bytes
): VoteCastWithParams {
  let voteCastWithParamsEvent = changetype<VoteCastWithParams>(newMockEvent())

  voteCastWithParamsEvent.parameters = new Array()

  voteCastWithParamsEvent.parameters.push(
    new ethereum.EventParam("voter", ethereum.Value.fromAddress(voter))
  )
  voteCastWithParamsEvent.parameters.push(
    new ethereum.EventParam(
      "proposalId",
      ethereum.Value.fromUnsignedBigInt(proposalId)
    )
  )
  voteCastWithParamsEvent.parameters.push(
    new ethereum.EventParam(
      "support",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(support))
    )
  )
  voteCastWithParamsEvent.parameters.push(
    new ethereum.EventParam("weight", ethereum.Value.fromUnsignedBigInt(weight))
  )
  voteCastWithParamsEvent.parameters.push(
    new ethereum.EventParam("reason", ethereum.Value.fromString(reason))
  )
  voteCastWithParamsEvent.parameters.push(
    new ethereum.EventParam("params", ethereum.Value.fromBytes(params))
  )

  return voteCastWithParamsEvent
}

export function createVotingDelayBlocksSetEvent(
  oldVotingDelayBlocks: BigInt,
  newVotingDelayBlocks: BigInt
): VotingDelayBlocksSet {
  let votingDelayBlocksSetEvent = changetype<VotingDelayBlocksSet>(
    newMockEvent()
  )

  votingDelayBlocksSetEvent.parameters = new Array()

  votingDelayBlocksSetEvent.parameters.push(
    new ethereum.EventParam(
      "oldVotingDelayBlocks",
      ethereum.Value.fromUnsignedBigInt(oldVotingDelayBlocks)
    )
  )
  votingDelayBlocksSetEvent.parameters.push(
    new ethereum.EventParam(
      "newVotingDelayBlocks",
      ethereum.Value.fromUnsignedBigInt(newVotingDelayBlocks)
    )
  )

  return votingDelayBlocksSetEvent
}

export function createVotingDelaySetEvent(
  oldVotingDelay: BigInt,
  newVotingDelay: BigInt
): VotingDelaySet {
  let votingDelaySetEvent = changetype<VotingDelaySet>(newMockEvent())

  votingDelaySetEvent.parameters = new Array()

  votingDelaySetEvent.parameters.push(
    new ethereum.EventParam(
      "oldVotingDelay",
      ethereum.Value.fromUnsignedBigInt(oldVotingDelay)
    )
  )
  votingDelaySetEvent.parameters.push(
    new ethereum.EventParam(
      "newVotingDelay",
      ethereum.Value.fromUnsignedBigInt(newVotingDelay)
    )
  )

  return votingDelaySetEvent
}

export function createVotingPeriodSetEvent(
  oldVotingPeriod: BigInt,
  newVotingPeriod: BigInt
): VotingPeriodSet {
  let votingPeriodSetEvent = changetype<VotingPeriodSet>(newMockEvent())

  votingPeriodSetEvent.parameters = new Array()

  votingPeriodSetEvent.parameters.push(
    new ethereum.EventParam(
      "oldVotingPeriod",
      ethereum.Value.fromUnsignedBigInt(oldVotingPeriod)
    )
  )
  votingPeriodSetEvent.parameters.push(
    new ethereum.EventParam(
      "newVotingPeriod",
      ethereum.Value.fromUnsignedBigInt(newVotingPeriod)
    )
  )

  return votingPeriodSetEvent
}
