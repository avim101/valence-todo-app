import CardBody from "./UI/card/Body";
import CardTitle from "./UI/card/Title";
import CheckboxInput from "./UI/form/input/CheckboxInput";
import TextInput from "./UI/form/input/TextInput";
import Button from "./UI/Button";
import {CheckIcon, PencilIcon, TrashIcon} from "@heroicons/react/outline";
import CardActions from "./UI/card/Actions";
import Card from "./UI/card/Card";
import React, {KeyboardEvent, useRef, useState} from "react";
import clsx from "clsx";
import Tag from "./UI/Tag";

/**
 * Model Todo
 *
 */
export type Todo = {
    id: string
    tags: string[]
    text: string
    status: Status
    createdTime: Date
}

export enum Status {
    Done = 'Done',
    Todo = 'Todo'
}

export type TodoItemProps = {
    todo: Todo;
    onUpdateStatus: (checked: boolean, id: string) => void;
    onDeleteTodo: (id: string) => void;
    onTagAdded: (tags: Todo, newTag: string) => void;
    onTagRemoved: (todo: Todo, tag: string) => void;
    onUpdateContent: (newContent: string, id: string) => void;
    className?: string;
}

const TodoItem = ({
                      todo,
                      onDeleteTodo,
                      onUpdateStatus,
                      onTagAdded,
                      onUpdateContent,
                      onTagRemoved,
                      className
                  }: TodoItemProps) => {
    const todoContentInputRef = useRef<HTMLInputElement>(null);
    const [newTag, setNewTag] = useState("");
    const [editMode, setEditMode] = useState(false);
    const [content, setContent] = useState(todo.text);

    const handleTagAdded = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && newTag.length) {
            onTagAdded(todo, newTag.trim());
            setNewTag("");
        }
    }

    const handleTagRemoved = (todo: Todo, tag: string) => {
        return onTagRemoved(todo, tag)
    }


    const handleEditModeChange = (id?: string) => {
        setEditMode(prevState => {
            if (!prevState) {
                todoContentInputRef.current && todoContentInputRef.current.focus();
            } else {
                id && onUpdateContent(content, id);
            }
            return !prevState
        });
    }

    return <Card cardBordered
                 cardCompact
                 className={clsx('bg-gradient-to-r from-indigo-100 to-purple-200 text-gray-700', className)}>
        <CardBody>
            <CardTitle className='justify-between'>
                <div className='flex grow'>
                    <CheckboxInput color='primary'
                                   onChange={(e) => onUpdateStatus(e.target.checked, todo.id)}
                                   defaultChecked={todo.status === 'Done'}/>
                    <TextInput defaultValue={content}
                               onChange={e => setContent(e.target.value)}
                               readOnly={!editMode}
                               ref={todoContentInputRef}
                               className={clsx('bg-transparent border-0 rounded-none grow focus:outline-0', editMode && 'border-b')}/>
                </div>
                {
                    !editMode ?
                        <Button color='primary' shape='round' icon={<PencilIcon width='1rem'/>}
                                onClick={() => handleEditModeChange()}/> :
                        <Button color='success' shape='round' icon={<CheckIcon width='1rem'/>}
                                onClick={() => handleEditModeChange(todo.id)}/>
                }
                <Button color='error' shape='round' icon={<TrashIcon width='1rem'/>}
                        onClick={() => onDeleteTodo(todo.id)}/>
            </CardTitle>

            <CardActions className='flex justify-end items-center'>
                {!!todo.tags.length && <div className='grow'>
                    {todo.tags.map(t => <Tag color="secondary" className='mr-2 mb-2' removable
                                             onRemove={() => handleTagRemoved(todo, t)} outline key={t}>{t}</Tag>)}
                </div>}
                <TextInput placeholder='Add new tag, store on enter'
                           color="primary"
                           onChange={e => setNewTag(e.target.value)}
                           value={newTag}
                           onKeyUp={handleTagAdded}
                           className='mb-4 bg-transparent border-0 border-b rounded-none sm:w-52 w-full focus:outline-0'/>
            </CardActions>
        </CardBody>
    </Card>
}

export default TodoItem;
