interface Data {
  route: string;
  title: string;
  mins: string;
  id: number;
}
type Sample = [string, number, number, number, number];

const sample = [['296C', 'Sheung Tak', 'Cheung Sha Wan Bus Station', 1]];

function createData(
  id: number,
  route: string,
  destination: string,
  station: string,
  mins: number
): Data {
  return {
    id,
    route,
    title: `To: ${destination} ${station}`,
    mins: `${mins.toString()} mins`,
  };
}

export const rows: Data[] = [];

for (let i = 0; i < 200; i += 1) {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  rows.push(createData(i, ...randomSelection));
}
