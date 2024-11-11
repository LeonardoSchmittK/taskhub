const { removeDuplicates } = require("../controllers/projectsControl");
const models = require("../models/model");
const Comment = models.Comment;

// EU MUDEI A FUNÇÃO ORIGINAL
test("Testando a função de remover duplicados de um array.", () => {
  const arr = [
    { id: 1, name: "Mat" },
    { id: 1, name: "Mat" },
  ];
  expect(removeDuplicates(arr)).toEqual([{ id: 1, name: "Mat" }]);
});
