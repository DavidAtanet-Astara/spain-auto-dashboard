*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #0c0c0a;
  --bg2: #141410;
  --surface: #1c1c17;
  --surface2: #242420;
  --border: rgba(255,255,255,0.07);
  --border2: rgba(255,255,255,0.12);
  --text: #e8e4d8;
  --text2: #8a8780;
  --text3: #5a5855;
  --accent: #e05a2b;
  --accent2: #f07a4b;
  --green: #3ecf8e;
  --red: #f06060;
  --radius: 8px;
  --radius-lg: 12px;
}

html, body {
  background: var(--bg);
  color: var(--text);
  font-family: 'DM Mono', monospace;
  font-size: 14px;
  line-height: 1.5;
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
}

/* Scrollbar */
::-webkit-scrollbar { width: 4px; height: 4px; }
::-webkit-scrollbar-track { background: var(--bg); }
::-webkit-scrollbar-thumb { background: var(--surface2); border-radius: 2px; }
