(async () => {
    const url = "https://raw.githubusercontent.com/mtbnunu/css-js-injections/remote-load/" + window.location.host.replace(/^www\./, "") + "/";

    const load = async (file) => {
        const d = await fetch(url + file)
        if (!d.ok) return;
        return await d.text();
    }

    const script = await load("index.js");
    const style = await load("style.css");
    if (script) {
        try {
            eval(script);
        } catch (e) {
            console.warn(e)
        }
    }
    if (style) {
        const s = window.document.createElement('style');
        s.innerHTML = style;
        window.document.getElementsByTagName('head')[0].appendChild(s);
    }
})();
