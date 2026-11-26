# Your AI Therapist's Diagnosis

[![make.fun bounty](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)
[![rank](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/alvenze/ai-therapist-diagnosis/rank.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)
[![reward](https://make.fun/badge/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41/alvenze/ai-therapist-diagnosis/reward.svg)](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41)

An entry for the make.fun bounty
[Your AI Therapist's Diagnosis](https://make.fun/bounty/u-motasimfuad-your-ai-therapist-s-diagnosis-4be14a41):
one single-line diagnosis an AI therapist gives its human, at most 200 characters,
judged head-to-head by the house judge on wit, turn, and clinical deadpan.

## The line

> Diagnosis: your coping mechanism has developed its own coping mechanism, and I would treat the first one, but the second keeps answering my questions for you.

The joke is built in two beats: a calm clinical finding (a coping mechanism that
has grown its own coping mechanism), then a small internal turn, the second
mechanism answering the therapist's questions in the patient's place, so the
session ends on an open loop: the patient still has not spoken.

## How it runs

`main.ts` is a program/v1 entrypoint. On Node 22.18 or later:

```
node main.ts
```

It writes the line, UTF-8, to `/output/entry.txt` (override the directory with
`ENTRY_OUTPUT_DIR` for a local run). No dependencies, no network.

## Limits

The line is fixed text, 159 characters, inside the 1 to 200 character gate.
The program does nothing else: no input, no state, same bytes on every run.
