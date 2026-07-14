// OBJECTIVE 1: Organize information about an animation in a JavaScript object
const parallaxLayers = {
    back: { 
        element: document.getElementById('layer-back'), 
        speed: 0.2 // Slowest moving layer
    },
    middle: { 
        element: document.getElementById('layer-middle'), 
        speed: 0.5 // Medium speed
    },
    front: { 
        element: document.getElementById('layer-front'), 
        speed: 0.9 // Fastest moving layer (closest to the viewer)
    }
};

// OBJECTIVE 2: Write a function that moves website elements at different rates
function applyParallax() {
    let scrollPosition = window.scrollY;

    for (const key in parallaxLayers) {
        const layer = parallaxLayers[key];
        
        if (layer.element) {
            // Because the images are stacked vertically, we move them up as we scroll down
            // Negative value moves them upward
            let verticalMovement = -(scrollPosition * layer.speed);
            layer.element.style.transform = `translateY(${verticalMovement}px)`;
        }
    }
}

// OBJECTIVE 3: Handle browser scroll events
window.addEventListener('scroll', applyParallax);