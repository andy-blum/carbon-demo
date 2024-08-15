(async () => {
  await Promise.all([
    customElements.whenDefined('bx-tabs'),
    customElements.whenDefined('bx-tab')
  ]);

  const tabs = document.querySelector('bx-tabs');
  console.log(tabs);


  tabs.addEventListener('bx-tabs-beingselected', (e) => {
    const {
      detail: {
        item
      }
    } = e;

    const target = document.getElementById(item.target);
    const {
      color,
      shape
    } = target.dataset;

    const bg = target.closest('.spotlight').querySelector('.tab-background .tab-media');
    bg.style.backgroundColor = color;
    bg.style.borderRadius = shape;
  })
})();
