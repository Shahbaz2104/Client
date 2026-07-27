// Contact page category router
function setFormCategory(category) {
    // Map category labels to proper subject lines
    const subjects = {
        'Pest Sourcing': 'Integrated Corporate Pest Sourcing & Facility Assessment',
        'ISO Sourcing': 'ISO Certification & Compliance Pathway Inquiry',
        'Food Safety': 'Food Safety System Development & HACCP Consultation',
        'Lab Procurement': 'Laboratory Equipment, Glassware & Chemical Sourcing'
    };
    
    // Update the subject input
    const subjectInput = document.getElementById('sourcing-subject');
    const hiddenInput = document.getElementById('routed-inquiry-type');
    
    if (subjectInput && hiddenInput) {
        subjectInput.value = subjects[category] || category;
        hiddenInput.value = subjects[category] || category;
    }
    
    // Update active button styling
    const buttons = document.querySelectorAll('.category-router');
    buttons.forEach(btn => {
        if (btn.textContent.trim() === category.replace('Sourcing', '').trim() || 
            (category === 'Pest Sourcing' && btn.textContent.trim() === 'Pest Control') ||
            (category === 'ISO Sourcing' && btn.textContent.trim() === 'ISO Audits') ||
            (category === 'Food Safety' && btn.textContent.trim() === 'Food Safety') ||
            (category === 'Lab Procurement' && btn.textContent.trim() === 'Lab Sourcing')) {
            btn.classList.add('bg-brand-accent', 'text-brand-dark', 'border-gray-200');
            btn.classList.remove('bg-white', 'text-slate-500');
        } else {
            btn.classList.remove('bg-brand-accent', 'text-brand-dark');
            btn.classList.add('bg-white', 'text-slate-500', 'border-gray-200');
        }
    });
}

// FAQ Accordion
function toggleFaq(id) {
    const content = document.getElementById('faq-content-' + id);
    const icon = document.getElementById('faq-icon-' + id);
    
    if (content && icon) {
        content.classList.toggle('hidden');
        
        if (content.classList.contains('hidden')) {
            icon.classList.remove('ph-minus');
            icon.classList.add('ph-plus');
            icon.style.transform = 'rotate(0deg)';
        } else {
            icon.classList.remove('ph-plus');
            icon.classList.add('ph-minus');
            icon.style.transform = 'rotate(180deg)';
        }
    }
}
