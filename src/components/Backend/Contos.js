function Hist(...Args) {
    this.nome = Args[0]
    this.local = Args[1].toUpperCase()
    this.tipo = Args[2].toUpperCase()
    this.desc = Args[3]
    this.img = '/img/' + Args[4]
    this.ref = Args[5]
    this.tipoimg = Args[7]
}

const Kerry = new Hist(
    'Kerry',
    'terra',
    'solo',
    'O Sistema destruiu a vida de Kerry. Mas quando ele se levanta,seu único desejo é a vingança.',
    'Kerry.png',
    'S_KER',
    ['Drama','Terra','Ação','Violência'],
    'Normal'
)

const MR1 = new Hist(
    'Menino Resiliente I',
    'terra',
    'serie',
    'Acompanhe a história do guardião substituto,que ganhou seus poderes em meio a desastres que mudaram toda sua vida.',
    'MeninoResiliente.png',
    'SE_MR1',
    ['Drama','Terra','Ação','Teen'],
    'Normal'
)

const Hades = new Hist(
    'Hades',
    'Universal',
    'Solo',
    'Veja os objetivos malignos e a origem do grandioso e temido Hades,conhecido como o Demônio.',
    'Hades.png',
    'S_HAD',
   ["Drama","Universal","Ação","Violência"],
   'Normal'
)

const Ciecon = new Hist(
    'Ciecon',
    'Universal',
    'Solo',
    'Entenda origem de Ciecon, o homem que ganhou um poder sobrenatural de forma abrupta e decide se tornar um Justiceiro Espacial.',
    'Ciecon.png',
    'S_CIEC',
    ["Drama","Universal","Ação"],
    'Full'
)
const Cong = new Hist(
    'Congregadores',
    'Universal',
    'Serie',
    'Congregadores é a equipe que promete defender a todos dos maléficos e soberanos a todo custo,pelo bem,ou pelo mal.',
    'Cong.png',
    'SE_CONG',
    ["Universal","Sci-fi","Ação","Equipe"],
    'Full'
)

const Guard = new Hist(
    'Guardiões',
    'Terra',
    'Serie',
    'Se aprofunde na história da nascença dos lendários heróis de Beatus.',
    'Guardioes.png',
    'SE_GUA',
    ["Terra","Drama","Ação","Equipe"],
    'Full'
)
var AllContos = [Kerry,MR1,Hades,Ciecon,Cong,Guard]
export default AllContos
