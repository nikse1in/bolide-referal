const validAccessCodes = ["A812", "B923", "C034"];
const emojis = [
    '🍏', '💻', '📱', '🎧', '⌚️', '🌟', '✨', '🔥', '💥', '🚀',
    // ... other emojis ...
];

document.getElementById('accessCode').addEventListener('input', function(e) {
    const codeValue = e.target.value;
    const isCodeValid = validAccessCodes.includes(codeValue);
    toggleAccessCodeFeedback(isCodeValid);
});

function toggleAccessCodeFeedback(isValid) {
    const codeValid = document.getElementById('codeValid');
    const codeInvalid = document.getElementById('codeInvalid');
    const getCodeButton = document.getElementById('getCodeButton');
    const generateButton = document.getElementById('generateButton');

    codeValid.classList.toggle('hidden', !isValid);
    codeInvalid.classList.toggle('hidden', isValid);
    getCodeButton.classList.toggle('hidden', isValid);
    generateButton.disabled = !isValid;
}

document.getElementById('twitterHandle').addEventListener('input', function(e) {
    const handle = e.target.value.trim();
    if (handle && !handle.startsWith('@')) {
        e.target.value = '@' + handle;
    }
});

function generateReferralLink() {
    var twitterHandle = document.getElementById('twitterHandle').value.trim();
    var loadingDiv = document.getElementById('loading');
    var codeValid = document.getElementById('codeValid');

    if (!codeValid.classList.contains('hidden') && twitterHandle !== '') {
        if (twitterHandle.startsWith('@')) {
            twitterHandle = twitterHandle.substring(1);
        }

        loadingDiv.classList.remove('hidden');
        setTimeout(() => {
            var referralLink = "https://apps.apple.com/app/apple-store/id6456525694?pt=126535287&ct=" + twitterHandle + "&mt=8";
            document.getElementById('referralLink').value = referralLink;
            document.getElementById('referralLinkContainer').classList.remove('hidden');
            loadingDiv.classList.add('hidden');
        }, 1500);
    } else {
        alert('Please make sure the access code is correct and your Twitter handle is entered.');
    }
}

function copyReferralLink() {
    var referralLink = document.getElementById('referralLink');
    referralLink.select();
    document.execCommand('copy');
    document.getElementById('emojiFeedback').innerText = emojis[Math.floor(Math.random() * emojis.length)] + ' Copied!';
}
