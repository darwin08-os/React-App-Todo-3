

export default function TodoList(){

    return(
        <div className="TodoList">
            <h1>Todo Application</h1>
            <div className="my-5 row d-flex justify-content-center mx-0">
            <div className="col-6">
            <input type="text" className="form-control" />
            </div>
            <div className="col-2">
            <button className="btn btn-primary">Add Todo</button>
            </div>
            </div>
        </div>
    );
}