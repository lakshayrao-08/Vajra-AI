window.addEventListener('DOMContentLoaded', () => {
    let currentMode = "business";

    document.getElementById('mainInput').value = window.VajraMockData.corporateThreat;

    document.getElementById('bizMode').addEventListener('click', () => {
        currentMode = "business";
        document.getElementById('bizMode').classList.add('active');
        document.getElementById('homeMode').classList.remove('active');
        document.getElementById('inputPanelTitle').innerText = "INBOUND B2B TRANSACTION METADATA LOG";
        document.getElementById('mainInput').value = window.VajraMockData.corporateThreat;
        clearDashboard();
    });

    document.getElementById('homeMode').addEventListener('click', () => {
        currentMode = "household";
        document.getElementById('homeMode').classList.add('active');
        document.getElementById('bizMode').classList.remove('active');
        document.getElementById('inputPanelTitle').innerText = "HOUSEHOLD EXPENSE LEDGER / SMS ACCOUNT STREAM";
        document.getElementById('mainInput').value = window.VajraMockData.householdInflation;
        clearDashboard();
    });

    document.getElementById('injBizThreat').addEventListener('click', () => {
        document.getElementById('bizMode').click();
    });

    document.getElementById('injHomeInflation').addEventListener('click', () => {
        document.getElementById('homeMode').click();
    });

    function clearDashboard() {
        document.getElementById('mainOutput').innerText = "Engine shifting matrix sequence... Standing by for input analysis run.";
        document.getElementById('mainOutput').style.color = "#94a3b8";
        ['val1', 'sub1', 'val2', 'sub2', 'val3', 'sub3'].forEach(id => {
            document.getElementById(id).innerText = "--";
            document.getElementById(id).style.color = "#64748b";
        });
    }

    document.getElementById('processBtn').addEventListener('click', () => {
        const payload = document.getElementById('mainInput').value.trim();
        const display = document.getElementById('mainOutput');

        if (!payload) {
            alert("Execution halted: Structural payload source is empty.");
            return;
        }

        display.innerText = "⚡ Invoking VAJRA AI Unified Intelligence Gateway Engine...\n🛡️ Mapping execution arrays against deep localized parameters...";
        display.style.color = "#f59e0b";

        setTimeout(() => {
            if (currentMode === "business") {
                window.VajraCorporateEngine.execute(payload, display);
            } else {
                window.VajraGrahastiEngine.execute(payload, display);
            }
        }, 1000);
    });
});