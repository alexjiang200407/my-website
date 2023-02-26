/**
 * Benchmarker
 */
export default class Bencher
{
    constructor(samples : bigint, algorithm : string);

    // Public Interface

    /**
     * Makes the bencher start counting
     */
    Start() : void

    /**
     * Ends the count, returns the average of all the counts if all the samples have been collected
     */
    End() : Number

    /**
     * Enables all Benchers
     */
    Enable() : void

    /**
     * Disables all Benchers
     */
    Disable() :void
}