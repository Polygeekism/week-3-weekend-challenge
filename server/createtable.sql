CREATE TABLE tasks(
	id SERIAL PRIMARY KEY,
	task_description VARCHAR(80) NOT NULL,
	task_complete BOOLEAN
);