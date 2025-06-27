
let selectedReportType = '';
let currentScamType = 'phone';


const alertsData = [
    {
        id: 1,
        type: "Fake Bank Call",
        message: "Scammers impersonating SBI Bank asking for OTP verification",
        location: "Mumbai, Maharashtra",
        time: "2 minutes ago",
        severity: "high",
        reports: 47
    },
    {
        id: 2,
        type: "Phishing SMS",
        message: "Fake COVID-19 vaccination certificate links being sent",
        location: "Delhi, NCR",
        time: "5 minutes ago",
        severity: "high",
        reports: 23
    },
    {
        id: 3,
        type: "Job Scam",
        message: "Fake work-from-home opportunities asking for registration fees",
        location: "Bangalore, Karnataka",
        time: "12 minutes ago",
        severity: "medium",
        reports: 15
    }
];

const scamTypesData = {
    phone: {
        icon: 'fas fa-phone',
        title: 'Phone Call Scams',
        description: 'Learn about common phone-based fraud attempts',
        examples: [
            'Fake bank customer service calls asking for OTP',
            'Tech support scams claiming computer virus',
            'Prize/lottery winning calls asking for fees'
        ],
        redFlags: [
            'Urgent requests for personal information',
            'Pressure to act immediately',
            'Requests for OTP or passwords'
        ],
        prevention: [
            'Never share OTP with anyone',
            'Verify caller identity independently',
            'Banks never ask for passwords over phone'
        ]
    },
    email: {
        icon: 'fas fa-envelope',
        title: 'Email Phishing',
        description: 'Identify and avoid email-based scams',
        examples: [
            'Fake bank emails asking to verify account',
            'COVID-19 related phishing attempts',
            'Job offer emails requesting personal info'
        ],
        redFlags: [
            'Generic greetings like "Dear Customer"',
            'Urgent action required language',
            'Suspicious attachments or links'
        ],
        prevention: [
            'Check sender email address carefully',
            'Never click suspicious links',
            'Verify with official sources'
        ]
    },
    financial: {
        icon: 'fas fa-credit-card',
        title: 'Financial Fraud',
        description: 'Protect yourself from money-related scams',
        examples: [
            'Fake investment opportunities',
            'Credit card cloning attempts',
            'UPI payment scams'
        ],
        redFlags: [
            'Guaranteed high returns',
            'Requests for advance payments',
            'Unusual transaction requests'
        ],
        prevention: [
            'Verify investment opportunities',
            'Use secure payment methods',
            'Monitor bank statements regularly'
        ]
    },
    job: {
        icon: 'fas fa-briefcase',
        title: 'Employment Scams',
        description: 'Avoid job-related fraud attempts',
        examples: [
            'Work-from-home scams requiring fees',
            'Fake recruitment agencies',
            'Part-time job scams on social media'
        ],
        redFlags: [
            'Requests for registration fees',
            'Too-good-to-be-true salaries',
            'No proper interview process'
        ],
        prevention: [
            'Research company thoroughly',
            'Never pay for job opportunities',
            'Verify recruiter credentials'
        ]
    }
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    loadAlerts();
    loadEducationContent();
    setupReportForm();
});

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileNav = document.getElementById('mobileNav');
    mobileNav.classList.toggle('show');
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Language change (placeholder function)
function changeLanguage() {
    const select = document.getElementById('languageSelect');
    const selectedLang = select.value;
    console.log('Language changed to:', selectedLang);
    // Implement actual language change logic here
}

// Load alerts
function loadAlerts() {
    const alertsContainer = document.getElementById('alertsContainer');
    
    alertsData.forEach(alert => {
        const alertElement = document.createElement('div');
        alertElement.className = `alert-item ${alert.severity}`;
        
        alertElement.innerHTML = `
            <div class="alert-header">
                <i class="fas fa-exclamation-triangle"></i>
                <span>${alert.type}</span>
            </div>
            <div class="alert-message">${alert.message}</div>
            <div class="alert-meta">
                <div class="alert-meta-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${alert.location}</span>
                </div>
                <div class="alert-meta-item">
                    <i class="fas fa-clock"></i>
                    <span>${alert.time}</span>
                </div>
                <div class="alert-meta-item">
                    <i class="fas fa-users"></i>
                    <span>${alert.reports} reports</span>
                </div>
            </div>
        `;
        
        alertsContainer.appendChild(alertElement);
    });
}

// Link checker
function checkLink() {
    const linkInput = document.getElementById('linkInput');
    const resultDiv = document.getElementById('linkResult');
    const url = linkInput.value.trim();
    
    if (!url) {
        alert('Please enter a URL');
        return;
    }
    
    // Simulate checking
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = '<div class="result-header"><i class="fas fa-spinner fa-spin"></i> Checking...</div>';
    
    setTimeout(() => {
        const isSafe = !url.toLowerCase().includes('scam') && 
                      !url.toLowerCase().includes('phishing') &&
                      !url.toLowerCase().includes('fake');
        
        const resultClass = isSafe ? 'safe' : 'dangerous';
        const icon = isSafe ? 'fas fa-check-circle' : 'fas fa-exclamation-triangle';
        const message = isSafe ? 'This link appears to be safe' : 'WARNING: This link may be dangerous';
        
        const details = isSafe 
            ? ['Domain is verified', 'No malicious content detected', 'Safe to visit']
            : ['Suspicious domain detected', 'May contain malware', 'Reported by multiple users'];
        
        resultDiv.className = `result-container ${resultClass}`;
        resultDiv.innerHTML = `
            <div class="result-header">
                <i class="${icon}"></i>
                <span>${message}</span>
            </div>
            <ul class="result-details">
                ${details.map(detail => `<li><span>•</span> ${detail}</li>`).join('')}
            </ul>
        `;
    }, 2000);
}

