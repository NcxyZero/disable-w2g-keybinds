// ==UserScript==
// @name         Disable w2g keybinds
// @version      1.0
// @description  Disable all w2g keybinds
// @author       NoxyZero
// @match        https://w2g.tv/*
// @grant        none
// ==/UserScript==
const binds = [75, 39, 37, 32, 70, 78, 83, 84, 85, 27]

document.addEventListener('keydown', e => {
	const key = binds.find((element) => element == e.which)

    	if (key) {
      		e.stopImmediatePropagation()

      		const field = document.activeElement
      		if (field.tagName !== 'TEXTAREA' && field.tagName !== 'INPUT') {

        	e.preventDefault()
      		}
   	}
}, { capture: true })

