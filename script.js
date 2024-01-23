const emojis = [
    '🍏', '💻', '📱', '🎧', '⌚️', '🌟', '✨', '🔥', '💥', '🚀', 
    '💡', '🎉', '🎊', '🎈', '🌈', '💫', '🎁', '📈', '💼', '🔮', 
    '📊', '🖋️', '📚', '🔌', '💾', '🖥️', '🕹️', '🗝️', '🔒', '🔑',
    '💵', '💰', '💳', '🪙', '🧧', '🔔', '📣', '📢', '👏', '🙌',
    '👍', '🤝', '💌', '💖', '💗', '🧡', '💛', '💚', '💙', '💜',
    '🤖', '👾', '👽', '🚗', '🏎️', '🚀', '🛸', '🌍', '🌎', '🌏',
    // Add more emojis as desired
];

function generateReferralLink() {
    var loadingDiv = document.getElementById('loading');
    var twitterHandle = document.getElementById('twitterHandle').value;
    if (twitterHandle.trim() === '') {
        alert('Please enter a Twitter handle.');
        return;
    }
    if (twitterHandle.startsWith('@')) {
        twitterHandle = twitterHandle.substring(1);
    }
    loadingDiv.classList.remove('hidden');
    setTimeout(() => {
        var referralLink = "https://apps.apple.com/app/apple-store/id6456525694?pt=126535287&ct=" + twitterHandle + "&mt=8";
        document.getElementById('referralLink').value = referralLink;
        document.getElementById('referralLinkContainer').classList.remove('hidden');
        loadingDiv.classList.add('hidden');
    }, 1500); // Adjust the timeout as needed for loading effect
}

function copyReferralLink() {
    var referralLink = document.getElementById('referralLink');
    referralLink.select();
    document.execCommand('copy');
    // Random emoji feedback
    document.getElementById('emojiFeedback').innerText = emojis[Math.floor(Math.random() * emojis.length)] + ' Thank you! Referral code copied.';
}
