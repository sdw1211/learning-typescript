let geneticist = Math.random() ? 'Barbara McClintock' : undefined;

if(geneticist) {
    geneticist.toUpperCase();
}

geneticist.toUpperCase();

geneticist && geneticist.toUpperCase();
geneticist?.toUpperCase(); // 야는 null, undefined 만 체크한다.


let biologist = Math.random() > 0.5 && 'Rachel Carson';

if(biologist) {
    biologist.toUpperCase();
} else {
    biologist;
}

biologist && biologist.toUpperCase();
biologist?.toUpperCase(); // 야는 null, undefined 만 체크한다.
