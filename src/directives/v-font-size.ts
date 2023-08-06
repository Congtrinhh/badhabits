export const vFontSize = (el: HTMLElement, binding: any) => {
  const fontSize = binding.value;
  el.style.fontSize = fontSize + "px";
};
