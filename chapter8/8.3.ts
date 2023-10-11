class Teacher {
    sayHello() {
        console.log('wqdqwdwqdwq');
        return 100;
    }
}

let teacher: Teacher;

teacher = new Teacher();
teacher = 'wqdqwdwqdwqd';

// 동일한 맴버를 가지고 있기 때문에 가능
teacher = {
    sayHello() {
        console.log('qwdqwdqwdqwd');
    }
}

teacher = {
    sayHello() {
        console.log('qwdqwdqwdqwd');
        return 44444;
    }
}

class SchoolBus {
    getAbilities() {
        return ['', ''];
    }
}

function withSchoolBus(bus: SchoolBus) {
    console.log(`${bus.getAbilities()}`);
}

withSchoolBus(new SchoolBus());
withSchoolBus({
    getAbilities: () => ['333', '4444']
});
withSchoolBus({
    getAbilities: () => 1222
});

export {};