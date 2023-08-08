import { describe, expect, it } from 'vitest'
import { hello } from '../helloWorld'

describe('hello', () => {
    it('should be a function', (): void => {
        expect(typeof hello).toBe('function')
    })
})

describe('Hello World',() => {
    it('says Hello, World!', () => {
        expect(hello()).toEqual('Hello, World!')
    })
}) 
