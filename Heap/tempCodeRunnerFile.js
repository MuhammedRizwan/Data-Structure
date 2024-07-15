minHeap() {
        for (let i = (this.heap.length) / 2; i > 0; i--) {
            this.heapify(i)
        }
    }