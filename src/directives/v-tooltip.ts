export const vTooltip = {
  mounted(el: HTMLElement, binding: any, vnode: any, preVnode: any) {
    const tooltipContent = binding.value;

    const tooltipElement = document.createElement("span");
    tooltipElement.textContent = tooltipContent;
    Object.assign(tooltipElement.style, {
      padding: "6px 12px",
      color: "#FFFFFF",
      backgroundColor: "#333",
      borderRadius: "4px",
      position: "absolute",
      top: "calc(100% + 10px)",
      left: "50%",
    });

    el.style.position = "relative";

    el.appendChild(tooltipElement);
  },
};
