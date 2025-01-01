export default class WorkerManager {
    constructor(worker) {
        this.worker = worker;
        this.listeners = {
            progress: [],
            complete: [],
            error: [],
        };

        // Handle messages from the worker
        this.worker.onmessage = (event) => {
            const { type, data } = event.data;
            if (this.listeners[type]) {
                this.listeners[type].forEach((callback) => callback(data));
            }
        };

        // Handle errors from the worker
        this.worker.onerror = (error) => {
            if (this.listeners.error) {
                this.listeners.error.forEach((callback) => callback(error));
            }
        };
    }

    // Add an event listener
    on(eventType, callback) {
        if (this.listeners[eventType]) {
            this.listeners[eventType].push(callback);
        }
    }

    // Remove an event listener
    off(eventType, callback) {
        if (this.listeners[eventType]) {
            this.listeners[eventType] = this.listeners[eventType].filter((cb) => cb !== callback);
        }
    }

    // Post data to the worker
    postMessage(data) {
        this.worker.postMessage(data);
    }

    // Terminate the worker
    terminate() {
        this.worker.terminate();
    }
}
