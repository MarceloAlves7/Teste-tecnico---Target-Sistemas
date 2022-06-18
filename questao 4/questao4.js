//Os veiculos estão a uma mesma distância da cidade de ribeirão preto, pois é apartir do cruzamento dos dois.
// Fiz um codigo para calcular qual foi a distancia percorrida por ambos os veiculos até o ponto de cruzamento.



// caminhao
const CAMINHAO = {
    velocidade: 80, // km
    tempoDeEspera: 10, // minuto
};

const CARRO = {
    velocidade: 110, // km
    tempoDeEspera: 0, // minuto
};

const DISTANCIA_ENTRA_CIDADES = 100; // km

function getDistanciasPercorridasNoEncontro(
    carroA,
    carroB,
    distanciaEntreCarros
) {
    const velocidadeA = kmPorHorasParaMetroPorSegundos(carroA.velocidade);
    const velocidadeB = kmPorHorasParaMetroPorSegundos(carroB.velocidade);

    const distanciaEmMetos = kmParaMetros(distanciaEntreCarros);

    const tempoDeEncontroSegudos =
        (distanciaEmMetos +
            velocidadeB * carroB.tempoDeEspera +
            velocidadeA * carroA.tempoDeEspera * 60) /
        (velocidadeA + velocidadeB);

    return {
        distanciaA: metrosParaKm(tempoDeEncontroSegudos * velocidadeA), // km
        distanciaB: metrosParaKm(tempoDeEncontroSegudos * velocidadeB), // km
    };
}

function kmParaMetros(distancia) {
    return distancia * 1000;
}

function metrosParaKm(distancia) {
    return distancia / 1000;
}

function kmPorHorasParaMetroPorSegundos(velocidade) {
    return velocidade / 3.6;
}

function mostrarCarroMaisPerto() {
    const { distanciaA, distanciaB } = getDistanciasPercorridasNoEncontro(
        CAMINHAO,
        CARRO,
        DISTANCIA_ENTRA_CIDADES
    );

    if (distanciaA > distanciaB) {
        console.log(
            `Caminhão (${distanciaA} km percorridos) percorreu mais KM do que o Carro (${distanciaB} km percorridos)`
        );
    } else {
        console.log(
            `Carro (${distanciaB} km percorridos) percorreu mais KM do que o Caminhão (${distanciaA} km percorridos)`
        );
    }
}

mostrarCarroMaisPerto();

