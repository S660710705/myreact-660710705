import React from 'react';

const TodoList = () => {
    // ข้อมูลที่จะแสดง

    //จ
    const todos = [
        { id: 1, text: 'อ่านหนังสือ', completed: false },
        { id: 2, text: 'สรุปสอบ', completed: false },
        { id: 3, text: 'ไปซื้อน้ำยาล้างจาน', completed: false }
    ];

    //อ
    const todos2 = [
        { id: 1, text: 'ไปโลตัส', completed: false },
        { id: 2, text: 'วาดรูปเล่น', completed: false },
    ];

    //พ
    const todos3 = [
        { id: 1, text: 'อ่านหนังสือ', completed: false },
        { id: 2, text: 'สรุปสอบ', completed: false },
        { id: 3, text: 'บริหารมือ', completed: false }
    ];

    //พฤ
    const todos4 = [
        { id: 1, text: 'กวาดห้อง', completed: false },
        { id: 2, text: 'ไปเอาพัสดุ', completed: false }
    ];

    //ศ
    const todos5 = [
        { id: 1, text: 'ซักผ้า', completed: false },
        { id: 2, text: 'ไปซื้อน้ำหวาน', completed: false },
        { id: 3, text: 'ออกกำลังกาย', completed: false }
    ];

    //ส
    const todos6 = [
        { id: 1, text: 'ไปซื้อเนื้อสัตว์', completed: false },
        { id: 2, text: 'ทำอาหาร', completed: false },
        { id: 3, text: 'ออกกำลังกาย', completed: false }
    ];

    //อา
    const todos7 = [
        { id: 1, text: 'กวาดห้อง', completed: false },
        { id: 2, text: 'อ่านที่สรุปสอบ', completed: false },
        { id: 3, text: 'ออกกำลังกาย', completed: false }
    ];

    return (
        <div style={{ margin: '20px 0' }}>
            <div>
                <h3 style={{ color: '#cdc600ff', margin: '10px 0', textAlign: 'left' }} >จันทร์</h3>
            </div>

            {todos.map(todo => (
                <div
                    key={todo.id}
                    style={{
                        padding: '12px',
                        margin: '8px 0',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: todo.completed ? '#e8f5e8' : '#fff',
                        transition: 'all 0.3s ease'
                    }}
                >
                    <span style={{ marginRight: '12px', fontSize: '18px' }}>
                        {todo.completed ? '✅' : '⬜'}
                    </span>
                    <span style={{
                        flex: 1,
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        color: todo.completed ? '#666' : '#333'
                    }}>
                        {todo.text}
                    </span>
                </div>
            ))}

            <div>
                <h3 style={{ color: '#ff62c8ff', margin: '10px 0', textAlign: 'left' }} >อังคาร</h3>
            </div>

            {todos2.map(todo => (
                <div
                    key={todo.id}
                    style={{
                        padding: '12px',
                        margin: '8px 0',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: todo.completed ? '#e8f5e8' : '#fff',
                        transition: 'all 0.3s ease'
                    }}
                >
                    <span style={{ marginRight: '12px', fontSize: '18px' }}>
                        {todo.completed ? '✅' : '⬜'}
                    </span>
                    <span style={{
                        flex: 1,
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        color: todo.completed ? '#666' : '#333'
                    }}>
                        {todo.text}
                    </span>
                </div>
            ))}

            <div>
                <h3 style={{ color: '#35af5eff', margin: '10px 0', textAlign: 'left' }} >พุธ</h3>
            </div>

            {todos3.map(todo => (
                <div
                    key={todo.id}
                    style={{
                        padding: '12px',
                        margin: '8px 0',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: todo.completed ? '#e8f5e8' : '#fff',
                        transition: 'all 0.3s ease'
                    }}
                >
                    <span style={{ marginRight: '12px', fontSize: '18px' }}>
                        {todo.completed ? '✅' : '⬜'}
                    </span>
                    <span style={{
                        flex: 1,
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        color: todo.completed ? '#666' : '#333'
                    }}>
                        {todo.text}
                    </span>
                </div>
            ))}

            <div>
                <h3 style={{ color: '#dea700ff', margin: '10px 0', textAlign: 'left' }} >พฤหัสบดี</h3>
            </div>

            {todos4.map(todo => (
                <div
                    key={todo.id}
                    style={{
                        padding: '12px',
                        margin: '8px 0',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: todo.completed ? '#e8f5e8' : '#fff',
                        transition: 'all 0.3s ease'
                    }}
                >
                    <span style={{ marginRight: '12px', fontSize: '18px' }}>
                        {todo.completed ? '✅' : '⬜'}
                    </span>
                    <span style={{
                        flex: 1,
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        color: todo.completed ? '#666' : '#333'
                    }}>
                        {todo.text}
                    </span>
                </div>
            ))}
            
            <div>
                <h3 style={{ color: '#62bbffff', margin: '10px 0', textAlign: 'left' }} >ศุกร์</h3>
            </div>

            {todos5.map(todo => (
                <div
                    key={todo.id}
                    style={{
                        padding: '12px',
                        margin: '8px 0',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: todo.completed ? '#e8f5e8' : '#fff',
                        transition: 'all 0.3s ease'
                    }}
                >
                    <span style={{ marginRight: '12px', fontSize: '18px' }}>
                        {todo.completed ? '✅' : '⬜'}
                    </span>
                    <span style={{
                        flex: 1,
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        color: todo.completed ? '#666' : '#333'
                    }}>
                        {todo.text}
                    </span>
                </div>
            ))}
<div>
                <h3 style={{ color: '#b662ffff', margin: '10px 0', textAlign: 'left' }} >เสาร์</h3>
            </div>

            {todos6.map(todo => (
                <div
                    key={todo.id}
                    style={{
                        padding: '12px',
                        margin: '8px 0',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: todo.completed ? '#e8f5e8' : '#fff',
                        transition: 'all 0.3s ease'
                    }}
                >
                    <span style={{ marginRight: '12px', fontSize: '18px' }}>
                        {todo.completed ? '✅' : '⬜'}
                    </span>
                    <span style={{
                        flex: 1,
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        color: todo.completed ? '#666' : '#333'
                    }}>
                        {todo.text}
                    </span>
                </div>
            ))}
<div>
                <h3 style={{ color: '#ea2e2eff', margin: '10px 0', textAlign: 'left' }} >อาทิตย์</h3>
            </div>

            {todos7.map(todo => (
                <div
                    key={todo.id}
                    style={{
                        padding: '12px',
                        margin: '8px 0',
                        borderRadius: '8px',
                        border: '1px solid #ddd',
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: todo.completed ? '#e8f5e8' : '#fff',
                        transition: 'all 0.3s ease'
                    }}
                >
                    <span style={{ marginRight: '12px', fontSize: '18px' }}>
                        {todo.completed ? '✅' : '⬜'}
                    </span>
                    <span style={{
                        flex: 1,
                        textDecoration: todo.completed ? 'line-through' : 'none',
                        color: todo.completed ? '#666' : '#333'
                    }}>
                        {todo.text}
                    </span>
                </div>
            ))}

        </div>
    );
};

export default TodoList;