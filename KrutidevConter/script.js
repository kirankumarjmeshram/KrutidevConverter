import kru2uni from '@anthro-ai/krutidev-unicode';

document.getElementById('convert').addEventListener('click', function() {
    const inputText = document.getElementById('input').value;
    const unicodeText = kru2uni(inputText);
    document.getElementById('output').value = unicodeText;
});
