function createChatbotIframe() {
    // Get the current URL path
    const path = window.location.pathname;
    alert(path);
    // Extract language from URL
    let language = 'en';
    if (path.includes('/es/')) {
        language = 'es';
    } else if (path.includes('/en-us/')) {
        language = 'en';
    }
    
    // Find the page-content div
    const pageContent = document.querySelector('.page-content');
    if (!pageContent) {
        console.error('Could not find .page-content div');
        return;
    }

    // Create container div if it doesn't exist
    let container = document.getElementById('chatbot-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'chatbot-container';
        container.style.width = '100%';
        container.style.height = '100%';
        container.style.minHeight = 'calc(100vh - 60px)';
        pageContent.insertBefore(container, pageContent.firstChild);
    }
    
    // Create iframe element
    const iframe = document.createElement('iframe');
    iframe.src = `https://avi-webchat-dev.wonderfulwave-68028ed8.eastus.azurecontainerapps.io/?idioma=${language}`;
    iframe.allow = 'microphone; geolocation';
    iframe.allowFullscreen = true;
    iframe.sandbox = 'allow-same-origin allow-scripts allow-forms allow-popups';
    iframe.style.width = '100%';
    iframe.style.height = '100%';
    iframe.style.minHeight = 'calc(100vh - 60px)';
    iframe.style.border = 'none';
    
    // Append iframe to container
    container.appendChild(iframe);
}

// Call the function when the page loads
document.addEventListener('DOMContentLoaded', createChatbotIframe);