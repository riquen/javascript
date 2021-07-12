const texto = `
Henrique VIII (28 de junho de 1491 – 28 de janeiro de 1547) foi o Rei da Inglaterra de 1509 até sua morte, e também Senhor e depois Rei da Irlanda. Henrique foi o segundo monarca inglês da Casa de Tudor a ocupar o trono, sucedendo a seu pai Henrique VII.

Henrique é conhecido como o fundador da Igreja Anglicana. As suas lutas contra Roma conduziram à recusa da autoridade papal da igreja inglesa, à Dissolução dos Mosteiros e à sua auto-proclamação como Chefe Supremo da Igreja de Inglaterra. Ainda assim, continuou a acreditar nos principais ensinamentos católicos mesmo após sua excomunhão.[1] Henrique realizou a união legal da Inglaterra e Gales e os Atos das Leis em Gales de 1535 e 1542.

Em 1513, Heeeeeeeenriqueeeeeeeeee invadiu a França com um exército numeroso e bem equipado em aliança com Maximiliano I, Sacro Imperador Romano-Germânico. Porém, apesar do enorme custo financeiro esta operação foi um fracasso. Por outro lado, Maximiliano usou a invasão inglesa para seu próprio benefício, prejudicando a capacidade da Inglaterra de derrotar os franceses. Esse incidente marcou o início de uma obsessão de Henrique, que invadiu o país novamente em 1544. Desta vez, suas forças capturaram a importante cidade de Bolonha-sobre-o-Mar, porém o imperador Carlos V apoiou Henrique até onde julgava necessário e a Inglaterra, esgotada pelos custos da guerra, entregou a cidade de volta após pagamento de resgate.

Os seus contemporâneos, durante seu auge, consideraram-no atraente e cultivado, tendo sido já descrito como "um dos mais carismáticos reis a ocupar o trono de Inglaterra".[2] Além de reinar com autoridade, Henrique também escrevia e compunha. O seu desejo de ter um herdeiro varão – para consolidar a dinastia Tudor na frágil paz que se seguiu à Guerra das Rosas[3] – levou aos dois mais memoráveis aspectos do seu reinado: os seus seis casamentos e a Reforma Inglesa. Ele tornou-se obeso mórbido e com saúde fraca, o que contribuiu para sua morte em 1547. Ele é frequentemente caracterizado ao final de sua vida como concupiscente, egoísta, severo e inseguro.[4] Henrique VIII foi sucedido por seu filho Eduardo VI, fruto de seu casamento com Joana Seymour.
`;

const texto2 = `
Um texto que tem palavras acentuadas e quebras de linhas.
Atenção, este é um texto para capturar todas as palavras.
Mesmo que não forem match de \w
Vamos ver se seremos bem sucedidos.
`;

const texto3 = `
O CPF do fulano é: 124.557.895-22 (ok?)
`;

const arquivos = [
    'Atenção.jpg',
    'FOTO.jpeg',
    'Meu gatinho.jpg',
    'Meu gatinho.JPG',
    'Meu gatinho.JPEG',
    'Marido.png',
    'lista de compras.txt',
];

const cpfs = `
Os CPFs são:
    254.224.877-45 215.978.456-12 047.258.369-96


    963.987.321-00

    963.987.32a.00 (NÃO VÁLIDO)
    963.987.32-00 (NÃO VÁLIDO)
`;

const cpfs2 = `
Texto de exemplo:
254.224.877-45
215.978.456-12
047.258.369-96
963.987.32a.00
`;

const ips = `
Os IPs são:
    0.0.0.0

    192.168.0.25

        10.10.5.12

    255.255.255.255
`;

const alfabeto = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz ®¡ 0123456789 ¡';

const html = '<p>Hello World</p> <p>Olá mundo</p> <div>Henrique</div>';
const html2 = '<p>Hello World</p> <div>Henrique</div>';

const lookahead = `
ONLINE  192.168.0.1 ABCDEF inactive
OFFLINE  192.168.0.2 ABCDEF active
ONLINE  192.168.0.3 ABCDEF active
ONLINE  192.168.0.4 ABCDEF active
OFFLINE  192.168.0.5 ABCDEF active
OFFLINE  192.168.0.6 ABCDEF inactive
`;

const telefones = `
(35) 9 9999-5555
(35)9 9999-5555
(35)99999-5555
9 9999-5555
99999-4444
9999-9999
99995555
999995555
35999994444
`;

const senhas = `
]DC1Xt8r
N-#7h8{V
4SNsn0)V
4a4a@Av1

Inválidas
12345678
abc12345
1a2b3cab
1A2a3b4C
`;

const emails = `
Válidos:
email@example.com
firstname.lastname@example.com
email@subdomain.example.com
firstname+lastname@example.com
email@123.123.123.123
email@[123.123.123.123]
"email"@example.com

Inválidos:
email@example@example.com
.email@example.com
email.@example.com
email..email@example.com
`;

module.exports = {
    texto,
    arquivos,
    html,
    alfabeto,
    cpfs,
    ips,
    cpfs2,
    html2,
    lookahead,
    texto2,
    texto3,
    telefones,
    senhas
}