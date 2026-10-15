/* =========================================================
   Catalyst Core — configurações e formulário
   Edite o bloco CONFIG abaixo antes de publicar.
   ========================================================= */
const CONFIG = {
  // Número do WhatsApp com DDI e DDD, só dígitos
  whatsappNumber: "5511993439117",
  // Como o número aparece no rodapé
  whatsappDisplay: "(11) 99343-9117",
  // Mensagem padrão ao abrir o WhatsApp
  whatsappMessage: "Olá! Vim pelo site da Catalyst Core e quero falar sobre um projeto.",
  // URL que recebe o formulário (POST JSON {nome, email, whatsapp}).
  // Ex.: Formspree, n8n, Make ou API própria. Vazio = modo demonstração (não envia).
  formEndpoint: "",
  // URL que recebe a assinatura da newsletter (POST JSON {email}). Vazio = modo demonstração.
  newsletterEndpoint: "",
};

(function () {
  "use strict";

  /* ---------- Links de WhatsApp ---------- */
  const waLink = (msg) =>
    "https://wa.me/" + CONFIG.whatsappNumber + "?text=" + encodeURIComponent(msg || CONFIG.whatsappMessage);

  document.querySelectorAll(".js-whatsapp").forEach((a) => {
    a.href = waLink(a.dataset.msg);
  });
  document.querySelectorAll(".js-whatsapp-display").forEach((el) => {
    el.textContent = CONFIG.whatsappDisplay;
  });
  document.querySelectorAll(".js-year").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });

  /* ---------- Formulário ---------- */
  const form = document.getElementById("lead-form");
  if (!form) return;

  const nameInput = document.getElementById("lead-name");
  const emailInput = document.getElementById("lead-email");
  const phoneInput = document.getElementById("lead-whatsapp");
  const submitBtn = document.getElementById("lead-submit");
  const card = form.closest(".cc-form-card");
  const body = card.querySelector(".cc-form-body");
  const success = card.querySelector(".cc-form-success");

  // Máscara: (11) 99999-9999 ou (11) 9999-9999
  function maskPhone(value) {
    const d = value.replace(/\D/g, "").slice(0, 11);
    if (d.length <= 2) return d.length ? "(" + d : "";
    if (d.length <= 6) return "(" + d.slice(0, 2) + ") " + d.slice(2);
    if (d.length <= 10) return "(" + d.slice(0, 2) + ") " + d.slice(2, 6) + "-" + d.slice(6);
    return "(" + d.slice(0, 2) + ") " + d.slice(2, 7) + "-" + d.slice(7);
  }
  phoneInput.addEventListener("input", () => {
    phoneInput.value = maskPhone(phoneInput.value);
  });

  // Mantém o label flutuante no alto quando o campo tem texto
  [nameInput, emailInput, phoneInput].forEach((input) => {
    input.addEventListener("input", () => {
      input.parentElement.classList.toggle("has-text", input.value.trim() !== "");
      setError(input, "");
    });
  });

  function setError(input, msg) {
    const el = input.parentElement.querySelector(".error-msg");
    el.textContent = msg;
    el.style.display = msg ? "block" : "none";
    input.setAttribute("aria-invalid", msg ? "true" : "false");
  }

  function validate() {
    let ok = true;
    if (nameInput.value.trim().length < 2) { setError(nameInput, "Informe seu nome"); ok = false; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(emailInput.value.trim())) { setError(emailInput, "E-mail inválido"); ok = false; }
    const digits = phoneInput.value.replace(/\D/g, "").length;
    if (digits !== 10 && digits !== 11) { setError(phoneInput, "Informe o DDD e o número"); ok = false; }
    return ok;
  }

  let errorBox = null;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    if (errorBox) errorBox.remove();
    if (!validate()) return;

    submitBtn.disabled = true;
    submitBtn.textContent = "Enviando…";
    const data = { nome: nameInput.value.trim(), email: emailInput.value.trim(), whatsapp: phoneInput.value };

    try {
      if (CONFIG.formEndpoint) {
        const res = await fetch(CONFIG.formEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Falha no envio");
      } else {
        await new Promise((r) => setTimeout(r, 800)); // modo demonstração
      }
      body.hidden = true;
      success.hidden = false;
    } catch (err) {
      errorBox = document.createElement("p");
      errorBox.className = "cc-form-error";
      errorBox.textContent = "Não foi possível enviar agora. Tente de novo ou chame a gente no WhatsApp.";
      form.appendChild(errorBox);
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = "Enviar";
    }
  });
})();

/* ---------- Newsletter do rodapé (modo demonstração) ---------- */
(function () {
  "use strict";
  const form = document.getElementById("newsletter-form");
  if (!form) return;
  const input = document.getElementById("newsletter-email");
  const notice = document.getElementById("newsletter-notice");
  const original = notice.textContent;
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    notice.classList.remove("is-ok", "is-error");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(input.value.trim())) {
      notice.textContent = "Informe um e-mail válido.";
      notice.classList.add("is-error");
      return;
    }
    try {
      if (CONFIG.newsletterEndpoint) {
        const res = await fetch(CONFIG.newsletterEndpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ email: input.value.trim() }),
        });
        if (!res.ok) throw new Error("Falha");
      }
      notice.textContent = "Pronto! Você vai receber nossas novidades.";
      notice.classList.add("is-ok");
      form.reset();
      setTimeout(() => { notice.textContent = original; notice.classList.remove("is-ok"); }, 5000);
    } catch (err) {
      notice.textContent = "Não foi possível assinar agora. Tente de novo.";
      notice.classList.add("is-error");
    }
  });
})();
