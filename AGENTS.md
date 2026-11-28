# Open Data Capture instruments

This repository holds instruments for [Open Data Capture](https://opendatacapture.org) (ODC). An ODC instance imports the instruments directly from the `main` branch of this repository.

## Specification

The instrument specification is `node_modules/@opendatacapture/instrument-guidelines/AGENTS.md`. Run `pnpm install`, then read the full specification before you write or change an instrument. The specification is the version that agrees with the installed runtime. The rules below add to it.

## Layout

Each instrument is one directory with an `index.ts` or `index.tsx` entrypoint:

- `lib/forms/<NAME>/` for `FORM` instruments
- `lib/interactive/<NAME>/` for `INTERACTIVE` instruments
- `lib/series/<NAME>/` for `SERIES` instruments
- `lib/file/<NAME>/` for `FILE` instruments

ODC imports these four directories only. An instrument in a different location is not imported.

## Edition

ODC identifies collected data by `internal.name` and `internal.edition`. When you change a file in the directory of an existing form, interactive or file instrument, increase its `internal.edition` by one. Increase it one time for each branch, not one time for each commit. If a series in `lib/series` refers to the instrument, set the `edition` in the series to the new value.

## Completion

A change is complete when `pnpm check` passes. If a step fails:

- Type or lint error: run `pnpm lint`, then correct the remaining errors.
- Format error: run `pnpm format`.
- Edition error: increase `internal.edition` as the Edition section tells you.

To see an instrument, run `pnpm exec serve-instrument lib/<category>/<NAME>` and open it with the `agent-browser` skill.

## Shared files

The CI workflows, the files in `scripts/` and `.github/scripts/`, the tool configuration, and the text of this file above the marker line are copies from [ODC_Instruments_Template](https://github.com/DouglasNeuroInformatics/ODC_Instruments_Template). Change them in the template first, then copy the change here. `pnpm check-template` shows the copies that are different from the template.

<!-- repository-specific -->

## This repository

- This repository is public and holds open-access instruments only. Each instrument must have a license from the [approved instrument licenses](https://opendatacapture.org/en/docs/reference/instrument-licenses/). If you are not sure that a license is approved, stop and ask the user.
- The `TestMyBrain.*.js` files in `lib/interactive/TMB_*` are vendor code. ESLint ignores them. Keep them as they are.
