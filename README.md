# 2 Goats 1 Car

**2 Goats 1 Car** is an interactive simulation of the classic [Monty Hall problem](https://en.wikipedia.org/wiki/Monty_Hall_problem). This application allows users to explore the probability puzzle by simulating multiple games, adjusting the number of doors, player behavior, and host knowledge.

---

## Features

- 🌐 **Multilingual Support**: Fully localized for English and German using `i18n`.
- 🔢 **Customizable Simulations**: Adjust the number of doors, player strategy (switch or stay), and host knowledge.
- 📊 **Interactive Results**: View total simulations, wins, losses, win rates, and aborted games.
- 📖 **Privacy Page**: A dynamic privacy policy page (DSGVO compliant) switches content based on the selected language.
- 🖥️ **Responsive Design**: Works seamlessly on desktop and mobile devices.
- 🐙 **Open Source**: Codebase available on [GitHub](https://github.com/tobias74/2goats1car).

---

## Getting Started

### Prerequisites

Make sure you have the following installed:

- **Node.js** (version 16 or higher)
- **npm** or **yarn**

---

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/tobias74/2goats1car.git
   cd 2goats1car
   ```

2. **Install dependencies**:

   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**:

   ```bash
   npm start
   # or
   yarn start
   ```

4. **Open your browser**:
   Navigate to [http://localhost:5173](http://localhost:5173).

---

## Project Structure

```plaintext
2goats1car/
├── public/                 # Public assets
├── src/
│   ├── components/         # React components (e.g., Navbar, Footer, Privacy)
│   ├── services/           # Utility functions (e.g., simulation logic)
│   ├── i18n.js             # Localization configuration
│   ├── App.jsx             # Main app component
│   ├── index.jsx           # Entry point
│   └── styles/             # Global and component-specific styles
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

---

## Usage

1. Open the app in your browser.
2. Configure the simulation:
   - **Number of Doors**: Choose how many doors are available (3–100).
   - **Player Behavior**: Decide whether the player switches doors or stays.
   - **Host Knowledge**: Define whether the host knows where the car is.
   - **Number of Simulations**: Set the number of simulations to run.
3. Click **Run Simulation** to see the results.

---

## Technologies Used

- **React**: Frontend framework for building UI components.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **i18next**: Localization and internationalization.
- **react-icons**: For icons and visual elements.

---

## Attribution

The "Monty Hall problem" is a probability puzzle based on the American television game show _Let's Make a Deal_ and its original host, Monty Hall. This project simulates the mathematical scenario inspired by the game.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to your branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## Contact

If you have any questions or feedback, feel free to contact:

**Tobias Gassmann**  
Email: [mail@tobiga.com](mailto:mail@tobiga.com)  
Tel: +49 160 96 24 83 98

GitHub: [https://github.com/tobias74/2goats1car](https://github.com/tobias74/2goats1car)
