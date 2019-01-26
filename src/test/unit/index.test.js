const { expect } = require('expect.equal')
const { handler } = require('../../functions/get-name')


const testHandler = before => after =>
    expect(handler(before)).toEqual(after)


testHandler({ name: 'Dimitri' })('Dimitri')

const testHandlerFail = before => after =>
    expect(handler(before)).toEqual(after)

testHandler({ name: 'Anastasia' })('Anastasia')