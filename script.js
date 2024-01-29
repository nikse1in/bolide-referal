const emojis = [
    '🍏', '💻', '📱', '🎧', '⌚️', '🌟', '✨', '🔥', '💥', '🚀',
    // ... other emojis ...
];

document.getElementById('twitterHandle').addEventListener('input', function(e) {
    const handle = e.target.value.trim();
    if (handle && !handle.startsWith('@')) {
        e.target.value = '@' + handle;
    }
});

function generateReferralLink() {
    var twitterHandle = document.getElementById('twitterHandle').value.trim();
    var loadingDiv = document.getElementById('loading');

    if (twitterHandle !== '') {
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
        alert('Please enter your Twitter handle.');
    }
}

function copyReferralLink() {
    var referralLink = document.getElementById('referralLink');
    referralLink.select();
    document.execCommand('copy');
    document.getElementById('emojiFeedback').innerText = emojis[Math.floor(Math.random() * emojis.length)] + ' Copied!';
}
