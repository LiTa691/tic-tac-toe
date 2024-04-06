let fields = [
    null,
    null,
    'circle',
    null,
    null,
    null,
    'cross',
    null,
    null,
];

function init() {
    render()
}

function render() {
    const contentDiv = document.getElementById('content');

    let tableHTML = '<table>';
    for (let i = 0; i < 3; i++) {
        tableHTML += '<tr>';
        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            let symbol = '';
            if (fields[index] === 'circle') {
                symbol += generateCircleSVG(); // circle
            } else if (fields[index] === 'cross') {
                symbol += generateCrossSVG(); // cross
            }
            tableHTML += `<td>${symbol}</td>`;
        }
        tableHTML += '</tr>';
    }
    tableHTML += '</table>';
    contentDiv.innerHTML = tableHTML;
}

function generateCircleSVG() {
    // Kreisfarbe
    const color = "#00B0EF";
    const width = 70;
    const height = 70;

    // SVG-HTML-Code für den animierten Kreis
    const svgHtml = `
        <svg width="${width}" height="${height}">
            <circle cx="${width / 2}" cy="${height / 2}" r="${width / 2 - 2}" 
            fill="none" stroke="${color}" stroke-width="2">
                <animate attributeName="r" values="0; ${width / 2 - 2}" dur="2s" />
            </circle>
        </svg>
    `;

    return svgHtml;
}

function generateCrossSVG() {
    const color = '#FFC000';
    const width = 70;
    const height = 70;

    const svgHtml = `
      <svg width="${width}" height="${height}">
        <line x1="0" y1="0" x2="${width}" y2="${height}"
          stroke="${color}" stroke-width="5">
          <animate attributeName="x2" values="0; ${width}" dur="2s" />
          <animate attributeName="y2" values="0; ${height}" dur="2s" />
        </line>
        <line x1="${width}" y1="0" x2="0" y2="${height}"
          stroke="${color}" stroke-width="5">
          <animate attributeName="x2" values="${width}; 0" dur="2s" />
          <animate attributeName="y2" values="0; ${height}" dur="2s" />
        </line>
      </svg>
    `;

    return svgHtml;
}


