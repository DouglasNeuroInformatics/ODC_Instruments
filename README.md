# ODC Instruments

A collection of **open-access** data-collection instruments for the [Open Data Capture](https://opendatacapture.org) platform. Forms live in [`lib/forms`](./lib/forms) and interactive tasks live in [`lib/interactive`](./lib/interactive), with each instrument in its own directory containing an `index.ts` entrypoint.

## What is an instrument?

An instrument is the unit of data collection in Open Data Capture — it defines what the user sees, what data is produced, and how that data is validated. See the [instruments documentation](https://opendatacapture.org/en/docs/concepts/instruments/) for a full overview. 

## Installation

This repo uses [pnpm](https://pnpm.io). Install dependencies with:

```sh
pnpm install
```

The instructions for coding agents are in [`AGENTS.md`](./AGENTS.md). After `pnpm install`, `CLAUDE.md` also loads the instrument specification from `@opendatacapture/instrument-guidelines`.

## Serving an instrument

Use `serve-instrument` to preview an instrument locally. Pass the instrument's directory as the target:

```sh
pnpm exec serve-instrument lib/forms/GAD_7
```

The dev server runs on port `3000` by default; override it with `-p <number>`.

## Linting

Type-check and lint the instruments with:

```sh
pnpm lint
```

## Examples

Browse live examples of instruments on our playground: https://playground.opendatacapture.org

## Licensing

This repository is for **open-access instruments only**. Every instrument must use an approved license — see the [list of approved instrument licenses](https://opendatacapture.org/en/docs/reference/instrument-licenses/). If you are unsure whether a license qualifies, please [open an issue](../../issues) rather than guessing.
