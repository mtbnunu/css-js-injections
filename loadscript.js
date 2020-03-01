(function (d, script, style) {
    if(window.__remoteloaded){
        return;
    }
    url = "https://raw.githubusercontent.com/mtbnunu/css-js-injections/remote-load/" + window.location.host.replace(/^www\./, "");

    window.__remoteloaded=true;

    script = d.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = url + "/index.js";

    style = d.createElement('link');
    style.rel = 'stylesheet';
    style.type = 'text/css';
    style.href = url + "/style.css";

    var head =  d.getElementsByTagName('head')[0];
    head.appendChild(script);
    head.appendChild(style);


}(document));