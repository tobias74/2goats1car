export function runMontyHallSimulation(doors, playerBehavior, hostKnowledge, simulations) {
    let wins = 0;
    let losses = 0;
    let hostAbortedGames = 0;
    let totalSimulations = 0;

    for (let i = 0; i < simulations; i++) {
        totalSimulations++;

        let hostRevealedCar = false;

        // 1. Randomly place the car
        const carPosition = Math.floor(Math.random() * doors);

        // 2. Player makes an initial choice
        let playerChoice = Math.floor(Math.random() * doors);

        // 3. Track doors that remain closed
        const closedDoors = new Set([...Array(doors).keys()]); // {0, 1, ..., doors-1}

        // 4. Reveal doors until only 2 remain closed (player's door + 1 other)
        while (closedDoors.size > 2 && !hostRevealedCar) {
            // Exclude the player's door from the set of candidates
            let revealCandidates = [...closedDoors].filter(d => d !== playerChoice);

            // Adjust revealCandidates based on host knowledge
            if (hostKnowledge === 'knows') {
                // Remove the car door from the set of candidates
                revealCandidates = revealCandidates.filter(d => d !== carPosition);
            }

            // Randomly pick a door to reveal from the adjusted candidates
            const doorToReveal =
                revealCandidates[Math.floor(Math.random() * revealCandidates.length)];

            // Check if the car is accidentally revealed
            if (doorToReveal === carPosition) {
                hostRevealedCar = true;
            }

            // Reveal the door (remove it from the closedDoors set)
            closedDoors.delete(doorToReveal);
        }

        if (hostRevealedCar) {
            hostAbortedGames++;

        } else {

            // 5. Now we have exactly 2 doors left: the player's door + 1 other
            if (playerBehavior === 'switch') {
                // Switch to the other closed door
                const [a, b] = [...closedDoors];
                playerChoice = (playerChoice === a) ? b : a;
            }

            // 6. Determine if the player won
            if (playerChoice === carPosition) {
                wins++;
            } else {
                losses++;
            }
        }

    }

    return {
        wins,
        losses,
        hostAbortedGames,
        totalSimulations,
    };
}
