// Interactive Popup Modal Controller
function openOfferModal(cardName, targetUrl) {
    const modal = document.getElementById('offerModal');
    const modalContent = document.getElementById('modalContent');
    const titleEl = document.getElementById('modalCardTitle');
    const linkDisplay = document.getElementById('modalLinkDisplay');
    const proceedBtn = document.getElementById('modalProceedBtn');

    titleEl.textContent = cardName;
    linkDisplay.textContent = targetUrl;
    proceedBtn.href = targetUrl;

    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modalContent.classList.remove('scale-95');
        modalContent.classList.add('scale-100');
    }, 10);
}

function closeOfferModal() {
    const modal = document.getElementById('offerModal');
    const modalContent = document.getElementById('modalContent');

    modal.classList.add('opacity-0');
    modalContent.classList.remove('scale-100');
    modalContent.classList.add('scale-95');

    setTimeout(() => {
        modal.classList.add('hidden');
    }, 300);
}

// Lead Form Handler with Toast Feedback
function handleLeadSubmit(event) {
    event.preventDefault();
    
    // Show Toast Notification
    const toast = document.getElementById('toast');
    const toastMsg = document.getElementById('toastMessage');
    toastMsg.textContent = "Thank you! We've received your request.";
    
    toast.classList.remove('translate-y-20', 'opacity-0');
    
    setTimeout(() => {
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 4000);

    event.target.reset();
}

// Close modal when clicking outside content area
window.addEventListener('click', function(event) {
    const modal = document.getElementById('offerModal');
    if (event.target === modal) {
        closeOfferModal();
    }
});