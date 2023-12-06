import {
  AddToDelegateCallAllowlist as AddToDelegateCallAllowlistEvent,
  AddToSafeAllowlist as AddToSafeAllowlistEvent,
  EIP712DomainChanged as EIP712DomainChangedEvent,
  ProposalCanceled as ProposalCanceledEvent,
  ProposalCreated as ProposalCreatedEvent,
  ProposalExecuted as ProposalExecutedEvent,
  ProposalThresholdSet as ProposalThresholdSetEvent,
  QuorumNumeratorUpdated as QuorumNumeratorUpdatedEvent,
  RemoveFromDelegateCallAllowlist as RemoveFromDelegateCallAllowlistEvent,
  RemoveFromSafeAllowlist as RemoveFromSafeAllowlistEvent,
  SafeVotingPeriodSet as SafeVotingPeriodSetEvent,
  ShortCircuitNumeratorUpdated as ShortCircuitNumeratorUpdatedEvent,
  TransactionProposed as TransactionProposedEvent,
  VeFxsVotingDelegationSet as VeFxsVotingDelegationSetEvent,
  VoteCast as VoteCastEvent,
  VoteCastWithParams as VoteCastWithParamsEvent,
  VotingDelayBlocksSet as VotingDelayBlocksSetEvent,
  VotingDelaySet as VotingDelaySetEvent,
  VotingPeriodSet as VotingPeriodSetEvent
} from "../generated/FraxGovernorOmega/FraxGovernorOmega"
import {Bytes, Value, log, ethereum, BigInt} from "@graphprotocol/graph-ts";
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
} from "../generated/schema"

