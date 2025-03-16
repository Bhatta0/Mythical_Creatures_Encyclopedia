// Sample creature data
const creatures = [
    {
        name: 'Dragon',
        image: 'images/dragon.jpg',
        description: 'A large, serpentine legendary creature that appears in the folklore of many cultures around the world.'
    },
    {
        name: 'Phoenix',
        image: 'images/Phoenix.png',
        description: 'A long-lived bird that cyclically regenerates or is otherwise born again.'
    },
    {
        name: 'Unicorn',
        image: 'images/unicorn.jpg',
        description: 'A legendary creature with a single, spiraling horn projecting from its forehead.'
    }
];

// Function to display creatures
function displayCreatures() {
    const grid = document.getElementById('creatures-grid');
    grid.innerHTML = creatures.map(creature => `
        <div class="col">
            <div class="card h-100">
                <img src="${creature.image}" class="card-img-top" alt="${creature.name}">
                <div class="card-body">
                    <h5 class="card-title">${creature.name}</h5>
                    <p class="card-text">${creature.description}</p>
                </div>
            </div>
        </div>
    `).join('');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', displayCreatures);
