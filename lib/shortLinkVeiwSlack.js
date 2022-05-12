function short_link_view_slack(text) {
    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(urlRegex, function(url) {
        let last = url.split('/').pop();
        return '<' + url + ' | ' + last + '>';
    });
}

module.exports = short_link_view_slack
