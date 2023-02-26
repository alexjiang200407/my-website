export default class Bencher
{
    // Public interface
    static #enabled = true;
    #count = 0;
    #finished = false;
    #timesSum = 0;
    #timer = performance.now();
    #samples;
    #algorithm;

    constructor(samples = 1, algorithm = "")
    {
        this.#samples = samples; 
        this.#algorithm = algorithm;
    } 


    Start()
    {
        // If not finished sets a timer
        if (!this.#finished)
        {
            this.#timer = performance.now();
        }
    }

    Disable()
    {
        Bencher.#enabled = false;
    }

    Enable()
    {
        Bencher.#enabled = true;
    }
    

    
    End()
    {
        if (!this.#finished && Bencher.#enabled)
        {
            if (this.#count++ > this.#samples)
            {
                this.#finished = true;
                console.log(`Finished benchmarking ${this.#algorithm}: Average time over ${this.#samples} samples is ${this.#timesSum / this.#samples}ms.`);
                return this.#timesSum / this.#samples;
            }
            else if(this.#count !== 1)
            {
                let elapsed = performance.now() - this.#timer;  

                this.#timesSum += elapsed;
                return -1.0;
            }
        }

    }
}