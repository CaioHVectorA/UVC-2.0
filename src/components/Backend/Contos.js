function Hist(...Args) {
    this.nome = Args[0]
    this.local = Args[1].toUpperCase()
    this.tipo = Args[2].toUpperCase()
    this.desc = Args[3]
    this.img = '/img/' + Args[4]
    this.ref = Args[5]
}

const Kerry = new Hist(
    'Kerry',
    'terra',
    'solo',
    'O Sistema destruiu a vida de Kerry. Mas quando ele se levanta,seu único desejo é a vingança.',
    'Kerry.png',
    'S_KER',
    ['Drama','Terra','Ação','Violência']
)

const MR1 = new Hist(
    'Menino Resiliente I',
    'terra',
    'serie',
    'Acompanhe a história do guardião substituto,que ganhou seus poderes em meio a desastres que mudaram toda sua vida.',
    'MRsmall.png',
    'SE_MR1',
    ['Drama','Terra','Ação','Teen']
)

var AllContos = [Kerry,MR1]
export default AllContos
