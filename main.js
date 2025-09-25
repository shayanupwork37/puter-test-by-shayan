// main.js — minimal Puter.ai chat demo
(function () {
  const chatEl = document.getElementById('chat');
  const form = document.getElementById('composer');
  const input = document.getElementById('input');

  function append(kind, text) {
    const el = document.createElement('div');
    el.className = 'msg ' + (kind === 'you' ? 'you' : 'bot');
    el.textContent = text;
    chatEl.appendChild(el);
    chatEl.scrollTop = chatEl.scrollHeight;
  }

  async function callPuter(promptText) {
    append('bot', '...thinking (Puter.ai)');
    try {
      const resp = await puter.ai.chat(promptText);
      // remove placeholder
      const placeholders = Array.from(chatEl.querySelectorAll('.msg.bot')).filter(n => n.textContent.startsWith('...thinking'));
      placeholders.forEach(p => p.remove());

      let text = '';
      if (typeof resp === 'string') text = resp;
      else if (resp?.message?.content) text = resp.message.content;
      else if (Array.isArray(resp)) text = resp.map(r => r?.text || r?.content || JSON.stringify(r)).join('\n\n');
      else text = JSON.stringify(resp);

      append('bot', text);
    } catch (err) {
      const placeholders = Array.from(chatEl.querySelectorAll('.msg.bot')).filter(n => n.textContent.startsWith('...thinking'));
      placeholders.forEach(p => p.remove());
      append('bot', 'Error calling puter.ai.chat(): ' + (err?.message || JSON.stringify(err)));
      console.error(err);
    }
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    append('you', text);
    input.value = '';
    await callPuter(text);
  });

  window.addEventListener('load', () => {
    append('bot', 'Tip: You may need to sign into Puter or host this page on Puter for full access.');
  });
})();
