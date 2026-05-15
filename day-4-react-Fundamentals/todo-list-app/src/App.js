import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [taskInput, setTaskInput] = useState("");
  const [activeFilter, setActiveFilter] = useState("All");
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (taskInput.trim() === "") return;

    const newTask = {
      id: Date.now(),
      title: taskInput,
      date: new Date().toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      completed: false,
    };

    setTasks([...tasks, newTask]);
    setTaskInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const clearCompleted = () => {
    setTasks(tasks.filter((task) => !task.completed));
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  const filteredTasks = tasks.filter((task) => {
    if (activeFilter === "Completed") return task.completed;
    if (activeFilter === "Pending") return !task.completed;
    return true;
  });

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;
  const progressPercentage = totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className={`app-wrapper ${darkMode ? "dark-mode" : "light-mode"}`}>
      {/* Header */}
      <header className="header">
        <div className="header-left">
          <div className="header-icon">📋</div>
          <div className="header-content">
            <h1 className="header-title">Todo List</h1>
            <p className="header-subtitle">Stay organized. Get things done.</p>
          </div>
        </div>
        <button
          className="dark-mode-toggle"
          onClick={() => setDarkMode(!darkMode)}
          title="Toggle dark mode"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </header>

      <main className="main-content">
        {/* Task Input Section */}
        <div className="input-container">
          <div className="input-wrapper">
            <input
              type="text"
              className="task-input"
              placeholder="What do you want to do?"
              value={taskInput}
              onChange={(e) => setTaskInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <span className="calendar-icon">📅</span>
          </div>
          <button className="add-task-button" onClick={addTask}>
            Add Task +
          </button>
        </div>

        {/* Statistics Cards */}
        <div className="stats-container">
          <div className="stat-card total-card">
            <div className="stat-icon">📊</div>
            <div className="stat-content">
              <p className="stat-label">Total Tasks</p>
              <p className="stat-value">{totalTasks}</p>
            </div>
          </div>

          <div className="stat-card completed-card">
            <div className="stat-icon">✅</div>
            <div className="stat-content">
              <p className="stat-label">Completed</p>
              <p className="stat-value">{completedTasks}</p>
            </div>
          </div>

          <div className="stat-card pending-card">
            <div className="stat-icon">⏳</div>
            <div className="stat-content">
              <p className="stat-label">Pending</p>
              <p className="stat-value">{pendingTasks}</p>
            </div>
          </div>

          <div className="stat-card progress-card">
            <div className="stat-icon">📈</div>
            <div className="stat-content">
              <p className="stat-label">Progress</p>
              <p className="stat-value">{progressPercentage}%</p>
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="filter-container">
          <button
            className={`filter-button ${activeFilter === "All" ? "active" : ""}`}
            onClick={() => setActiveFilter("All")}
          >
            All
          </button>
          <button
            className={`filter-button ${activeFilter === "Pending" ? "active" : ""}`}
            onClick={() => setActiveFilter("Pending")}
          >
            Pending
          </button>
          <button
            className={`filter-button ${activeFilter === "Completed" ? "active" : ""}`}
            onClick={() => setActiveFilter("Completed")}
          >
            Completed
          </button>
          {completedTasks > 0 && (
            <button className="clear-completed-button" onClick={clearCompleted}>
              Clear Completed
            </button>
          )}
        </div>

        {/* Task List */}
        <div className="tasks-list-container">
          {filteredTasks.length === 0 ? (
            <div className="empty-state">
              <p className="empty-message">
                {activeFilter === "All"
                  ? "No tasks yet. Add one to get started! 🚀"
                  : `No ${activeFilter.toLowerCase()} tasks. Great job! 🎉`}
              </p>
            </div>
          ) : (
            <div className="tasks-list">
              {filteredTasks.map((task) => (
                <div
                  key={task.id}
                  className={`task-item ${task.completed ? "completed" : ""}`}
                >
                  <div className="task-left">
                    <button
                      className={`task-checkbox ${task.completed ? "checked" : ""}`}
                      onClick={() => toggleComplete(task.id)}
                    >
                      {task.completed ? "✓" : ""}
                    </button>
                    <div className="task-details">
                      <p className="task-title">{task.title}</p>
                      <span className="task-date">📅 {task.date}</span>
                    </div>
                  </div>
                  <div className="task-right">
                    <span
                      className={`task-badge ${
                        task.completed ? "completed-badge" : "pending-badge"
                      }`}
                    >
                      {task.completed ? "Completed" : "Pending"}
                    </span>
                    <button
                      className="task-delete-button"
                      onClick={() => deleteTask(task.id)}
                      title="Delete task"
                    >
                      🗑️
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <p className="footer-text">
          🚀 Small steps every day lead to big results. Keep going! 🚀
        </p>
      </footer>
    </div>
  );
}

export default App;