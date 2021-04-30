const fs = require('fs');
const raw = fs.readFileSync('./knihy.txt', 'utf8');

const iknihy = raw.split(/[\r\n]+/g).map(a=>a.trim()).filter(a=>a);
const oknihy = [];

for (let i=0; i < iknihy.length; ++i) {
	const kniha = iknihy[i];
	oknihy.push(kniha.replace(/^([0-9]+) ([^\:]+)\: (.+)/, `<tr><td>${i+1}.</td><td>$1.</td><td>$2</td><td>$3</td></tr>`));
}

const out = `<table>
<tr>
	<th></th>
	<th>Př. č</th>
	<th>Autor</th>
	<th>Dílo</th>
</tr>
${oknihy.join('\n')}
</table>`;
fs.writeFileSync('./knihy.html', out);