export function handleAddToDelegateCallAllowlist(
  event: AddToDelegateCallAllowlistEvent
): void {
  let entity = new AddToDelegateCallAllowlist(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.contractAddress = event.params.contractAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAddToSafeAllowlist(event: AddToSafeAllowlistEvent): void {
  let entity = new AddToSafeAllowlist(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.safe = event.params.safe

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEIP712DomainChanged(
  event: EIP712DomainChangedEvent
): void {
  let entity = new EIP712DomainChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProposalCanceled(event: ProposalCanceledEvent): void {
  let entity = new ProposalCanceled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProposalCreated(event: ProposalCreatedEvent): void {
  let entity = new ProposalCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId
  entity.proposer = event.params.proposer
  entity.targets = Value.fromAddressArray(event.params.targets).toBytesArray()
  entity.values = event.params.values
  entity.signatures = event.params.signatures
  entity.calldatas = event.params.calldatas
  entity.voteStart = event.params.voteStart
  entity.voteEnd = event.params.voteEnd
  entity.description = event.params.description

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProposalExecuted(event: ProposalExecutedEvent): void {
  let entity = new ProposalExecuted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.proposalId = event.params.proposalId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProposalThresholdSet(
  event: ProposalThresholdSetEvent
): void {
  let entity = new ProposalThresholdSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldProposalThreshold = event.params.oldProposalThreshold
  entity.newProposalThreshold = event.params.newProposalThreshold

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleQuorumNumeratorUpdated(
  event: QuorumNumeratorUpdatedEvent
): void {
  let entity = new QuorumNumeratorUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldQuorumNumerator = event.params.oldQuorumNumerator
  entity.newQuorumNumerator = event.params.newQuorumNumerator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRemoveFromDelegateCallAllowlist(
  event: RemoveFromDelegateCallAllowlistEvent
): void {
  let entity = new RemoveFromDelegateCallAllowlist(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.contractAddress = event.params.contractAddress

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRemoveFromSafeAllowlist(
  event: RemoveFromSafeAllowlistEvent
): void {
  let entity = new RemoveFromSafeAllowlist(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.safe = event.params.safe

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSafeVotingPeriodSet(
  event: SafeVotingPeriodSetEvent
): void {
  let entity = new SafeVotingPeriodSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.safe = event.params.safe
  entity.oldSafeVotingPeriod = event.params.oldSafeVotingPeriod
  entity.newSafeVotingPeriod = event.params.newSafeVotingPeriod

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleShortCircuitNumeratorUpdated(
  event: ShortCircuitNumeratorUpdatedEvent
): void {
  let entity = new ShortCircuitNumeratorUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldShortCircuitNumerator = event.params.oldShortCircuitNumerator
  entity.newShortCircuitNumerator = event.params.newShortCircuitNumerator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransactionProposed(
  event: TransactionProposedEvent
): void {
  let entity = new TransactionProposed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.safe = event.params.safe
  entity.nonce = event.params.nonce
  entity.txHash = event.params.txHash
  entity.proposalId = event.params.proposalId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.addTransactionCalldata = event.transaction.input
  entity.transactionLogIndex = event.transactionLogIndex
  entity.logIndex = event.logIndex

  const functionSelector = event.transaction.input.toHexString().slice(0,10);

  const inputDataHexString = event.transaction.input.toHexString().slice(10);
  const hexStringToDecode = '0x0000000000000000000000000000000000000000000000000000000000000020' + inputDataHexString;
  const bytesToDecode = Bytes.fromByteArray(Bytes.fromHexString(hexStringToDecode));

  if (functionSelector == '0xb021d2c3') { // addTransaction
    
    const decoded = ethereum.decode(
      '(address,(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,uint256),bytes)', // addTransaction params
      bytesToDecode
    );
    entity.proposalCalldata = decoded!.toTuple()[1].toTuple()[2].toBytes();
  }
  // this can't be tested until there is a proposal with a batchAddTransaction. need to also figure out how to get the log index within a transaction
  // else if (functionSelector == '0x072c8e0d 11111') {//batchAddTransaction

  //   const decoded = ethereum.decode(
  //     '(address[],(address,uint256,bytes,uint8,uint256,uint256,uint256,address,address,uint256)[],bytes[])', // addTransaction params
  //     bytesToDecode
  //   );

  //   const calldataArray = decoded!.toTuple()[1].toArray();
    
  //   entity.proposalCalldata = calldataArray[changetype<i32>(event.logIndex) * 2 - 1].toTuple()[2].toBytes(); // TransactionProposed is emitted after ProposalCreated

  //   log.warning('decoded: {}', [decoded!.toTuple()[0].toAddress().toHexString()]);
  // } 
  else {
    log.error('functionSelector not found: {}', [functionSelector]);

    entity.proposalCalldata = Bytes.fromByteArray(Bytes.fromHexString('0x70e2fd5f0000000000000000000000000000000000000000000000000000000000000000')) // unableToDecode(uint256)
  }

  entity.save()
}

export function handleVeFxsVotingDelegationSet(
  event: VeFxsVotingDelegationSetEvent
): void {
  let entity = new VeFxsVotingDelegationSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldVotingDelegation = event.params.oldVotingDelegation
  entity.newVotingDelegation = event.params.newVotingDelegation

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVoteCast(event: VoteCastEvent): void {
  let entity = new VoteCast(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.voter = event.params.voter
  entity.proposalId = event.params.proposalId
  entity.support = event.params.support
  entity.weight = event.params.weight
  entity.reason = event.params.reason

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVoteCastWithParams(event: VoteCastWithParamsEvent): void {
  let entity = new VoteCastWithParams(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.voter = event.params.voter
  entity.proposalId = event.params.proposalId
  entity.support = event.params.support
  entity.weight = event.params.weight
  entity.reason = event.params.reason
  entity.params = event.params.params

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVotingDelayBlocksSet(
  event: VotingDelayBlocksSetEvent
): void {
  let entity = new VotingDelayBlocksSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldVotingDelayBlocks = event.params.oldVotingDelayBlocks
  entity.newVotingDelayBlocks = event.params.newVotingDelayBlocks

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVotingDelaySet(event: VotingDelaySetEvent): void {
  let entity = new VotingDelaySet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldVotingDelay = event.params.oldVotingDelay
  entity.newVotingDelay = event.params.newVotingDelay

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVotingPeriodSet(event: VotingPeriodSetEvent): void {
  let entity = new VotingPeriodSet(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldVotingPeriod = event.params.oldVotingPeriod
  entity.newVotingPeriod = event.params.newVotingPeriod

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
