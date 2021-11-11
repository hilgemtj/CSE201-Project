var user = new User("username", "email@email.com", "password");
Database.add(user);

test('checks user constructor', () => {
	expect(new User("username", "email@email.com", "password")).toStrictEqual(user);
});

test('checks send to database', () => {
	expect(Database.contains(user)).toStrictEqual(true);
});

test('checks return to database', () => {
	expect(Database.get).toStrictEqual(username);
});

test('checks getting by email', () => {
	expect(Database.getUserEmail("email@email.com")).toStrictEqual(new User("username", "email@email.com", "password"));
});

test('checks getting by username', () => {
	expect(Database.getUserUsername("username")).toStrictEqual(new User("username", "email@email.com", "password"));
});

test('checks password', () => {
	expect(Database.checkPassword("username", "password")).toStrictEqual(true);
});

test('checks password', () => {
	expect(Database.checkPassword("username", "notpassword")).toStrictEqual(false);
});
