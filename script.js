/** @format */

const typeText = document.querySelector('.type-txt');

const textArray = [
  'Developer',
  'Web Developer',
  'Mobile App Developer',
  `Don't Know`
];
const typingDelay = 300;
const erasingDelay = 100;
const nextTextDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    typeText.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    setTimeout(erase, nextTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    typeText.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) {
      textArrayIndex = 0;
    }
    setTimeout(type, typingDelay);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  setTimeout(type, nextTextDelay);
});
