---
title: Winner
---

<!-- ...existing code... -->

<style>
/* celebration banner */
.celebrate-wrap { position: relative; padding: 2rem 1rem; text-align: center; }
.celebrate-title {
  display: inline-block;
  background: linear-gradient(90deg,#ffdd57,#ff6b6b);
  color: #111;
  font-weight: 700;
  padding: .5rem 1rem;
  border-radius: .5rem;
  box-shadow: 0 6px 18px rgba(0,0,0,.12);
  transform: translateY(0);
  animation: pop-in .9s cubic-bezier(.2,.9,.3,1);
}
@keyframes pop-in { from { transform: translateY(-20px) scale(.96); opacity:0 } to { transform: translateY(0) scale(1); opacity:1 } }

/* full-screen confetti canvas (page-local) */
#celebrate-canvas {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 9999;
  width: 100vw;
  height: 100vh;
}
</style>

<div class="celebrate-wrap">
  <h1 class="celebrate-title">Winner</h1>
  <p>Congratulations — celebration in progress!</p>
</div>

<canvas id="celebrate-canvas" aria-hidden="true"></canvas>

<script>
// compact confetti: page-local, auto-runs for durationMs then stops
(function(){
  var durationMs = 6000;
  var canvas = document.getElementById('celebrate-canvas');
  if (!canvas) return;
  var ctx = canvas.getContext('2d');
  var DPR = Math.max(1, window.devicePixelRatio || 1);

  function resize(){ canvas.width = innerWidth * DPR; canvas.height = innerHeight * DPR; canvas.style.width = innerWidth + 'px'; canvas.style.height = innerHeight + 'px'; ctx.setTransform(DPR,0,0,DPR,0,0); }
  window.addEventListener('resize', resize, { passive:true }); resize();

  var colors = ['#ff4757','#ffa502','#ff6b6b','#2ed573','#1e90ff','#9b59b6'];
  var particles = [];
  var maxCount = 140;

  function rand(min,max){ return Math.random()*(max-min)+min; }

  function spawn(count){
    for (var i=0;i<count;i++){
      particles.push({
        x: rand(0, innerWidth),
        y: rand(-20, innerHeight/2),
        w: rand(6,12),
        h: rand(8,16),
        vx: rand(-2,2),
        vy: rand(2,7),
        rot: rand(0, Math.PI*2),
        vrot: rand(-0.2,0.2),
        color: colors[(Math.random()*colors.length)|0],
        ttl: rand(3000, 8000)
      });
      if (particles.length > maxCount) particles.shift();
    }
  }

  var last = performance.now();
  function frame(now){
    var dt = now - last; last = now;
    ctx.clearRect(0,0,innerWidth,innerHeight);
    for (var i=particles.length-1;i>=0;i--){
      var p = particles[i];
      p.x += p.vx * (dt/16);
      p.y += p.vy * (dt/16);
      p.rot += p.vrot * (dt/16);
      p.ttl -= dt;
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.rot);
      ctx.fillStyle = p.color;
      ctx.fillRect(-p.w/2, -p.h/2, p.w, p.h);
      ctx.restore();
      if (p.y > innerHeight + 50 || p.ttl <= 0) particles.splice(i,1);
    }
    if (running) requestId = requestAnimationFrame(frame);
  }

  var requestId = null, running = false;
  function start(){
    running = true;
    last = performance.now();
    spawn(maxCount/3);
    requestId = requestAnimationFrame(frame);
    // continuous spawn pulse
    spawnInterval = setInterval(function(){ spawn(Math.max(2, (maxCount - particles.length)/8 | 0)); }, 250);
    // stop after duration
    setTimeout(stop, durationMs);
  }
  function stop(){
    running = false;
    clearInterval(spawnInterval);
    if (requestId) cancelAnimationFrame(requestId);
    // graceful fade: clear canvas after a short delay so remaining particles finish
    setTimeout(function(){ ctx.clearRect(0,0,innerWidth,innerHeight); }, 800);
  }

  // run on DOM ready (small delay to ensure layout settled)
  var spawnInterval = null;
  if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(start, 250);
  } else {
    document.addEventListener('DOMContentLoaded', function(){ setTimeout(start,250); });
  }
})();
</script>