// Phone checker
function checkPhone() {
    const phoneInput = document.getElementById('phoneInput');
    const resultDiv = document.getElementById('phoneResult');
    const phone = phoneInput.value.trim();
    
    if (!phone) {
        alert('Please enter a phone number');
        return;
    }
    
    // Simulate checking
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = '<div class="result-header"><i class="fas fa-spinner fa-spin"></i> Checking...</div>';
    
    setTimeout(() => {
        const isSpam = Math.random() > 0.7; // Random result for demo
        
        const resultClass = isSpam ? 'dangerous' : 'safe';
        const icon = isSpam ? 'fas fa-exclamation-triangle' : 'fas fa-check-circle';
        const message = isSpam ? 'WARNING: This number has been reported for spam' : 'This number appears to be safe';
        
        const details = isSpam 
            ? ['Reported by multiple users', 'Associated with telemarketing', 'Block recommended']
            : ['No spam reports found', 'Appears to be legitimate', 'Safe to answer'];
        
        resultDiv.className = `result-container ${resultClass}`;
        resultDiv.innerHTML = `
            <div class="result-header">
                <i class="${icon}"></i>
                <span>${message}</span>
            </div>
            <ul class="result-details">
                ${details.map(detail => `<li><span>•</span> ${detail}</li>`).join('')}
            </ul>
        `;
    }, 1500);
}

// Education section
function showScamType(type) {
    currentScamType = type;
    
    // Update active tab
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    loadEducationContent();
}

function loadEducationContent() {
    const contentDiv = document.getElementById('educationContent');
    const scamData = scamTypesData[currentScamType];
    
    contentDiv.innerHTML = `
        <div class="education-header">
            <i class="${scamData.icon}"></i>
            <div>
                <div class="education-title">${scamData.title}</div>
                <div class="education-description">${scamData.description}</div>
            </div>
        </div>
        
        <div class="education-grid">
            <div class="education-card examples">
                <h4>
                    <i class="fas fa-info-circle" style="color: #f59e0b;"></i>
                    Common Examples
                </h4>
                <ul>
                    ${scamData.examples.map(example => `<li>${example}</li>`).join('')}
                </ul>
            </div>
            
            <div class="education-card red-flags">
                <h4>
                    <i class="fas fa-exclamation-triangle" style="color: #ef4444;"></i>
                    Red Flags
                </h4>
                <ul>
                    ${scamData.redFlags.map(flag => `<li>${flag}</li>`).join('')}
                </ul>
            </div>
            
            <div class="education-card prevention">
                <h4>
                    <i class="fas fa-shield-alt" style="color: #10b981;"></i>
                    Prevention Tips
                </h4>
                <ul>
                    ${scamData.prevention.map(tip => `<li>${tip}</li>`).join('')}
                </ul>
            </div>
        </div>
    `;
}

// Report form setup
function setupReportForm() {
    const typeButtons = document.querySelectorAll('.type-btn');
    
    typeButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            typeButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Store selected type
            selectedReportType = this.dataset.type;
        });
    });
}

// Submit report
function submitReport(event) {
    event.preventDefault();
    
    if (!selectedReportType) {
        alert('Please select a report type');
        return;
    }
    
    const description = document.getElementById('description').value.trim();
    if (!description) {
        alert('Please provide a description');
        return;
    }
    
    // Simulate form submission
    const submitBtn = document.querySelector('.btn-submit');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Submitting Report...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        // Hide form and show success message
        document.getElementById('reportForm').style.display = 'none';
        document.getElementById('reportSuccess').style.display = 'block';
        
        // Log report data (in real app, send to server)
        console.log('Report submitted:', {
            type: selectedReportType,
            description: description,
            contact: document.getElementById('contact').value,
            location: document.getElementById('location').value,
            evidence: document.getElementById('evidence').value
        });
    }, 2000);
}

// Reset report form
function resetReportForm() {
    // Show form and hide success message
    document.getElementById('reportForm').style.display = 'block';
    document.getElementById('reportSuccess').style.display = 'none';
    
    // Reset form
    document.getElementById('reportForm').reset();
    
    // Reset button states
    document.querySelectorAll('.type-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Reset submit button
    const submitBtn = document.querySelector('.btn-submit');
    submitBtn.textContent = 'Submit Report';
    submitBtn.disabled = false;
    
    // Reset selected type
    selectedReportType = '';
}

// Close mobile menu when clicking on links
document.addEventListener('click', function(event) {
    if (event.target.matches('.mobile-nav a')) {
        document.getElementById('mobileNav').classList.remove('show');
    }
});

// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation to buttons
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent.includes('Check') || this.textContent.includes('Submit')) {
            const originalText = this.textContent;
            this.innerHTML = '<i class="fas fa-spinner fa-spin"></i> ' + originalText.replace('Check', 'Checking').replace('Submit', 'Submitting');
            this.disabled = true;
            
            setTimeout(() => {
                this.textContent = originalText;
                this.disabled = false;
            }, 2000);
        }
    });
});
