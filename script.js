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
    var twitterHandle = document.getElementById('twitterHandle').value.trim();
    var email = document.getElementById('email').value.trim();
    var loadingDiv = document.getElementById('loading');

    // Check if the fields are filled
    if (twitterHandle === '' || email === '') {
        alert('Please enter both your Twitter handle and email.');
        return;
    }

    // Validate email format
    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Remove '@' from Twitter handle if present
    if (twitterHandle.startsWith('@')) {
        twitterHandle = twitterHandle.substring(1);
    }

    // Display loading message
    loadingDiv.classList.remove('hidden');
    setTimeout(() => {
        // Generate and display referral link
        var referralLink = "https://apps.apple.com/app/apple-store/id6456525694?pt=126535287&ct=" + twitterHandle + "&mt=8";
        document.getElementById('referralLink').value = referralLink;
        document.getElementById('referralLinkContainer').classList.remove('hidden');
        loadingDiv.classList.add('hidden');
    }, 1500); // Adjust the timeout for loading effect as needed
}

function validateEmail(email) {
    var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

function copyReferralLink() {
    var referralLink = document.getElementById('referralLink');
    referralLink.select();
    document.execCommand('copy');
    // Display a random emoji after copying
    document.getElementById('emojiFeedback').innerText = emojis[Math.floor(Math.random() * emojis.length)] + ' Copied!';
}
