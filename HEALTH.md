# Health

- Version health: 0.0.2
- true source: develop

## Status

### Legend

⏳ TODO · ⏸️ ON HOLD · 🔄 IN PROGRESS · 👀 TO REVIEW · ❌ FAILED ✅ DONE

## Preconditions of Deployments

- [✅] pull develop
- [⏸️] use real API
- [✅] variables are in `sfai-web-library-consumer--bar/config/variables/no-sensitive`
- [✅] variables are in `sfai-web-library-producer--bar/config/variables/no-sensitive`
- [✅] generated library local is pushed in consumer
- [✅] https://softwarefactoryai.atlassian.net/browse/PLATSALES-28
- [✅] `changelog.md` exists in library
- [✅] sfai_library_calendar

## Distribution

| Priority | Status         | Version Library | Goal                                                                                   | Working in localhost         | Working in npm local         | Working in npm aws           | URL                                                                                  |
| -------- | -------------- | --------------- | -------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------- | ---------------------------- | ------------------------------------------------------------------------------------ |
| P0       | 🔄 IN PROGRESS | `1.0.2`         | `sfai-foobar--lib-web-mirror` - Apply mirror `1.0.2` in library, producer and consumer | ⏳ TODO                      | ⏳ TODO                      | ⏸️ ON HOLD                   | https://github.com/softwarefactoryai/sfai-foobar--lib-web-mirror/tree/main           |
| P1       | 🔄 IN PROGRESS | `1.0.2`         | Health - preconditions of deployments are ready                                        | 🔄 IN PROGRESS               | 🔄 IN PROGRESS               | ⏸️ ON HOLD                   | https://github.com/softwarefactoryai/sfai-foobar--lib-web-mirror/blob/main/HEALTH.md |
| P2       | 🔄 IN PROGRESS | `1.0.2`         | Generate library `sfai-web-library-producer--foo/<LIBRARY_NAME>`                       | ✅ DONE                      | ✅ DONE                      | ⏸️ ON HOLD                   |                                                                                      |
| P3       | 🔄 IN PROGRESS | `1.0.2`         | Test `sfai-web-library-producer--foo/using_app`                                        | ✅ DONE                      | ✅ DONE                      | ⏸️ ON HOLD                   |                                                                                      |
| P4       | 🔄 IN PROGRESS | `1.0.2`         | Test `sfai-web-library-consumer--bar/using_app`                                        | ✅ DONE                      | ✅ DONE                      | ⏸️ ON HOLD                   |                                                                                      |
| P5       | ⏳ TODO        | `1.0.2`         | QA                                                                                     | ⏳ TODO                      | ⏳ TODO                      | ⏸️ ON HOLD                   |                                                                                      |
| P6       | ⏳ TODO        | `1.0.2`         | Integrate `sfai-app`                                                                   | ⏸️ ON HOLD (Release Manager) | ⏸️ ON HOLD (Release Manager) | ⏸️ ON HOLD (Release Manager) |                                                                                      |
