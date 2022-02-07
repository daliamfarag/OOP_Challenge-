const { Engineer } = require("../lib")

test("Creates an Engineer object and checks if constructor assigns arguments to the correct properties.", () => {
  const engineer = new Engineer(
    "Dalia Farag",
    0,
    "daliamfarag88@gmail.com",
    "daliamfarag"
  )

  expect(engineer.name).toEqual(expect.any(String))
  expect(engineer.name.length).toBeGreaterThan(0)

  expect(engineer.id).toEqual(expect.any(Number))

  expect(engineer.email).toEqual(expect.any(String))
  expect(engineer.email.length).toBeGreaterThan(0)

  expect(engineer.github).toEqual(expect.any(String))
  expect(engineer.github.length).toBeGreaterThan(0)
})

test("Checks that static methods return the correct values.", () => {
  const engineer = new Engineer("Dalia Farag", 0, "name@email.com")

  expect(engineer.getName()).toEqual(engineer.name)
  expect(engineer.getId()).toEqual(engineer.id)
  expect(engineer.getRole()).toEqual(engineer.role)
  expect(engineer.getGithub()).toEqual(engineer.github)
})
