function fetchWebhookInfo() {
    const webhookUrl = document.getElementById('webhook-input').value;
    
    fetch('/get_webhook_info', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ webhook: webhookUrl })
    })
    .then(response => response.json())
    .then(data => {
        const infoDiv = document.getElementById('webhook-info');
        if (data.exists) {
            infoDiv.innerHTML = `<p>Webhook Info:</p><pre>${JSON.stringify(data.info, null, 2)}</pre>`;
        } else {
            infoDiv.innerHTML = "<p>Webhook does not exist.</p>";
        }
    })
    .catch(error => {
        console.error('Error fetching webhook info:', error);
    });
}

function openTab(tabName) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.style.display = 'none');

    const activeTab = document.getElementById(`${tabName}-tab`);
    activeTab.style.display = 'block';
}
