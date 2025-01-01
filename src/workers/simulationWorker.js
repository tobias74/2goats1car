import { runMontyHallSimulation } from '../services/simulation';

self.onmessage = (event) => {
    const { doors, playerBehavior, hostKnowledge, simulations } = event.data;

    let progress = 0;
    const chunkSize = 10; // Number of simulations to process in each chunk
    let results = { wins: 0, losses: 0, hostAbortedGames: 0, totalSimulations: simulations };
    const progressInterval = 500; // Interval for progress updates in milliseconds

    let lastProgressUpdate = Date.now();

    for (let i = 0; i < simulations; i += chunkSize) {
        const currentChunk = Math.min(chunkSize, simulations - i);
        const partialResults = runMontyHallSimulation(doors, playerBehavior, hostKnowledge, currentChunk);

        // Accumulate partial results
        results.wins += partialResults.wins;
        results.losses += partialResults.losses;
        results.hostAbortedGames += partialResults.hostAbortedGames;

        // Calculate progress
        progress = Math.min(((i + currentChunk) / simulations) * 100, 100);

        // Check if it's time to send a progress update
        const currentTime = Date.now();
        if (currentTime - lastProgressUpdate >= progressInterval || progress === 100) {
            lastProgressUpdate = currentTime;

            self.postMessage({
                type: 'progress',
                data: {
                    progress,
                    partialResults: {
                        wins: results.wins,
                        losses: results.losses,
                        hostAbortedGames: results.hostAbortedGames,
                        completedSimulations: i + currentChunk,
                    },
                },
            });
        }
    }

    // Send the final "complete" message
    self.postMessage({
        type: 'complete',
    });
};
