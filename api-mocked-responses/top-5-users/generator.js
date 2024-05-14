const faker = require('faker');
const fs = require('fs');

// Função para gerar dados aleatórios
function generateData(count) {
  const data = [];
  for (let i = 0; i < count; i++) {
    const citizen = {
      name: faker.name.firstName() + ' ' + faker.name.lastName(),
      area: faker.random.arrayElement(['IT', 'Finance', 'Healthcare', 'Education', 'Engineering', 'Music', 'TV']),
      occupation: faker.name.jobTitle(),
      city: faker.address.city(),
      state: faker.address.state(),
      country: faker.address.country(),
      group: faker.company.companyName()
    };
    data.push(citizen);
  }
  return data;
}

// Função para converter os dados em formato CSV
function convertToCSV(data) {
  const headers = Object.keys(data[0]).join(',') + '\n';
  const rows = data.map(obj => Object.values(obj).join(',')).join('\n');
  return headers + rows;
}

// Número de cidadãos que você deseja gerar
const numberOfCitizens = 10;

// Gerar dados
const generatedData = generateData(numberOfCitizens);

// Converter para CSV
const csvData = convertToCSV(generatedData);

// Escrever dados em um arquivo CSV
fs.writeFile('citizens_data.csv', csvData, err => {
  if (err) {
    console.error('Erro ao escrever o arquivo CSV:', err);
    return;
  }
  console.log('Arquivo CSV gerado com sucesso!');
});
