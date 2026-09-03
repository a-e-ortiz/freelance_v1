document.addEventListener('alpine:init', () => {
  Alpine.data('contactForm', () => ({
    values: {
      name: '',
      company: '',
      email: '',
      need: '',
      timeline: '',
    },
    errors: {},
    sending: false,
    submitted: false,

    validate() {
      this.errors = {};

      if (!this.values.name) {
        this.errors.name = 'Please enter your name.';
      }

      if (!this.values.email) {
        this.errors.email = 'Please enter your email.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.values.email)) {
        this.errors.email = 'Please enter a valid email address.';
      }

      if (!this.values.need) {
        this.errors.need = 'Please tell me a little about what you need.';
      }

      if (!this.values.timeline) {
        this.errors.timeline = 'Please choose a rough timeline.';
      }

      return Object.keys(this.errors).length === 0;
    },

    async submit() {
      if (!this.validate()) return;

      this.sending = true;

      try {
        // TODO: this is a placeholder endpoint. Point it at a real form handler
        // (e.g. Formspree, a Netlify/Cloudflare function, or a custom backend)
        // before this site goes live.
        await fetch('https://forms.example.com/TODO-replace-with-real-endpoint', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(this.values),
        });
      } catch (err) {
        // Expected to fail until a real endpoint is wired up above.
      } finally {
        this.sending = false;
        this.submitted = true;
      }
    },
  }));
});
