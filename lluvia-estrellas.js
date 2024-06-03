
const colors = ["#fff3", "#fff5", "#fff8", "#fffc", "#fff"];
const generateSpaceLayer = (size, selector, totalStars, duration) => {
    const layer = [];
    for (let i = 0; i < totalStars; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        const x = Math.floor(Math.random() * 100);
        const y = Math.floor(Math.random() * 100);
        layer.push(`${x}vw ${y}vh 0 ${color}, ${x}vw ${y + 100}vh 0 ${color}, ${x}vw ${y + 200}vh 0 ${color}, ${x}vw ${y + 300}vh 0 ${color}, ${x}vw ${y + 400}vh 0 ${color}, ${x}vw ${y + 500}vh 0 ${color}, ${x}vw ${y + 600}vh 0 ${color}`);
    }
    const container = document.querySelector(selector);
    container.style.setProperty("--space-layer", layer.join(","));
    container.style.setProperty("--size", size);
    container.style.setProperty("--duration", duration);
};

if (window.innerWidth >= 1200) {
    generateSpaceLayer("1px", ".space-1", 160, "25s");
    generateSpaceLayer("2px", ".space-2", 80, "20s");
    generateSpaceLayer("4px", ".space-3", 40, "15s");
}
else if (window.innerWidth < 1200 && window.innerWidth >= 600) {
    generateSpaceLayer("1px", ".space-1", 100, "25s");
    generateSpaceLayer("2px", ".space-2", 40, "20s");
    generateSpaceLayer("4px", ".space-3", 20, "15s");
}
else{
    generateSpaceLayer("1px", ".space-1", 80, "25s");
    generateSpaceLayer("2px", ".space-2", 30, "20s");
    generateSpaceLayer("4px", ".space-3", 15, "15s");
}

