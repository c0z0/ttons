const tagMedia = (q: TemplateStringsArray) => `@media screen and (${q[0]})`;

const phoneOnly = tagMedia`max-width: 992px`;
const tabletUp = tagMedia`min-width: 992px`;
const desktopUp = tagMedia`min-width: 1200px`;
const bigDesktopUp = tagMedia`min-width: 1800px`;

export {
  phoneOnly, tabletUp, desktopUp, bigDesktopUp,
};
