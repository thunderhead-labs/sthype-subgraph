import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { BurnAggregation } from "../generated/schema"
import { BurnAggregation as BurnAggregationEvent } from "../generated/Aggregator/Aggregator"
import { handleBurnAggregation } from "../src/aggregator"
import { createBurnAggregationEvent } from "./aggregator-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let sender = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let amountInstantBurn = BigInt.fromI32(234)
    let amountBurn = BigInt.fromI32(234)
    let received = BigInt.fromI32(234)
    let newBurnAggregationEvent = createBurnAggregationEvent(
      sender,
      amountInstantBurn,
      amountBurn,
      received
    )
    handleBurnAggregation(newBurnAggregationEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BurnAggregation created and stored", () => {
    assert.entityCount("BurnAggregation", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BurnAggregation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "sender",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BurnAggregation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amountInstantBurn",
      "234"
    )
    assert.fieldEquals(
      "BurnAggregation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amountBurn",
      "234"
    )
    assert.fieldEquals(
      "BurnAggregation",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "received",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
