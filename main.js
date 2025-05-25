// main.js 

// --- GLOBAL UTILITY FUNCTIONS ---
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// --- THEME SWITCHING FUNCTIONS ---
function applyThemeAndSave(theme) {
    const htmlElement = document.documentElement;
    const themeSwitchButton = document.getElementById("themeSwitch");
    const themeIconSun = document.getElementById("themeIconSun");
    const themeIconMoon = document.getElementById("themeIconMoon");

    if (theme === "light") {
        htmlElement.classList.add("light-theme");
        if (themeSwitchButton) themeSwitchButton.setAttribute("aria-label", "Switch to Dark Theme");
        if (themeIconSun) themeIconSun.style.display = "none";
        if (themeIconMoon) themeIconMoon.style.display = "block";
    } else { // dark
        htmlElement.classList.remove("light-theme");
        if (themeSwitchButton) themeSwitchButton.setAttribute("aria-label", "Switch to Light Theme");
        if (themeIconSun) themeIconSun.style.display = "block";
        if (themeIconMoon) themeIconMoon.style.display = "none";
    }
    try {
        localStorage.setItem("theme", theme);
    } catch (e) {
        console.warn("LocalStorage is not available. Theme preference will not be saved.");
    }
}

function toggleThemeOnClick() {
    const htmlElement = document.documentElement;
    if (htmlElement.classList.contains("light-theme")) {
        applyThemeAndSave("dark");
    } else {
        applyThemeAndSave("light");
    }
}

// --- SIDEBAR MENU TOGGLE FUNCTION ---
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    const mainContentWrapper = document.querySelector(".main-content-wrapper");
    const menuToggleButton = document.querySelector(".menu-toggle");

    if (sidebar && mainContentWrapper && menuToggleButton) {
        sidebar.classList.toggle("collapsed");
        mainContentWrapper.classList.toggle("sidebar-collapsed");
        const isCollapsed = sidebar.classList.contains("collapsed");
        menuToggleButton.setAttribute("aria-expanded", String(!isCollapsed));
    }
}

// --- SIDEBAR SEARCH TRIGGER FUNCTION ---
function handleSidebarSearchTriggerClick() {
    const sidebar = document.getElementById("sidebar");
    const searchInput = document.getElementById("searchInput");

    if (sidebar && searchInput) {
        if (sidebar.classList.contains("collapsed")) {
            toggleMenu(); // Expand the sidebar
            setTimeout(() => {
                searchInput.focus();
            }, 300);
        } else {
            searchInput.focus();
        }
    }
}

// --- ACTIVE SIDEBAR LINK FUNCTION ---
function setActiveSidebarLink() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll(".sidebar-nav .nav-link");

    if (navLinks.length > 0) {
        navLinks.forEach(link => {
            let linkHref = link.getAttribute("href").split('/').pop() || 'index.html';
            if (link.getAttribute("href") === "./" || link.getAttribute("href") === "index.html") {
                linkHref = 'index.html';
            }
            link.classList.toggle("active", linkHref === currentPath);
        });
    }
}

// --- CARD HEIGHT EQUALIZATION (REVISED) ---
function equalizeInitialCardHeights() {
    const productWrapper = document.querySelector('.product-wrapper');
    if (!productWrapper) return;

    const cards = Array.from(productWrapper.querySelectorAll('.box-container'));
    if (cards.length === 0) return;

    let maxMainContentHeight = 0;

    cards.forEach(card => {
        if (!card.classList.contains('expanded') && !card.classList.contains('expanded-dropdown')) {
            card.style.height = 'auto'; 
            card.style.minHeight = ''; 
            card.style.maxHeight = '';

            const mainTopContent = card.querySelector('.main-card-top-content');
            if (mainTopContent) {
                mainTopContent.style.height = 'auto'; 
            }
        }
    });

    if (cards.length > 0) { try { productWrapper.offsetHeight; } catch(e){} } 

    cards.forEach(card => {
        if (!card.classList.contains('expanded') && !card.classList.contains('expanded-dropdown')) {
            const mainTopContent = card.querySelector('.main-card-top-content');
            if (mainTopContent) {
                const currentMainContentHeight = mainTopContent.scrollHeight;
                if (currentMainContentHeight > maxMainContentHeight) {
                    maxMainContentHeight = currentMainContentHeight;
                }
            }
        }
    });

    if (maxMainContentHeight > 0) {
        cards.forEach(card => {
            if (!card.classList.contains('expanded') && !card.classList.contains('expanded-dropdown')) {
                const mainTopContent = card.querySelector('.main-card-top-content');
                if (mainTopContent) {
                    mainTopContent.style.height = `${maxMainContentHeight}px`;
                }
            }
        });
    }
}

