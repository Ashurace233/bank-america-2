(() => {
  const nav = document.getElementById("nav");
  const toggle = document.querySelector(".nav-toggle");

  if (nav && toggle) {
    const setOpen = (open) => {
      nav.dataset.open = open ? "true" : "false";
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    };

    setOpen(false);

    toggle.addEventListener("click", () => {
      const open = nav.dataset.open !== "true";
      setOpen(open);
    });

    document.addEventListener("click", (e) => {
      if (!nav.contains(e.target) && !toggle.contains(e.target)) setOpen(false);
    });
  }

  // Demo-only: prevent any "sign in" form from collecting or sending credentials.
  const demoSignin = document.querySelector("[data-demo-signin]");
  if (demoSignin) {
    demoSignin.addEventListener("submit", (e) => {
      e.preventDefault();
      const msg = document.getElementById("demo-signin-message");
      const loading = document.getElementById("demo-signin-loading");
      const submitButton = demoSignin.querySelector("button[type='submit']");
      const redirectTo = demoSignin.getAttribute("data-demo-redirect") || "./dashboard.html";
      const delayMs = Number(demoSignin.getAttribute("data-demo-delay-ms") || "2000");

      if (msg) {
        msg.hidden = true;
      }
      if (loading) {
        loading.textContent = "Signing in…";
        loading.hidden = false;
      }
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Signing in…";
      }

      // Simulated delay (demo-only) then redirect
      window.setTimeout(() => {
        try {
          window.sessionStorage.setItem("demoSignedIn", "true");
        } catch {
          // ignore
        }
        window.location.href = redirectTo;
      }, Number.isFinite(delayMs) ? delayMs : 2000);
    });
  }

  // Demo-only: feedback submission acknowledgement
  const demoFeedback = document.querySelector("[data-demo-feedback]");
  if (demoFeedback) {
    demoFeedback.addEventListener("submit", (e) => {
      e.preventDefault();
      const out = document.getElementById("demo-feedback-message");
      if (out) {
        out.textContent = "Submitted. Thanks for your feedback (demo only).";
        out.hidden = false;
      }
      const textarea = demoFeedback.querySelector("textarea[name='message']");
      if (textarea) textarea.value = "";
    });
  }

  // Demo-only: "sign out" clears the demo session flag
  const signOut = document.getElementById("demoSignOut");
  if (signOut) {
    signOut.addEventListener("click", () => {
      try {
        window.sessionStorage.removeItem("demoSignedIn");
      } catch {
        // ignore
      }
    });
  }

  // Presentation-only: dashboard delayed reveal
  const reveal = document.querySelector("[data-reveal-after-ms]");
  if (reveal) {
    const ms = Number(reveal.getAttribute("data-reveal-after-ms") || "2000");
    const loading = document.getElementById("pageLoading");
    const content = document.getElementById("pageContent");

    if (loading && content) {
      loading.hidden = false;
      content.hidden = true;
      window.setTimeout(() => {
        loading.hidden = true;
        content.hidden = false;
      }, Number.isFinite(ms) ? ms : 2000);
    }
  }
})();
