//import TodoList from '../app/TodoList'

describe('ES6 Foo', function () {
  var data = { id: 3, title: "foo", description: "Description"}

  it('should return Do Something when calling doSomething', ()=>{
    expect(data.id).toBe(3);

    expect(data.title).toBe("boo");
  });
});

describe('Bar', function () {
  var data = { id: 3, title: "foo", description: "Description"}

  it('should return Do Something when calling doSomething', ()=>{
    expect(data.id).toBe(4);
  });
});
