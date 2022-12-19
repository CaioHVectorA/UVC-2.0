function Character(Nome,Equipe,Descrição,Aparições,img) {
    this.nome = Nome;
    this.equipe = Equipe;
    this.desc = Descrição;
    this.Refs = Aparições;
    this.Img = img
}

const Beenie = new Character('Beenie','Guardiões','Beenie,também chamado de Telecinese,é o Líder dos guardiões.Ele é um astuto jovem que após ganhar seus poderes teve que ser maduro e racional para lidar com os problemas e as responsabilidades.Ele controla objetos com o poder da mente e tem um físico sobre-humano.',['Guardiões'],'Guardioes.png');
const Kerry = new Character('Kerry','Guardiões','Kerry,Após ter sua vida destruída pela gangue Tineros,ele passa por uma série de perrengues,até ser acolhido por um homem misterioso,que o treina e enigmaticamente o dá o poder de transformar sua pele em aço,então,ele destroí os Tineros.Posteriormente,ele é um pseudo-participante dos Guardiões.Além de poder se tornar aço,ele tem uma força sobrenatural que junto a camada de aço torna seus golpes fortíssimos e fatais.',['Kerry,seu próprio solo.','Guardiões','Menino Resiliente'],'Kerry.png')
const Inera = new Character("Inera",'Guardiões','Inera sempre foi uma atenciosa mãe e uma amiga de Beenie.Ela é uma esperta e líder quando necessária.Depois de ser raptada,ela ganhou o poder de Fogo.',['Guardiões'],'Guardioes.png')
const Alero = new Character("Alero",'Guardiões','Como um homem corajoso e forte,Alero é o pai de família.Ele é brincalhão,mas sério quando a hora pede.Ele absorveu o poder da eletricidade.',['Guardiões'],'Guardioes.png')
export const AllCharacters = [Beenie,Kerry,Inera,Alero]
console.log(AllCharacters)