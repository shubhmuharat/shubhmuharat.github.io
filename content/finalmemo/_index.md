---
title: Draft Report
---

<!-- Page-local font: register Deltha.otf from static/fonts and scope to this page -->
<style>
@font-face {
  font-family: 'Deltha';
  src: url('/fonts/Deltha.otf') format('opentype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}

.custom-font-page {
  font-family: 'Deltha', system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  line-height: 1.45;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.custom-font-page code,
.custom-font-page pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, "Roboto Mono", "Segoe UI Mono", monospace;
}

/* audio-related controls removed; keep styling minimal for the player */
.page-audio { margin: 1rem 0; }
</style>

<div class="custom-font-page">
<!-- ...existing code... -->

<!-- Audio player: visible, user-controlled. Update paths if your audio is in a subfolder of static/ -->
<div class="page-audio">
  <audio controls preload="metadata">
    <source src="/bgm.mp3" type="audio/mpeg">
    <source src="/audio/clue.mp3" type="audio/mpeg">
    Your browser does not support the audio element. Download the file <a href="/clue.mp3">here</a>.
  </audio>
</div>

---

~~R.A.V.A.N.~~

~~(Regime for Absolute Vigilance Across Nations)~~

R.A.M.A.

(Regime for Absolute Monopoly Again)

---

{{< typeit lifelike=true >}}
Old Task: Bring about Anarchy

Task Status: Complete

Initial Funds Allocated by KALIPURUSH: Rs. 3,760 crores

Funds Used: Rs. 4,250 crores

Task Report: To be prepared and submitted to CARTEL
{{< /typeit >}}

---

{{< typeit lifelike=true >}}
Secondary Task: Take Control of POLKUS or destroy

Task Status: Taken Control

New Task: Establish new Political and Social Order
{{< /typeit >}}

---

{{< typeit lifelike=true >}}
New Task: Establish new political & social order

Task Status: In progress

Fund Status: To be discused
{{< /typeit >}}

---

{{< typeit lifelike=true >}}
Operational Summary:

Revered Sir,

The rogue contenders, government, and governance have been neutralized. The public's need to vent has been satiated. The slate is now clear and ready to be painted without hindrance from organizations, public, or individuals.

Pest Control: Successful
{{< /typeit >}}

---

> {{< typeit lifelike=true >}}"Those who control money, control the narrative."{{< /typeit >}}

---

KALIPURUSH CARTEL

(Global Economic Oversight & Strategic Resource Control)

---

<!-- ...existing code... -->

<!-- Password reveal UI: changed to redirect on correct password (no hyperlink revealed) -->
<style>
/* lightweight page-local styles for password UI */
#pw-container { margin-top: 1.5rem; display: flex; gap: .5rem; align-items: center; flex-wrap: wrap; }
#pw-container label { font-size: .95rem; }
#pw-input { padding: .35rem .5rem; font-size: .95rem; }
#pw-submit { padding: .35rem .7rem; font-size: .95rem; cursor: pointer; }
#pw-message { color: #c00; font-size: .9rem; display: none; width: 100%; }
/* removed #pw-link styles to avoid revealing any link */
</style>

<div id="pw-container" aria-hidden="false">
  <label for="pw-input">Enter password to continue:</label>
  <input id="pw-input" type="password" autocomplete="current-password" aria-label="Password input">
  <button id="pw-submit" type="button">Submit</button>
  <div id="pw-message" role="status" aria-live="polite"></div>
</div>

<script>
(function(){
  var PASSWORD = 'KALKI2898AD'; // <<-- set your password here
  var REDIRECT = '/winner'; // <<-- change redirect target if needed
  var input = document.getElementById('pw-input');
  var btn = document.getElementById('pw-submit');
  var msg = document.getElementById('pw-message');

  function showError(text) {
    msg.textContent = text;
    msg.style.display = 'block';
  }

  function clearError() {
    msg.textContent = '';
    msg.style.display = 'none';
  }

  function check() {
    if (!input) return;
    if (input.value === PASSWORD) {
      // successful — redirect (no hyperlink is revealed)
      window.location.href = REDIRECT;
    } else {
      clearError();
      showError('Incorrect password.');
    }
  }

  btn.addEventListener('click', check);
  input.addEventListener('keydown', function(e){ if (e.key === 'Enter') check(); });
})();
</script>

<!-- ...existing code... -->
