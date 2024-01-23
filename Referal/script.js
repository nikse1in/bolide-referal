function generateReferralLink() {
    var twitterHandle = document.getElementById('twitterHandle').value;
    if (twitterHandle.trim() === '') {
        alert('Please enter a Twitter handle.');
        return;
    }
    // Check if the handle starts with '@' and remove it
    if (twitterHandle.startsWith('@')) {
        twitterHandle = twitterHandle.substring(1);
    }
    var referralLink = "https://apps.apple.com/app/apple-store/id6456525694?pt=126535287&ct=" + twitterHandle + "&mt=8";
    document.getElementById('referralLink').value = referralLink;
    document.getElementById('referralLinkContainer').classList.remove('hidden');
}

function copyReferralLink() {
    var referralLink = document.getElementById('referralLink');
    referralLink.select();
    document.execCommand('copy');
    document.getElementById('thankYouMessage').innerText = 'Thank you! Referral code copied.';
}
