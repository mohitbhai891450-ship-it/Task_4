function trackProgress(courseTitle) {
    const tracker = document.getElementById('progressTracker');
    tracker.innerHTML += `<p>Progress tracked for: ${courseTitle}</p>`;
}

function embedVideo(videoUrl) {
    const videoHtml = `<iframe width="560" height="315" src="${videoUrl}" frameborder="0" allowfullscreen></iframe>`;
    document.body.innerHTML += videoHtml;
}
