function Hist(...Args) {
    this.nome = Args[0]
    this.local = Args[1].toUpperCase()
    this.tipo = Args[2].toUpperCase()
    this.desc = Args[3]
    this.img = '/img/' + Args[4]
}

const Kerry = new Hist(
    'Kerry',
    'terra',
    'solo',
    'O Sistema destruiu a vida de Kerry. Mas quando ele se levanta,seu único desejo é a vingança.',
    'Kerry.png'
)

var AllContos = [Kerry]
export default AllContos
