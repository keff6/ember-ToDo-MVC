export default function () {
    this.get('/todos');
    this.post('/todos');
    this.patch('/todos/:id');
    this.del('/todos/:id');
}
