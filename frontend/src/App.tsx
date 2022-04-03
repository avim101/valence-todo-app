import React, {
    ChangeEvent,
    KeyboardEvent,
    useEffect,
    useMemo,
    useState
} from 'react';
import './App.css';
import Navbar from "./components/UI/Navbar";
import Page from "./components/UI/Page";
import TextInput from "./components/UI/form/input/TextInput";
import fetcher from "./utils/fetcher";
import TodoItem, {Status, Todo} from "./components/TodoItem";


function App() {
    const [todos, setTodos] = useState<Todo[]>([]);
    const [newTodo, setNewTodo] = useState("");
    const [search, setNewSearch] = useState("");

    useEffect(() => {
        fetcher('/api/todos').then(todos => setTodos(todos));
    }, [])

    const filteredTodos = useMemo(() => !search
        ? todos
        : todos?.filter((todo) => {
            return todo.tags.includes(search)
        }), [search, todos]);

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewSearch(e.target.value);
    };

    const addTodo = async (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            try {
                const todo = await fetcher('/api/todo', {method: "POST", body: JSON.stringify({text: newTodo})});
                setTodos(todos => [...todos, todo]);
                setNewTodo("");
            } catch (e) {
                // TODO:error handling
                console.log(e);
            }

        }
    }

    const updateTodo = (todo: Partial<Todo>): Promise<Todo> => {
        return fetcher(`/api/todo/`, {method: "PATCH", body: JSON.stringify({...todo})});
    }

    const deleteTodo = async (id: string) => {
        try {
            await fetcher(`/api/todo/${id}`, {method: "DELETE", body: JSON.stringify({text: newTodo})});
            setTodos(todos.filter(todo => todo.id !== id));
        } catch (e) {
            // TODO:error handling
            console.log(e);
        }
    }

    const updateStatus = async (checked: boolean, id: string) => {
        const status = checked ? Status.Done : Status.Todo;
        try {
            const updatedTodo = await updateTodo({status, id});
            setTodos(prevTodos => prevTodos.map(prevTodo => prevTodo.id === updatedTodo.id ? updatedTodo : prevTodo));
        } catch (e) {
            // TODO:error handling
            console.log(e);
        }
    }

    const updateContent = async (text: string, id: string) => {
        try {
            const updatedTodo = await updateTodo({text, id});
            setTodos(prevTodos => prevTodos.map(prevTodo => prevTodo.id === updatedTodo.id ? updatedTodo : prevTodo));
        } catch (e) {
            // TODO:error handling
            console.log(e);
        }
    }

    const addTag = async (todo: Todo, newTag: string) => {
        const tags = new Set([...todo.tags, newTag]);
        try {
            const updatedTodo = await updateTodo({tags: Array.from(tags), id: todo.id});
            setTodos(prevTodos => prevTodos.map(prevTodo => prevTodo.id === updatedTodo.id ? updatedTodo : prevTodo));
        } catch (e) {
            // TODO:error handling
            console.log(e);
        }
    }

    const removeTag = async (todo: Todo, tag: string) => {
        const tags = todo.tags.filter(t => t !== tag);
        try {
            const updatedTodo = await updateTodo({tags, id: todo.id});
            setTodos(prevTodos => prevTodos.map(prevTodo => prevTodo.id === updatedTodo.id ? updatedTodo : prevTodo));
        } catch (e) {
            // TODO:error handling
            console.log(e);
        }
    }

    return (
        <>
            <Navbar/>
            <Page className='max-w-3xl'>
                <TextInput placeholder='Filter by tags, support hierarchical filter' onChange={handleSearchChange}
                           className='w-full mb-4'/>
                {filteredTodos?.map(todo =>
                    <TodoItem className='mb-4'
                              key={todo.id}
                              todo={todo}
                              onUpdateStatus={updateStatus}
                              onDeleteTodo={deleteTodo}
                              onTagAdded={addTag}
                              onTagRemoved={removeTag}
                              onUpdateContent={updateContent}
                    />)}
                <TextInput placeholder='Add new task, store on enter'
                           onChange={e => setNewTodo(e.target.value)}
                           value={newTodo}
                           onKeyUp={addTodo}
                           className='w-full'/>
            </Page>
        </>
    );
}

export default App;
