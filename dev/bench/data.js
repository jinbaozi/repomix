window.BENCHMARK_DATA = {
  "lastUpdate": 1793361622474,
  "repoUrl": "https://github.com/jinbaozi/repomix",
  "entries": {
    "Repomix Performance": [
      {
        "commit": {
          "author": {
            "email": "koukun0120@gmail.com",
            "name": "Kazuki Yamada",
            "username": "yamadashy"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d7b28bf3e651e2f34a284ca9c91074edfe1b88d",
          "message": "Merge pull request #1965 from yamadashy/fix/remove-comments-url-scss-vue\n\nfix(core): Keep URLs when removing comments in SCSS, Less, Vue and Svelte",
          "timestamp": "2026-10-29T00:24:00+09:00",
          "tree_id": "6ac07004615f042bb3a5b5f73114540c20ee2424",
          "url": "https://github.com/jinbaozi/repomix/commit/7d7b28bf3e651e2f34a284ca9c91074edfe1b88d"
        },
        "date": 1793361621139,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 632,
            "range": "±67",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 619ms, Q3: 686ms\nAll times: 600, 606, 607, 611, 615, 619, 619, 619, 620, 620, 622, 624, 627, 627, 628, 632, 633, 653, 656, 657, 659, 680, 686, 696, 696, 696, 698, 715, 723, 734ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 557,
            "range": "±42",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 551ms, Q3: 593ms\nAll times: 538, 542, 547, 548, 549, 551, 554, 556, 556, 557, 557, 559, 561, 578, 581, 593, 610, 614, 649, 657ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1295,
            "range": "±26",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1288ms, Q3: 1314ms\nAll times: 1271, 1273, 1280, 1282, 1285, 1288, 1288, 1288, 1289, 1290, 1295, 1303, 1307, 1310, 1311, 1314, 1314, 1315, 1330, 1341ms"
          }
        ]
      }
    ]
  }
}