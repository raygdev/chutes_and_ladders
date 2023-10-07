import { Space, SpaceType } from "../../src/js/model/space"
import  { Avatar } from "../../src/js/model/avatar"


const start = new Space(SpaceType.START, "1")
const n1 = new Space(SpaceType.NORMAL, "2")
const chute = new Space(SpaceType.CHUTE, "3")
const n2 = new Space(SpaceType.NORMAL, "4")
const ladder = new Space(SpaceType.LADDER, "5")
const n3 = new Space(SpaceType.NORMAL, "6")
const finish = new Space(SpaceType.FINISH, "7")

start.next = n1
n1.next = ladder
ladder.next = n2
ladder.special = n2
n2.next = chute
chute.next = n3
chute.special = start
n3.next = finish

let avatar = new Avatar("test")
test("test space and avatar", () => {
    start.land(avatar)
    expect(avatar.location).toBe(start)
    expect(start.players).toHaveLength(1)
    expect(start.occupied).toBe(true)
})

test("move avatar 1 space", () => {
    avatar.move(1)
    expect(avatar.location).toBe(n1)
    expect(n1.players).toHaveLength(1)
    expect(start.players).toHaveLength(0)
    expect(n1.players[0]).toBe(avatar)
    expect(n1.occupied).toBe(true)
    expect(start.occupied).toBe(false)
})

test("move avatar to land on ladder and move to n2", () => {
    avatar.move(1)
    expect(avatar.location).toBe(n2)
    expect(n1.players).toHaveLength(0)
    expect(n2.players).toHaveLength(1)
    expect(n1.occupied).toBe(false)
    expect(n2.occupied).toBe(true)
})

test("move avatar to chute and back to start", () => {
    avatar.move(1)
    expect(avatar.location).toBe(start)
    expect(n2.occupied).toBe(false)
})

test("Avatar doesn't move if number of moves is higher than spaces available", () => {
    avatar.move(9)
    expect(avatar.location).toBe(start)
    expect(start.players).toHaveLength(1)
    expect(start.occupied).toBe(true)
})

test("move avatar to n3", () => {
    avatar.move(5)
    expect(avatar.location).toBe(n3)
    expect(start.players).toHaveLength(0)
    expect(start.occupied).toBe(false)
    expect(n3.players).toHaveLength(1)
    expect(n3.occupied).toBe(true)
})

test("test avatar lands on finish", () => {
    avatar.move(1)
    expect(avatar.location).toBe(finish)
    expect(finish.next).toBe(null)
    expect(finish.players).toHaveLength(1)
    expect(finish.occupied).toBe(true)
})
