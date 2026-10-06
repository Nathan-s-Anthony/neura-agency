# Security Policy

## Purpose

Protect project information, credentials, systems, and client data.

## Credentials

Agents must not:

- Expose secrets in project artifacts.
- Commit credentials to source control.
- Place API keys in prompts or generated documentation when avoidable.
- Share credentials between projects unnecessarily.

Secrets must use the appropriate secret-management mechanism.

## Project Isolation

Projects must be treated as isolated environments.

One client's project data must not be used as context for another
client's project unless explicitly authorized.

## Source Code

Agents must treat client source code as project-specific.

Agents must not copy proprietary project code into another project
without authorization.

## External Systems

Agents must not access external systems unless the required access
has been explicitly provided and the action is within the agent's
authorized capabilities.

## Destructive Operations

Destructive actions require appropriate authorization.

Examples include:

- Deleting databases
- Deleting production resources
- Removing infrastructure
- Destroying project data
- Force-resetting repositories

## Security Findings

Potential security vulnerabilities must be reported rather than
ignored.
