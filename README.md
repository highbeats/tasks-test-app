tasks-test-app
==============
In general: Prioritized TODO lists

> In order to prioritize my own activities and manage my personal best. I want to have ability to submit tasks into MUST, SHOULD and COULD queues.

Acceptance criteria, application should:

* be available from plain `index.html` and should not have any `jQuery` based snippets;
* use DS.FixtureAdapter;

User stories:

* Activate one of Queue manually by click or url (`#/must`, `#/should`, `#/could`) directly (as a result all other Queues should be disabled for any kind of operations);
* Create task into selected (active) Queue;
* Complete particular task from selected (active) Queue (as a result I should see which tasks are completed or still in pending);
* Ability to continue even my browser was closed;

