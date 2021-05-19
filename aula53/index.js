function recursiva(max) {
    console.log(max);
    if (max >= 10) return;
    max += 2;
    recursiva(max);
}
recursiva(0);

function* geradora1() {
    yield 'Valor 1';
    yield 'Valor 2';
    yield 'Valor 3';
}
const g1 = geradora1();
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().value);

function* geradora2() {
    yield 1;
    yield 2;
    yield 3;
}

function* geradora3() {
    yield* geradora2();
    yield 4;
    yield 5;
    yield 6;
}
const g3 = geradora3();
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);
console.log(g3.next().value);

function* geradora4() {
    yield function() {
        console.log('Y1');
    };
    yield function() {
        console.log('Y2');
    };
}
const g4 = geradora4();
const func1 = g4.next().value;
const func2 = g4.next().value;
func1();
func2();