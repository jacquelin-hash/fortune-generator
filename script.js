const clothingData = {
    tops: [
        "cozy sweater",
        "vintage t-shirt",
        "denim jacket",
        "button-down shirt",
        "hoodie"
    ],
    bottoms: [
        "ripped jeans",
        "pleated skirt",
        "cargo pants",
        "leather pants",
        "shorts"
    ],
    shoes: [
        "sneakers",
        "boots",
        "loafers",
        "sandals",
        "high heels"
    ],
    accessories: [
        "beanie",
        "statement necklace",
        "silk scarf",
        "leather belt",
        "sunglasses"
    ]
};

function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

function generate() {
    const name = document.getElementById('nameInput').value || 'Friend';
    const outfit = `${name}, here's your perfect outfit for today: 
                  a ${getRandomItem(clothingData.tops)} paired with ${getRandomItem(clothingData.bottoms)}, 
                  styled with ${getRandomItem(clothingData.shoes)} and a ${getRandomItem(clothingData.accessories)} 
                  to complete the look!`;
    
    document.getElementById('output').textContent = outfit;
    restyle(); // Apply random styling when generating new outfit
}

function restyle() {
    const output = document.getElementById('output');
    
    // Random color from a fashion-friendly palette
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD'];
    
    // Random font sizes between 18px and 24px
    const fontSize = Math.floor(Math.random() * 6) + 18;
    
    // Random padding between 15px and 30px
    const padding = Math.floor(Math.random() * 15) + 15;
    
    // Random background colors with transparency
    const bgColors = ['rgba(255,107,107,0.1)', 'rgba(78,205,196,0.1)', 
                    'rgba(69,183,209,0.1)', 'rgba(150,206,180,0.1)', 
                    'rgba(255,238,173,0.1)'];

    output.style.color = getRandomItem(colors);
    output.style.fontSize = `${fontSize}px`;
    output.style.padding = `${padding}px`;
    output.style.backgroundColor = getRandomItem(bgColors);
    output.style.borderRadius = `${Math.floor(Math.random() * 20)}px`;
}
