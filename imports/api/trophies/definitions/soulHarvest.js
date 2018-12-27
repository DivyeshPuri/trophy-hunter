import SCORES from '../scores';

const soulHarvest = {
  name: 'soulHarvest',
  title: 'Soul Harvest',
  description: 'Deal more than 3000 damage with dark harvest (rune).',
  svgPath:
    'M259.646 33.586c-44.698 10.116-96.576 26.075-141.98 42.926-42.563 15.796-79.721 32.796-97.816 44.22l28.634 40.006C85.45 141.836 163.58 106.833 258.87 78.725c.115-12.307.426-26.651.777-45.14zm-.755 63.922c-89.553 26.838-163.813 59.876-199.809 78.035l11.363 15.877c64.955-26.867 129.99-52.813 189.244-73.865-.436-6.558-.686-13.057-.798-20.047zm10.861 35.584c-63.467 22.407-134.187 50.745-204.494 79.949l-.063-.148c-22.345 11.147-36.325 23.22-47.084 35.552 3.174.194 6.684.262 10.803-.04 11.524-.847 26.29-3.532 42.982-7.69 33.387-8.316 74.56-22.461 115.413-38.873 40.852-16.412 81.444-35.104 113.841-52.438 20.416-10.922 37.096-21.52 48.778-30.168-27.24-.104-57.425 6.306-80.176 13.856zm18.371 43.3a1084.226 1084.226 0 0 1-16.488 8.057c6.635 4.076 11.482 10.968 14.367 18.592 3.944 10.42 4.892 22.894 2.566 35.8-2.325 12.907-7.527 24.049-14.789 32.046s-17.434 13.233-28.275 10.888c-10.842-2.344-18.433-11.423-22.377-21.843-3.944-10.42-4.894-22.894-2.568-35.801 1.264-7.02 3.387-13.512 6.222-19.266a1358.468 1358.468 0 0 1-32.761 13.678 1248.826 1248.826 0 0 1-43.65 16.613c11.354 20.924 27.32 38.077 51.366 50.307l9.17 4.664-5.842 8.469c-8.506 12.333-6.783 30.624 1.875 43.974 8.659 13.35 21.871 20.897 38.64 14.395 59.434-23.047 104.228-28.81 145.775-21.113 34.839 6.454 67.127 22.398 103.834 43.81-12.425-28.256-33.968-57.384-60.729-82.209-33.985-31.525-76.04-56.09-116.33-64.65l-5.635-1.198-1.271-5.617c-.802-3.538-8.001-29.713-23.1-49.595zm-29.527 22.372c-2.798.11-6.202 1.744-9.908 5.826-4.563 5.024-8.733 13.374-10.53 23.348-1.796 9.973-.835 19.436 1.643 25.982 2.477 6.546 5.817 9.469 8.896 10.135 3.08.666 7.182-.646 11.744-5.67 4.563-5.024 8.735-13.377 10.532-23.35 1.796-9.973.833-19.436-1.645-25.982-2.478-6.547-5.817-9.469-8.896-10.135a7.293 7.293 0 0 0-1.836-.154zm-125.414 42.4c-18.266 6.199-35.82 11.553-51.98 15.748-4.18 24.009 9.737 55.444 19.53 71.184 36.172 26.058 68.19 52.072 126.23 70.021l-4.89-22.824c-12.567-3.576-23.285-12.214-30.234-22.93-10.383-16.01-14.055-37.249-6.25-55.41-23.92-14.166-40.703-33.554-52.406-55.789zm-56.55 92.08c-9.031 13.247-23.97 18.894-37.823 21.772 15.285 25.397 49.541 49.906 93.216 72.103 41.305 20.993 90.376 40.17 138.215 58.6-11.892-19.381-20.046-40.812-22.304-63.33-86.163-20.547-125.096-57.285-171.303-89.145zm-27.696 61.57C36.052 424.224 26.8 455.703 25.279 487h198.588c-34.824-13.775-69.286-28.225-99.998-43.834-29.2-14.84-55.252-30.589-74.933-48.352z',
  score: SCORES.MEDIUM,
  obtainedCheck: ({ match }) =>
    match.participant.stats.perk0 === 8128 && match.participant.stats.perk0Var1 >= 3000,
  context: 'matches',
  attribute: 'power',
  runeId: 8128
};

export default soulHarvest;