import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import { AddToDelegateCallAllowlist } from "../generated/schema"
import { AddToDelegateCallAllowlist as AddToDelegateCallAllowlistEvent } from "../generated/FraxGovernorOmega/FraxGovernorOmega"
import { handleAddToDelegateCallAllowlist } from "../src/frax-governor-omega"
import { createAddToDelegateCallAllowlistEvent } from "./frax-governor-omega-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let contractAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAddToDelegateCallAllowlistEvent = createAddToDelegateCallAllowlistEvent(
      contractAddress
    )
    handleAddToDelegateCallAllowlist(newAddToDelegateCallAllowlistEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AddToDelegateCallAllowlist created and stored", () => {
    assert.entityCount("AddToDelegateCallAllowlist", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AddToDelegateCallAllowlist",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "contractAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
