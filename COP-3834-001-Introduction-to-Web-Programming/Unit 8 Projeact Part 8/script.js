// --- PARALLAX LOGIC (From Previous Step) ---
const parallaxLayers = {
    back: { element: document.getElementById('layer-back'), speed: 0.2 },
    middle: { element: document.getElementById('layer-middle'), speed: 0.5 },
    front: { element: document.getElementById('layer-front'), speed: 0.9 }
};

function applyParallax() {
    let scrollPosition = window.scrollY;
    for (const key in parallaxLayers) {
        const layer = parallaxLayers[key];
        if (layer.element) {
            let verticalMovement = -(scrollPosition * layer.speed);
            layer.element.style.transform = `translateY(${verticalMovement}px)`;
        }
    }
}

// --- SCROLL REVEAL LOGIC (New) ---

// OBJECTIVE: Define an appropriate animation using a JavaScript object
const revealAnimation = {
    duration: '0.8s',
    easing: 'ease-out',
    hiddenState: {
        opacity: '0',
        transform: 'translateY(100px)' // Starts 100px lower
    },
    visibleState: {
        opacity: '1',
        transform: 'translateY(0px)' // Slides up into place
    },
    triggerPoint: 150, // How many pixels before the element appears
    isMotionReduced: false // Accessibility toggle
};

const sections = document.querySelectorAll('.reveal-section');
const motionButton = document.getElementById('reduce-motion-btn');

// Applies the starting CSS styles to the elements using a loop
function initializeReveal() {
    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        section.style.visibility = 'visible'; // Reveal to DOM

        if (revealAnimation.isMotionReduced) {
            // If motion is reduced, show elements immediately with no transition
            section.style.transition = 'none';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0px)';
        } else {
            // Apply hidden state styles from our animation object
            section.style.transition = `all ${revealAnimation.duration} ${revealAnimation.easing}`;
            section.style.opacity = revealAnimation.hiddenState.opacity;
            section.style.transform = revealAnimation.hiddenState.transform;
        }
    }
}

// Checks scroll position and triggers animation if element is in view
function checkReveal() {
    if (revealAnimation.isMotionReduced) return; // Skip calculation if disabled

    let windowHeight = window.innerHeight;

    for (let i = 0; i < sections.length; i++) {
        let section = sections[i];
        
        // Get the distance from the top of the viewport to the element
        let distanceFromTop = section.getBoundingClientRect().top;

        // If the element has scrolled past our trigger point, reveal it
        if (distanceFromTop < windowHeight - revealAnimation.triggerPoint) {
            section.style.opacity = revealAnimation.visibleState.opacity;
            section.style.transform = revealAnimation.visibleState.transform;
        }
    }
}

// Handle accessibility toggle button
motionButton.addEventListener('click', () => {
    revealAnimation.isMotionReduced = !revealAnimation.isMotionReduced;
    
    // Update button text
    if (revealAnimation.isMotionReduced) {
        motionButton.innerText = "Enable Motion";
    } else {
        motionButton.innerText = "Reduce Motion";
    }
    
    // Re-apply states based on new preference
    initializeReveal();
    checkReveal(); 
});

// Setup initial states
initializeReveal();
checkReveal(); // Run once on load just in case sections are already visible

// Combine both scroll effects into a single event listener
window.addEventListener('scroll', () => {
    applyParallax();
    checkReveal();
});