// --- CONTRIBUTOR MODAL FUNCTIONS ---
let lastOpenedContributorLink = null;

function openContributorModal(contributorData, triggerElement) {
    const contributorModalOverlay = document.getElementById('contributorModalOverlay');
    const contributorModal = document.getElementById('contributorModal');
    const contributorModalCloseBtn = document.getElementById('contributorModalClose');
    const contributorModalTitle = document.getElementById('contributorModalTitle');
    const contributorModalBody = document.getElementById('contributorModalBody');

    if (!contributorModal || !contributorModalOverlay || !contributorModalBody || !contributorModalTitle) {
        console.error("MODAL ERROR: One or more core modal HTML elements (overlay, modal, body, title) are MISSING or their IDs are wrong in your main HTML file!");
        return;
    }

    lastOpenedContributorLink = triggerElement;
    contributorModalTitle.textContent = contributorData.name || "Contributor Information";
    contributorModalBody.innerHTML = '';

    if (contributorData.githubUrl) {
        contributorModalBody.innerHTML += `
            <a href="${contributorData.githubUrl}" class="contributor-link-item" target="_blank" rel="noopener noreferrer">
                <img src="images/github-logo.svg" alt="GitHub" class="contributor-link-icon">
                <span class="contributor-link-text">View GitHub Profile</span>
            </a>`;
    }
    if (contributorData.kofiUrl) {
        contributorModalBody.innerHTML += `
            <a href="${contributorData.kofiUrl}" class="contributor-link-item" target="_blank" rel="noopener noreferrer">
                <img src="images/kofi-logo.svg" alt="Ko-fi" class="contributor-link-icon">
                <span class="contributor-link-text">Support on Ko-fi</span>
            </a>`;
    }
    if (contributorData.paypalUrl) {
        contributorModalBody.innerHTML += `
            <a href="${contributorData.paypalUrl}" class="contributor-link-item" target="_blank" rel="noopener noreferrer">
                <img src="images/paypal-logo.svg" alt="PayPal" class="contributor-link-icon">
                <span class="contributor-link-text">Donate via PayPal</span>
            </a>`;
    }
    if (contributorData.buymeacoffeeUrl) {
        contributorModalBody.innerHTML += `
            <a href="${contributorData.buymeacoffeeUrl}" class="contributor-link-item" target="_blank" rel="noopener noreferrer">
                <img src="images/buymeacoffee-logo.svg" alt="Buy Me a Coffee" class="contributor-link-icon">
                <span class="contributor-link-text">Buy Me a Coffee</span>
            </a>`;
    }

    contributorModalOverlay.classList.add('active');
    contributorModal.classList.add('active');

    if (contributorModalCloseBtn) {
        contributorModalCloseBtn.focus();
    } else {
        console.warn("Modal close button (contributorModalClose) not found for focusing.");
    }
}

function closeContributorModal() {
    const contributorModalOverlay = document.getElementById('contributorModalOverlay');
    const contributorModal = document.getElementById('contributorModal');
    if (!contributorModal || !contributorModalOverlay) return;

    contributorModalOverlay.classList.remove('active');
    contributorModal.classList.remove('active');

    if (lastOpenedContributorLink) {
        lastOpenedContributorLink.focus();
        lastOpenedContributorLink = null;
    }
}


