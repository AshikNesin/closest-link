"use strict";
// Polyfill - https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
if (window.Element && !Element.prototype.closest) {
	Element.prototype.closest = function(s) {
		var matches = (this.document || this.ownerDocument).querySelectorAll(s),
			i,
			el = this;
		do {
			i = matches.length;
			while (--i >= 0 && matches.item(i) !== el) {
			}
		} while (i < 0 && (el = el.parentElement));
		return el;
	};
}

function findClosestLink(targetElement) {
	return targetElement.closest("a");
}

module.exports = el => {
	if (typeof el !== "object") {
		throw new TypeError(`Expected a DOM object, got ${typeof el}`);
	}
	return findClosestLink(el);
};
