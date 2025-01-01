// src/workers/simulationWorker.js
import { runMontyHallSimulation } from '../services/simulation';

self.onmessage = (event) => {
    const { doors, playerBehavior, hostKnowledge, simulations } = event.data;

    let progress = 0;
    const chunkSize = 100;
    let results = { wins: 0, losses: 0, hostAbortedGames: 0, totalSimulations: simulations };

    for (let i = 0; i < simulations; i += chunkSize) {
        const currentChunk = Math.min(chunkSize, simulations - i);
        const partialResults = runMontyHallSimulation(doors, playerBehavior, hostKnowledge, currentChunk);

        results.wins += partialResults.wins;
        results.losses += partialResults.losses;
        results.hostAbortedGames += partialResults.hostAbortedGames;

        progress = Math.min(((i + chunkSize) / simulations) * 100, 100);
        self.postMessage({ type: 'progress', data: { progress } });
    }

    self.postMessage({ type: 'complete', data: results });
};
