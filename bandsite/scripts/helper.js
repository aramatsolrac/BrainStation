'use strict';

// utility to build DOM elements with classes and text content
function createElement(element, className = null, text = null) {
    const newElement = document.createElement(element);
    if (text) newElement.textContent = text;
    if (className) newElement.classList.add(className);
    return newElement;
}

// function to convert timestamp to date format
const defaultDateOptions = { year: 'numeric', month: 'short', day: '2-digit', timeZone: 'UTC' };

function formatDate(date, newOptions = {}) {
    const options = {
        ...defaultDateOptions,
        ...newOptions,
    };

    return new Date(Number(date)).toLocaleDateString("en-US", options).replace(',', '');
};