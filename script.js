const buttons = document.querySelectorAll('input[type="button"]');
const infoDiv = document.getElementById('info');
const motivationButton = document.getElementById('motivation-button');

const motivationalPhrases = [
    "O sucesso é a soma de pequenos esforços repetidos dia após dia.",
    "Acredite em você mesmo e todo o resto se encaixa.",
    "A jornada de mil milhas começa com um único passo.",
    "Se você quer algo que nunca teve, você precisa fazer algo que nunca fez.",
    "A persistência é o caminho do êxito.",
];

buttons.forEach(button => {
    button.addEventListener('click', () => {
        let name = button.id;
        let info = '';

        if (name === 'Emanuel') {
            info = 'Emanuel é o programador do trabalho.';
        } else if (name === 'Rafael') {
            info = 'Rafael é o criador dos slides.';
        } else if (name === 'Enzo') {
            info = 'Enzo é o criador dos slides.';
        }

        infoDiv.textContent = info;
    });
});

motivationButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * motivationalPhrases.length);
    infoDiv.textContent = motivationalPhrases[randomIndex];
});
