const core = require('@actions/core');

function links_to_namedlink(text) {
    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    return text.replace(urlRegex, function(url) {
        let last = url.split('/').pop();
        return '<' + url + ' | ' + last + '>';
    });
}


try {
    const in_text = core.getInput('in_text');
    core.setOutput("modified_text", links_to_namedlink(in_text));
} catch (error) {
    core.setFailed(error.message);
}
