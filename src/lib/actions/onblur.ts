export function onblur(node: HTMLElement, callback: () => void) {
	window.addEventListener('blur', callback);

	return {
		destroy() {
			window.removeEventListener('blur', callback);
		}
	};
}
