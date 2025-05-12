class GBAEmulator {
    constructor(canvasElement) {
        this.canvas = canvasElement;
        this.ctx = this.canvas.getContext('2d');
        this.rom = null;
        this.isRunning = false;
    }

    // Load ROM file
    loadROM(file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            this.rom = new Uint8Array(e.target.result);
            console.log('ROM loaded:', this.rom.length, 'bytes');
        };
        reader.readAsArrayBuffer(file);
    }

    // Start emulation (placeholder)
    start() {
        if (!this.rom) {
            alert('Please upload a ROM first!');
            return;
        }

        this.isRunning = true;
        this.render();
    }

    // Basic render loop (placeholder)
    render() {
        if (!this.isRunning) return;

        // Clear canvas
        this.ctx.fillStyle = 'black';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        // Placeholder text
        this.ctx.fillStyle = 'white';
        this.ctx.font = '16px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillText('GBA Emulator Placeholder', 
            this.canvas.width / 2, 
            this.canvas.height / 2
        );

        // Request next animation frame
        requestAnimationFrame(() => this.render());
    }

    // Pause emulation
    pause() {
        this.isRunning = false;
    }

    // Handle button presses (placeholder)
    handleButtonPress(button) {
        console.log('Button pressed:', button);
    }
}

// DOM Elements
const canvas = document.getElementById('gameCanvas');
const romUpload = document.getElementById('romUpload');
const startButton = document.getElementById('startButton');

// Emulator instance
const emulator = new GBAEmulator(canvas);

// Event Listeners
romUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (file) {
        emulator.loadROM(file);
    }
});

startButton.addEventListener('click', () => {
    emulator.start();
});

// Attach button press handlers
document.querySelectorAll('.dpad button').forEach(button => {
    button.addEventListener('click', (e) => {
        const direction = e.target.classList[0].replace('dpad-', '');
        emulator.handleButtonPress(direction);
    });
});

document.querySelectorAll('.action-buttons button').forEach(button => {
    button.addEventListener('click', (e) => {
        const buttonType = e.target.classList[0].replace('btn-', '');
        emulator.handleButtonPress(buttonType);
    });
});
