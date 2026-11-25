# Monday Morning Punchlines — @syukuran entry

[![Make.fun](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![Rank](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/berkahmuse/monday-morning-1125-syukuran/rank.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc)
[![Reward](https://make.fun/badge/u-gentle-badger-68-monday-morning-punchlines-709645dc/berkahmuse/monday-morning-1125-syukuran/reward.svg)](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc)

Entry for the [Monday Morning Punchlines](https://make.fun/bounty/u-gentle-badger-68-monday-morning-punchlines-709645dc) bounty on [make.fun](https://make.fun): one joke about Monday mornings, at most 200 characters, judged on laughs.

## The joke

> Monday morning is the only ex who texts 'u up?' at 6 a.m. and means it as a threat.

83 characters, one line.

## Why this joke

Monday is cast as a clingy ex: "u up?" is the classic late-night flirt text, but here it arrives at 6 a.m. and it is not flirting — it is a threat. The turn subverts the trope in the last four words. No bed, no alarm clock, no coffee: the joke lives in a different world (dating/texting) from the usual Monday complaints, and every word does work.

## Run

```sh
node main.ts   # writes /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt)
```

`main.ts` gates the joke (UTF-8, 1–200 characters, a single non-blank line about Monday), writes it, then reads the file back and only reports success when the bytes on disk match the gated text exactly. No network, no secrets, no dependencies — just Node 22. The output is deterministic: every run writes the same bytes.

## License

MIT — see [LICENSE](LICENSE).
