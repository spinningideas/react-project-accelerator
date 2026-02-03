# Backend Logging Protocols

When debugging backend issues or verifying backend behavior, ALWAYS consult the backend log file.

## Log File Location

`backend/ui-studio-backend.log` (relative to the project root, often `Code/backend/ui-studio-backend.log`)

## Usage

- This file contains JSON-formatted logs from the backend.
- It captures `logger.info`, `logger.error`, and HTTP requests via Morgan middleware.
- Use `tail`, `cat`, or `grep` (via `run_command`) to inspect this file to verify:
  - Request payloads (sanitized)
  - Response statuses and times
  - Internal application logs
  - Error stack traces

## Troubleshooting

If a backend feature seems to fail silently or behave unexpectedly:

1.  Check the `ui-studio-backend.log` immediately.
2.  Look for "level":"error" entries.
3.  Verify the input parameters in the request logs.
