# Development Workflow

## Purpose

Transform the technical plan into working software.

## Trigger

Development tasks have been created and approved.

## Primary Agent

Lead Developer Agent

## Process

1. Select an available development task.
2. Read the task requirements.
3. Read relevant architecture.
4. Read project context.
5. Implement the task.
6. Write or update tests.
7. Validate acceptance criteria.
8. Record implementation details.
9. Mark the task ready for QA.

## Task Rules

A development task should contain:

- Task identifier
- Description
- Requirements
- Acceptance criteria
- Dependencies
- Relevant technical context

## Completion

A developer must not mark a task complete unless its acceptance
criteria have been addressed.

Completed tasks enter the QA workflow.

## Blocked Tasks

If a task cannot be completed because of:

- Missing information
- Architectural uncertainty
- Dependency failure
- External service issues

the developer must report the blocker.

The developer must not silently invent a solution that materially
changes the project.
