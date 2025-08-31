import React from "react";
import UserCard from "./UserCard";
import TodoList from "./TodoList";


function ComponentExamples() {
    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '20px',
            fontFamily: 'Arial, sans-serif'
        }}>
            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#f8ffedff'
            }}>
                <h2 style={{ color: '#b35c94ff', marginBottom: '20px' }}>
                    Profile
                </h2>
                <UserCard />
            </section>


            <section style={{
                marginBottom: '40px',
                padding: '20px',
                border: '1px solid #eee',
                borderRadius: '8px',
                backgroundColor: '#f8ffedff'
            }}>
                <h2 style={{ color: '#579359ff', marginBottom: '20px' }}>
                    To do List
                </h2>
                <TodoList />
            </section>
        </div>
    );
}

export default ComponentExamples;