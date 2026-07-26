(function enforceHttps() {
  const localHosts = new Set(["localhost", "127.0.0.1", "[::1]"]);

  if (window.location.protocol !== "http:" || localHosts.has(window.location.hostname)) {
    return;
  }

  const secureUrl = new URL(window.location.href);
  secureUrl.protocol = "https:";
  window.location.replace(secureUrl.href);
})();
