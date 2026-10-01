// These small, local previews do not connect to Telegram or change app settings.
const gridButtons = document.querySelectorAll('[data-columns][type="button"]');
const grid = document.querySelector('#demo-grid');
gridButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const columns = button.dataset.columns;
    grid.dataset.columns = columns;
    grid.scrollTop = 0;
    gridButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelector('#grid-status').textContent = `Layout preview · ${columns} ${columns === '1' ? 'column' : 'columns'}`;
  });
});

const retentionButtons = document.querySelectorAll('[data-retention]');
retentionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const retention = button.dataset.retention;
    retentionButtons.forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    document.querySelector('#retention-value').textContent = retention;
    document.querySelector('#retention-status').textContent = retention === 'Off'
      ? 'Preview · automatic cleanup is off.'
      : `Preview · watched cache expires after ${retention}.`;
  });
});

const dialog = document.querySelector('#preview-dialog');
const video = document.querySelector('#preview-video');
let previewTrigger;
document.querySelectorAll('[data-open-preview]').forEach((button) => {
  button.addEventListener('click', () => {
    previewTrigger = button;
    dialog.showModal();
    document.body.classList.add('modal-open');
    // Native controls remain available if the browser declines autoplay.
    video.play().catch(() => {});
  });
});
document.querySelector('#close-preview').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', (event) => {
  if (event.target !== dialog) return;
  const box = dialog.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) dialog.close();
});
dialog.addEventListener('close', () => {
  video.pause();
  document.body.classList.remove('modal-open');
  previewTrigger?.focus({ preventScroll: true });
});
