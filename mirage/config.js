export default function () {
    this.get('/todos', (schema, request) => {
        return schema.todos.all();
    });
    this.post('/todos');
    this.patch('/todos/:id');
    this.del('/todos/:id');
    this.passthrough();
}
