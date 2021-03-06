export const scrollIntoViewOfAnchor = (hash: string): void => {
  let target = document.querySelector<HTMLElement>(hash);
  if (!target) {
    return;
  }

  const scrollIntoView = target.scrollIntoView;
  if (typeof scrollIntoView === "function") {
    target.scrollIntoView(true);
  } else {
    let top = 0;
    while (target) {
      top += target.offsetTop;
      target = target && (target.offsetParent as HTMLElement);
    }
    window.scrollTo(0, top);
  }

  window.history.pushState(null, "", hash);
};
