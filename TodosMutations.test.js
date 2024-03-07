describe("Testing PUT Functions of Todo Route", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Test markTodo Function", async () => {
    const mockData = {
      data: { updatedTodo: returnedTodo1 },
    };
    axios.put.mockResolvedValue(mockData);

    const result = await TodosMutations.markTodo(6, true);

    expect(result).toEqual(mockData.data.updatedTodo);
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/mark",
      { todoId: 6, newIsDone: true }
    );
  });

  test("Test updateTodo Function", async () => {
    const mockData = {
      data: { updatedTodo: returnedTodo1 },
    };
    axios.put.mockResolvedValue(mockData);

    const result = await TodosMutations.updateTodo(
      6,
      "New Task",
      false,
      "2024-12-10"
    );

    expect(result).toEqual(mockData.data.updatedTodo);
    expect(axios.put).toHaveBeenCalledTimes(1);
    expect(axios.put).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/update",
      {
        todoId: 6,
        newTask: "New Task",
        newIsDone: false,
        newDueDate: "2024-12-10",
      }
    );
  });
});

describe("Testing DELETE Function of Todo Route", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("Test deleteTodo Function", async () => {
    const mockData = {
      data: { deletedTodosId: 6 },
    };
    axios.delete.mockResolvedValue(mockData);

    const result = await TodosMutations.deleteTodo(6);

    expect(result).toEqual(mockData.data.deletedTodosId);
    expect(axios.delete).toHaveBeenCalledTimes(1);
    expect(axios.delete).toHaveBeenCalledWith(
      "http://localhost:5050/v1/todos/delete",
      { data: { todoId: 6 } }
    );
  });
});
