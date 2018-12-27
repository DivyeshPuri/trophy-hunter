import SCORES from '../scores';
import { TWISTED_TREELINE } from '../types';

const flail = {
  name: 'flail',
  title: 'Flail',
  description:
    'Use your gold efficiently. Have highest damage to champions output per gold. (Twisted Treeline: 20% higher damage per gold than the next player).',
  svgPath:
    'M157.536 14.885c-7.895.044-15.766 1.753-22.812 5.17-4.184 2.029-7.855 5.023-10.563 8.752a28.094 28.094 0 0 0-1.691-.154 29.198 29.198 0 0 0-6.975.447c-17.601 3.257-33.382 16.254-39.95 32.906-2.143 5.435-2.662 11.442-1.198 17.084a29.476 29.476 0 0 0-2.957 3C59.786 95.72 55.74 115.76 61.15 132.823c1.583 4.995 4.47 9.524 8.437 12.898-2.69 17.558 4.225 36.588 17.59 48.29a29.244 29.244 0 0 0 5.42 3.751c-.262 1.3-.447 2.62-.532 3.95-.018.296-.027.593-.04.89l17.913 13.006c-1.439-4.37-2.164-8.83-1.906-12.881.039-.603.21-1.275.434-1.963a25.133 25.133 0 0 0 5.133-1.256 24.917 24.917 0 0 0 8.812-5.455c.722.272 1.374.593 1.893.965 9.29 6.664 16.246 21.344 15.52 32.754-.14 2.171-1.658 5.117-3.317 7.127l13.277 9.64c3.611-4.449 5.64-10.014 6.006-15.75v-.001c1.137-17.864-7.615-36.34-22.16-46.772a29.456 29.456 0 0 0-3.46-2.125c.105-.485.203-.97.282-1.46 2.811-17.362-3.828-36.227-16.834-48.065 5.324-11.395 6.711-24.748 3.522-36.854 10.306-4.818 19.168-12.943 24.71-22.842 11.981 4.36 25.644 4.433 37.575.032a56.285 56.285 0 0 0 2.931 5.078l13.428-9.36a46.072 46.072 0 0 1-2.615-4.746c3.486-4.089 5.759-9.222 6.078-15.058a24.948 24.948 0 0 0-1.025-8.578c.343-.017.686-.038 1.039-.034 2.075.025 4.237.408 5.635 1.184 4.699 2.608 9.076 7.045 12.472 12.191l13.42-9.353c-4.674-6.927-10.88-12.807-18.127-16.828-4.101-2.277-8.706-3.563-13.355-3.614a25.067 25.067 0 0 0-11.176 2.479 29.639 29.639 0 0 0-1.727-1.182c-7.58-4.76-16.473-7.419-25.484-7.912a56.263 56.263 0 0 0-3.383-.084zm.649 16.342c6.538.098 13.14 1.586 18.27 4.371-2.127 4.294-3.062 9.132-2.811 13.955a49.76 49.76 0 0 0 .675 5.93c-8.186 2.972-19.017 2.822-27.59-.203.267-6.107-1.486-12.277-5.712-17.408a25.413 25.413 0 0 0-1.584-1.739c.746-.721 1.524-1.32 2.271-1.681 3.858-1.87 8.551-2.914 13.42-3.168a45.655 45.655 0 0 1 3.06-.057zm-38.817 13.512c.308 7.11 3.59 13.374 8.541 17.947-4.046 6.89-11.205 13.193-18.701 16.664-3.338-3.21-7.55-5.557-12.482-6.553a25.331 25.331 0 0 0-3.684-.466 24.812 24.812 0 0 0-3.143.035c-.082-1.663.063-3.302.532-4.49 4.194-10.636 16.732-20.964 27.974-23.044.3-.055.626-.08.963-.093zm114.418 14.7l-36.834 25.67 25.776 36.643 36.832-25.67-25.774-36.642zM83.382 92.705c5.295 4.06 11.868 5.706 18.35 5.195 1.827 7.68.695 17.308-2.631 25.191a25.169 25.169 0 0 0-5.455-.306c-2.372.128-4.77.597-7.147 1.453a24.937 24.937 0 0 0-9.102 5.719c-.433-.67-.797-1.34-.996-1.967-3.423-10.803-.291-26.531 6.98-35.285zm185.385 16.464l-36.836 25.67 202.152 287.389c16.044-4.381 26.872-13.822 36.592-26.014L268.767 109.168zm-164.315 34.653c7.388 8.012 11.88 21.705 10.205 32.052a6.868 6.868 0 0 1-.26 1.018 24.96 24.96 0 0 0-14.027 6.602c-1.042-.424-1.983-.932-2.654-1.52-7.666-6.711-12.853-19.574-12.602-30.283 7.402.23 14.248-2.858 19.338-7.87zm109.809 56.125l-32.358 40.008c11.434 1.45 22.812 4.794 33.713 10.152l-1.355-50.16zm-132.4 14.802l21.052 90.711c21.548 5.7 50.394-10.025 53.865-35.427l-22.441-16.56c.142-.024.285-.04.428-.065l-32.147-23.342-20.758-15.316zm85.683 36.325c-4.88.042-9.731.462-14.512 1.242 5.45 3.805 8.178 5.902 16.334 11.348l-.215 3.914c-1.938 37.127-42.47 59.73-73.384 48.263l-3.032-1.119-.73-3.152-3.865-16.63a97.082 97.082 0 0 0-4.916 8.67C59.58 350.683 78.51 407.838 125.57 431.476a97.273 97.273 0 0 0 7.399 3.336l-11.721-24.957-1.377-2.938 1.693-2.744c14.587-23.775 48.909-33.238 74.975-20.308a53.057 53.057 0 0 1 16.385 12.63l2.15 2.43-.877 3.131-8.863 32.09c20.149-8.492 37.491-23.932 48.094-45.041a95.956 95.956 0 0 0 6.7-17.32l-5.167 3.894-2.572 1.944-3.05-1.084c-31.07-11.03-47.65-54.369-25.32-84.094l2.526-2.303 2.63-.094 16.755 1.028c-8.716-12.248-20.463-22.612-34.85-29.838l-.002-.002c-14.001-7.033-28.896-10.29-43.535-10.162zm-94.865 46.79l-55.323 3.005 44.358 33.937a106.829 106.829 0 0 1 10.785-36.582c.06-.12.12-.24.182-.36h-.002zm159.24 4.385c-13.636 21.718-1.562 52.29 18.627 61.733l74.324-56.08-92.951-5.653zm-60.53 88.221c-14.845.025-29.662 6.595-37.786 17.46l41.896 89.187 26.195-94.899c-3.215-3.134-6.79-5.678-10.668-7.513-6.134-2.905-12.888-4.246-19.636-4.235zm89.089 10.707a106.498 106.498 0 0 1-25.391 29.09l51.707 20.29-26.316-49.38zM80.27 407.553l-21.922 55.942 51.3-27.373a106.398 106.398 0 0 1-29.378-28.569zm399.925 2.195c-9.482 10.994-21.087 20.68-36.472 26.184l14.078 20.014c17.865-2.03 29.077-10.407 36.842-25.658l-14.448-20.54z',
  score: SCORES.EASY,
  obtainedCheck: ({ match, trophiesCategory }) => {
    if (trophiesCategory === TWISTED_TREELINE)
      return (
        match.participant.stats.damagePerGold >= 1.2 * match.participant.stats.others.damagePerGold
      );

    return match.participant.stats.mostDamagePerGold;
  },
  context: 'matches',
  attribute: 'power'
};

export default flail;