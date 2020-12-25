const arenaElem = document.querySelector('.arena');

const generateNumbersRange = (from, to) => {
  const result = [];

  for (let i = from; i <= to; i += 1) {
    result.push(i);
  }

  return result;
};

const getLineSeats = () => generateNumbersRange(1, 10)
    .map(seatNumber => `
      <div
        class="sector__seat"
        data-seat-number="${seatNumber}">
      </div>
    `).join('');

const getSectorLines = () => {
  const seatsStrings = getLineSeats();

  return generateNumbersRange(1, 10)
    .map(lineNumber => `
      <div
        class="sector__line"
        data-line-number="${lineNumber}">${seatsStrings}
      </div>
    `).join('');
}

const renderArena = () => {
  const lineStrings = getSectorLines();

  const sectorString = generateNumbersRange(1, 3)
    .map(
      sectorNumber => `
      <div
        class="sector"
        data-sector-number="${sectorNumber}">${lineStrings}
      </div>
  `).join('');

  arenaElem.innerHTML = sectorString;
};

const onSeatSelect = event => {
  const isSeat = event.target.classList.contains('sector__seat');

  if (!isSeat) {
    return;
  }

  const seatNum = event.target.dataset.seatNumber;
  const lineNum = event.target.closest('.sector__line').dataset.lineNumber
  const sectorNum = event.target.closest('.sector').dataset.sectorNumber;

  const selectedSeatElem = document.querySelector('.board__selected-seat');
  selectedSeatElem.textContent = `S ${sectorNum} - L ${lineNum} - S ${seatNum}`;

}

arenaElem.addEventListener('click', onSeatSelect);

renderArena();
