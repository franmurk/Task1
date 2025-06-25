class SectionImageText extends HTMLElement {
  constructor() {
    super();
    this.innerHTML = `
      <div class="image-text-section">
        <div class="image-text-section__image">
          <img src="assets/1440.png" alt="model" />
        </div>
        <div class="image-text-section__content">
          <div class="image-text-section__title">
            Handcrafted and responsibly sourced
          </div>
          <div class="image-text-section__description">
            On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain.
          </div>
          <button class="image-text-section__button">Learn more</button>
        </div>
      </div>
    `;

    this.section = this.querySelector('.image-text-section');
    this.desc = this.querySelector('.image-text-section__description');
    this.button = this.querySelector('.image-text-section__button');

    this.button.addEventListener('click', () => {
      this.desc.classList.toggle('image-text-section__description--hidden');
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            this.section.classList.add('image-text-section--visible');
          } else {
            this.section.classList.remove('image-text-section--visible');
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(this);

    this.desc.classList.add('image-text-section__description--hidden');
  }
}

customElements.define('section-image-text', SectionImageText);
