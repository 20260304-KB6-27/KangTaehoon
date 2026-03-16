function addContact(name, mobile, home, address, email) {
    if (name === undefined) name = '없음';
    if (mobile === undefined) mobile = '없음';
    if (home === undefined) home = '없음';
    if (address === undefined) address = '없음';
    if (email === undefined) email = '없음';
    console.log(
        `name=${name}\,mobile=${mobile}\,home=${home}\,address=${address}\,email=${email}`,
    );
}
addContact('홍길동', '010-222-3331');
addContact('이몽룡', '010-222-3331', '02-3422-9900', '서울시');
