class maxHeap {
    constructor() {
        this.heap = []
    }
    insert(value) {
        this.heap.push(value)
        let index = this.heap.length - 1
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2)
            if (this.heap[index] < this.heap[parentIndex]) {
                break
            }
            [this.heap[index], this.heap[parentIndex]] = [this.heap[parentIndex], this.heap[index]]
            index = parentIndex
        }
    }
    minHeap() {
        for (let i = (this.heap.length) / 2; i >= 0; i--) {
            this.heapify(i)
        }
    }

    heapify(index) {
        let left = 2 * index + 1
        let right = 2 * index + 2
        let smallest = index
        let n = this.heap.length

        while (true) {
            if (left < n && this.heap[left] < this.heap[smallest]) {
                smallest = left
            }
            if (right < n && this.heap[right] < this.heap[smallest]) {
                smallest = right
            }
            if (smallest !== index) {
                [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]]
                index = smallest
            } else {
                break
            }
        }
    }
}

const H = new maxHeap()
H.insert(10)
H.insert(90)
H.insert(20)
H.insert(80)
H.insert(60)
H.insert(50)
H.minHeap()
console.log(H);