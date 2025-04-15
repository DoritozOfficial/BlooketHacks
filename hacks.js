const repoBase = "https://raw.githubusercontent.com/glixzzy/blooket-hack/main/global/";

const scriptMap = {
  addTokens: "addTokens.js",
  revealAnswers: "revealAnswers.js"
};

function loadScript(scriptKey) {
  const fileName = scriptMap[scriptKey];
  const url = repoBase + fileName;

  fetch(url)
    .then(res => res.text())
    .then(code => {
      document.getElementById('scriptDisplay').textContent = code;
    })
    .catch(err => {
      document.getElementById('scriptDisplay').textContent = '// Failed to load script.';
      console.error(err);
    });
}