// --- DOMCONTENTLOADED EVENT LISTENER ---
document.addEventListener("DOMContentLoaded", () => {
    const themeSwitchButton = document.getElementById("themeSwitch");
    const themeIconSun = document.getElementById("themeIconSun");
    const themeIconMoon = document.getElementById("themeIconMoon");

    const sidebar = document.getElementById("sidebar");
    const menuToggleButton = document.querySelector(".menu-toggle");

    const sidebarSearchInput = document.getElementById("searchInput");
    const autocompleteResults = document.getElementById("autocompleteResults");

    const productWrapper = document.querySelector('.product-wrapper');

    const contributorModalOverlay = document.getElementById('contributorModalOverlay');
    const contributorModalCloseBtn = document.getElementById('contributorModalClose');

    function syncThemeButtonUIState() {
        const htmlElement = document.documentElement;
        if (htmlElement.classList.contains("light-theme")) {
            if (themeSwitchButton) themeSwitchButton.setAttribute("aria-label", "Switch to Dark Theme");
            if (themeIconSun) themeIconSun.style.display = "none";
            if (themeIconMoon) themeIconMoon.style.display = "block";
        } else {
            if (themeSwitchButton) themeSwitchButton.setAttribute("aria-label", "Switch to Light Theme");
            if (themeIconSun) themeIconSun.style.display = "block";
            if (themeIconMoon) themeIconMoon.style.display = "none";
        }
    }
    syncThemeButtonUIState();
    if (themeSwitchButton) {
        themeSwitchButton.addEventListener("click", toggleThemeOnClick);
    }

    setActiveSidebarLink();
    if (menuToggleButton && sidebar) {
        const isCollapsed = sidebar.classList.contains("collapsed");
        menuToggleButton.setAttribute("aria-expanded", String(!isCollapsed));
        menuToggleButton.setAttribute("aria-controls", "sidebar");
    }

    const currentYear = new Date().getFullYear().toString();
    const sidebarYearSpan = document.getElementById("currentYear");
    if (sidebarYearSpan) sidebarYearSpan.textContent = currentYear;
    const footerYearSpan = document.getElementById("footerCurrentYear");
    if (footerYearSpan) footerYearSpan.textContent = currentYear;

    function setupExternalLinks() {
        const links = document.body.querySelectorAll('a');
        const currentHostname = window.location.hostname;
        links.forEach(link => {
            if (link.href && link.host && link.host !== currentHostname &&
                !link.classList.contains('contributor-name-link')) {
                if (link.protocol === "http:" || link.protocol === "https:") {
                    link.target = '_blank';
                    link.rel = 'noopener noreferrer';
                }
            }
        });
    }
    setupExternalLinks();

    if (productWrapper) {
        document.querySelectorAll('.info-toggle').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const currentBox = button.closest('.box-container');
                if (!currentBox) return;
                const wasExpanded = currentBox.classList.contains('expanded');
                document.querySelectorAll('.box-container.expanded').forEach(otherBox => {
                    if (otherBox !== currentBox) {
                        otherBox.classList.remove('expanded');
                        const otherButton = otherBox.querySelector('.info-toggle');
                        if (otherButton) {
                            otherButton.setAttribute('aria-expanded', 'false');
                            otherButton.classList.remove('info-toggle-active');
                        }
                    }
                });
                currentBox.classList.toggle('expanded', !wasExpanded);
                button.setAttribute('aria-expanded', String(!wasExpanded));
                button.classList.toggle('info-toggle-active', !wasExpanded);
            });
        });

        if (typeof downloads !== 'undefined' && downloads) {
            const linkElements = document.querySelectorAll('a[id^="download-"], .dropdown-menu a[id]');
            linkElements.forEach(element => {
                const id = element.id;
                let downloadUrl = null;
                if (downloads[id]) {
                    downloadUrl = downloads[id];
                } else if (id && downloads[id.replace('download-', '')]) {
                    downloadUrl = downloads[id.replace('download-', '')];
                }
                if (downloadUrl) element.href = downloadUrl;
            });
        }

        // MODIFIED Dropdown Logic to include 'dropdown-active-overflow'
        document.querySelectorAll('.dropdown .download-btn').forEach(button => {
            button.addEventListener('click', (e) => {
                e.stopPropagation();
                const dropdownDiv = button.closest('.dropdown'); 
                if (!dropdownDiv) return;
                const currentBox = dropdownDiv.closest('.box-container'); 
                const menu = dropdownDiv.querySelector('.dropdown-menu');
                if (!menu) return;

                const isCurrentlyShown = menu.style.display === 'block';

                document.querySelectorAll('.dropdown-menu').forEach(otherMenu => {
                    if (otherMenu !== menu && otherMenu.style.display === 'block') {
                        otherMenu.style.display = 'none';
                        const otherDropdownDiv = otherMenu.closest('.dropdown');
                        if (otherDropdownDiv) otherDropdownDiv.classList.remove('show');
                        const otherBox = otherDropdownDiv ? otherDropdownDiv.closest('.box-container') : null;
                        if (otherBox) {
                            otherBox.classList.remove('dropdown-active-overflow');
                        }
                    }
                });

                if (isCurrentlyShown) {
                    menu.style.display = 'none';
                    dropdownDiv.classList.remove('show'); 
                    if (currentBox) {
                        currentBox.classList.remove('dropdown-active-overflow');
                    }
                } else {
                    menu.style.display = 'block';
                    dropdownDiv.classList.add('show');
                    if (currentBox) {
                        currentBox.classList.add('dropdown-active-overflow');
                    }
                }
            });
        });

        // Card Height Equalization - Initial calls
        if (document.readyState === "complete" || document.readyState === "interactive") {
            equalizeInitialCardHeights();
        } else {
            window.addEventListener('load', equalizeInitialCardHeights);
        }

        // MODIFIED Resize Listener for Card Height Equalization
        let resizeTimeoutForCards;
        let lastKnownWidth = window.innerWidth; 

        window.addEventListener('resize', () => {
            clearTimeout(resizeTimeoutForCards); 
            resizeTimeoutForCards = setTimeout(() => {
                const currentWidth = window.innerWidth;
                if (currentWidth > 1024 || currentWidth !== lastKnownWidth) {
                    equalizeInitialCardHeights();
                    lastKnownWidth = currentWidth; 
                }
            }, 250); 
        });
    }

    // Modal Event Listeners
    if (contributorModalOverlay) {
        contributorModalOverlay.addEventListener('click', closeContributorModal);
    } else {
        console.warn("Modal overlay element (contributorModalOverlay) not found for click listener.");
    }
    if (contributorModalCloseBtn) {
        contributorModalCloseBtn.addEventListener('click', closeContributorModal);
    } else {
        console.warn("Modal close button (contributorModalClose) not found for click listener.");
    }
    document.addEventListener('keydown', (event) => {
        const contributorModal = document.getElementById('contributorModal');
        if (event.key === 'Escape' && contributorModal && contributorModal.classList.contains('active')) {
            closeContributorModal();
        }
    });

    const contributorLinks = document.querySelectorAll('.contributor-name-link');
    if (contributorLinks.length === 0) {
        console.warn("No '.contributor-name-link' elements found. Modal triggers will not work.");
    }
    contributorLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const data = {
                name: this.dataset.name,
                githubUrl: this.dataset.githubUrl,
                kofiUrl: this.dataset.kofiUrl,
                paypalUrl: this.dataset.paypalUrl,
                buymeacoffeeUrl: this.dataset.buymeacoffeeUrl
            };
            openContributorModal(data, this);
        });
    });

    // Global Click Listener
    document.addEventListener('click', (event) => {
        const target = event.target;
        const sidebarSearchTrigger = document.querySelector('.sidebar-search-trigger');
        if (sidebar && menuToggleButton && !sidebar.classList.contains('collapsed') &&
            !sidebar.contains(target) &&
            !menuToggleButton.contains(target) &&
            (!sidebarSearchTrigger || !sidebarSearchTrigger.contains(target))
            ) {
            toggleMenu();
        }

        if (autocompleteResults && sidebarSearchInput) {
            const isAutocompleteVisible = autocompleteResults.style.display === 'block';
            if (document.activeElement === sidebarSearchInput || isAutocompleteVisible) {
                const searchInteractionArea = document.querySelector('.sidebar-search-interaction-area');
                let clickedInsideSearchRegion = false;
                if (searchInteractionArea && searchInteractionArea.contains(target)) {
                    clickedInsideSearchRegion = true;
                }
                if (autocompleteResults.contains(target)) {
                     clickedInsideSearchRegion = true;
                }
                if (!clickedInsideSearchRegion) {
                    sidebarSearchInput.value = '';
                    autocompleteResults.style.display = 'none';
                    autocompleteResults.innerHTML = '';
                }
            }
        }

        if (productWrapper) {
            // Close Card Dropdowns on outside click
            document.querySelectorAll('.dropdown-menu').forEach(menu => {
                if (menu.style.display === 'block') {
                    const dropdownDiv = menu.closest('.dropdown');
                    if (dropdownDiv && !dropdownDiv.contains(target)) {
                        menu.style.display = 'none';
                        dropdownDiv.classList.remove('show');
                        const box = dropdownDiv.closest('.box-container');
                        if (box) {
                            box.classList.remove('dropdown-active-overflow');
                        }
                    }
                }
            });

            const clickedOnAnyInfoToggle = target.closest('.info-toggle');
            const clickedOnAnyDropdownToggle = target.closest('.download-btn');
            document.querySelectorAll('.box-container.expanded').forEach(expandedBox => {
                if (!expandedBox.contains(target) && target !== expandedBox.querySelector('.info-toggle')) {
                    if (!clickedOnAnyInfoToggle && !clickedOnAnyDropdownToggle) {
                        expandedBox.classList.remove('expanded');
                        const infoButton = expandedBox.querySelector('.info-toggle');
                        if (infoButton) {
                            infoButton.setAttribute('aria-expanded', 'false');
                            infoButton.classList.remove('info-toggle-active');
                        }
                    }
                }
            });
        }
    });

    if (sidebar) {
        sidebar.addEventListener('click', (event) => {
            if (event.target.closest('a.nav-link') ||
                event.target.closest('.sidebar-search-input-field') ||
                event.target.closest('.sidebar-search-trigger') ||
                event.target.closest('.autocomplete-suggestion') ||
                event.target.closest('.theme-switch')
                ) {
                return;
            }
            event.stopPropagation();
        });
    }

    document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.addEventListener('click', event => {
            if (!event.target.closest('a')) event.stopPropagation();
        });
    });
    document.querySelectorAll('.info-box').forEach(infoBox => {
        infoBox.addEventListener('click', event => {
            if (!event.target.closest('a')) event.stopPropagation();
        });
    });

}); // End DOMContentLoaded
