# App Title: Defligration arrestors

### Authorship & Attribution
*   **Developer:** Eric Staggs
*   **Resources:** MDN Web Docs, Bootstrap 5.0 Documentation, W3School,YouTube
*   **Libraries/Assets:** Google Fonts (Roboto), FontAwesome Icons, Bootstrap CSS/JS, vsCode,

> "Precisioin is the art of saying what matters- and nothing more."

---

### User Story
**As a** busy college student,  
**I want** get a place to start to organize data for the "Big Idea" and allow others to view it,  
**so that** we can create something that may save lives and companies money in the future with this project.

---

### Links & Verification
*   **Repository:** https://github.com/ericlstaggs/ericslearningrepo.git
*   **Live Deployment:** https://ericlstaggs.github.io/ericslearningrepo
*   **Design Evidence:** https://github.com/ericlstaggs/ericslearningrepo.git
*   **Verification Note:** This application has been tested and verified for responsiveness on **Mobile (iOS/Android Chrome)** and **Desktop (Chrome/Safari)**. All accessibility best practices (alt text, labels, and contrast) have been implemented.

---

### Model & Inspiration Evidence
<img width="1888" height="801" alt="dribble-screen-shot" src="https://github.com/user-attachments/assets/6b55a50c-6995-4b13-ab41-3591589f327f" />

https://github.com/ericlstaggs/ericslearningrepo/wiki

**Inspiration Source:** Dribble  
**Analysis:** I modeled my grid layout/navigation bar after this site because of its clean hierarchy.

---

### Code Block & Explanation
```javascript
// Example of DOM -> Script -> DOM flow
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('#itemSearch');
    const displayArea = document.querySelector('#resultsTable');

    searchInput.addEventListener('input', (e) => {
        const term = e.target.value.toLowerCase();
        // Filters internal data and updates the UI state
        const filtered = appData.filter(item => item.name.toLowerCase().includes(term));
        renderDisplay(filtered); 
        console.log(`Search state changed: ${term}`); // Debugging log
    });
});












