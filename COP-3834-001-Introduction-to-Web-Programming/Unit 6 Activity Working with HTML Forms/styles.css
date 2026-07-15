/* Custom Spotify-inspired Styles */
html, body {
    min-height: 100%;
    width: 100%;
    margin: 0;
    padding: 40px 20px;
    box-sizing: border-box;
    background-color: #121212;
    color: #ffffff;
    font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    display: flex;
    align-items: flex-start;
    justify-content: center;
}

.spotify-wrapper {
    display: flex;
    flex-direction: row;
    gap: 30px;
    width: 100%;
    max-width: 960px;
    align-items: flex-start;
}

@media (max-width: 768px) {
    .spotify-wrapper {
        flex-direction: column;
        align-items: center;
    }
}

.spotify-card, .requests-section {
    background-color: #181818;
    padding: 35px;
    border-radius: 12px;
    flex: 1;
    width: 100%;
    box-sizing: border-box;
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.05);
    display: flex;
    flex-direction: column;
}

.spotify-logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    color: #1DB954;
    font-size: 1.4rem;
    font-weight: 800;
    margin-bottom: 24px;
    letter-spacing: -0.5px;
}

.spotify-logo svg {
    filter: drop-shadow(0 2px 8px rgba(29, 185, 84, 0.4));
}

h1, h2 {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
    align-content: center;
    margin-bottom: 28px;
    letter-spacing: -0.5px;
}

h2 {
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    padding-bottom: 12px;
    color: #ffffff;
}

.form-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 18px;
}

label {
    font-size: 0.8rem;
    font-weight: 700;
    color: #b3b3b3;
    margin-bottom: 8px;
    text-transform: uppercase;
    letter-spacing: 0.8px;
}

input {
    display: block;
    margin: 10px 0px;
}

input[type="text"], input[type="date"] {
    background-color: #242424;
    border: 1px solid transparent;
    color: #ffffff;
    padding: 12px 16px;
    font-size: 0.95rem;
    font-weight: 500;
    border-radius: 4px;
    outline: none;
    transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    font-family: inherit;
}

input[type="text"]::placeholder {
    color: #727272;
}

input[type="text"]:hover, input[type="date"]:hover {
    background-color: #2a2a2a;
    border-color: #535353;
}

input[type="text"]:focus, input[type="date"]:focus {
    background-color: #2a2a2a;
    border-color: #1DB954;
    box-shadow: 0 0 0 3px rgba(29, 185, 84, 0.15);
}

/* Radio Group styling */
.radio-group {
    display: flex;
    gap: 15px;
    margin-top: 5px;
}

.radio-label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;
    font-size: 0.9rem;
    text-transform: none;
    color: #ffffff;
    font-weight: 500;
    letter-spacing: normal;
}

.radio-label input[type="radio"] {
    margin: 0;
    appearance: none;
    width: 18px;
    height: 18px;
    border: 2px solid #535353;
    border-radius: 50%;
    outline: none;
    transition: all 0.2s ease;
    position: relative;
    cursor: pointer;
}

.radio-label input[type="radio"]:checked {
    border-color: #1DB954;
    background-color: #1DB954;
}

.radio-label input[type="radio"]:checked::after {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 6px;
    height: 6px;
    background-color: #000000;
    border-radius: 50%;
}

/* Submit button */
input[type="submit"] {
    background-color: #1DB954;
    color: #000000;
    font-size: 0.95rem;
    font-weight: 700;
    border: none;
    padding: 14px 32px;
    border-radius: 500px;
    cursor: pointer;
    margin-top: 15px;
    font-family: inherit;
    transition: all 0.2s ease-in-out;
}

input[type="submit"]:hover {
    background-color: #1ed760;
    transform: scale(1.02);
}

input[type="submit"]:active {
    transform: scale(0.98);
}

/* Requests list styling */
.request-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-height: 520px;
    overflow-y: auto;
    padding-right: 5px;
}

/* Custom Scrollbar for list */
.request-list::-webkit-scrollbar {
    width: 6px;
}
.request-list::-webkit-scrollbar-track {
    background: transparent;
}
.request-list::-webkit-scrollbar-thumb {
    background: #535353;
    border-radius: 3px;
}

.empty-message {
    color: #727272;
    text-align: center;
    font-style: italic;
    margin-top: 40px;
    font-size: 0.95rem;
}

.request-item {
    background-color: #121212;
    border: 1px solid rgba(255, 255, 255, 0.03);
    padding: 16px;
    border-radius: 6px;
    font-size: 0.9rem;
    line-height: 1.5;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px;
    animation: slideIn 0.3s ease forwards;
    opacity: 0;
    transform: translateY(10px);
    transition: all 0.2s ease;
}

.request-item:hover {
    background-color: #282828;
    border-color: rgba(255, 255, 255, 0.08);
}

.req-name {
    color: #1DB954;
    font-weight: 700;
}

.req-song {
    color: #ffffff;
    font-weight: 700;
    font-style: italic;
}

.req-artist {
    color: #ffffff;
    font-weight: 600;
}

.req-badge {
    background-color: #242424;
    color: #1DB954;
    font-size: 0.75rem;
    font-weight: 700;
    padding: 3px 8px;
    border-radius: 12px;
    margin-left: auto;
}

.req-date {
    background-color: #242424;
    color: #b3b3b3;
    font-size: 0.75rem;
    font-weight: 500;
    padding: 3px 8px;
    border-radius: 12px;
}

@keyframes slideIn {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
