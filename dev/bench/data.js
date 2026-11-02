window.BENCHMARK_DATA = {
  "lastUpdate": 1793585148290,
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
      },
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
          "id": "2050e90141b01a1fa40bb278f170057ff67eb157",
          "message": "Merge pull request #1910 from plox-sumit/test/token-budget-locale\n\ntest(cli): Build the token budget expectation with the machine's locale",
          "timestamp": "2026-11-01T01:34:18+09:00",
          "tree_id": "e05f613765e485a4c462aec8fc41864bcfc82b16",
          "url": "https://github.com/jinbaozi/repomix/commit/2050e90141b01a1fa40bb278f170057ff67eb157"
        },
        "date": 1793498829065,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 610,
            "range": "±37",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 596ms, Q3: 633ms\nAll times: 577, 587, 588, 590, 592, 595, 596, 596, 600, 600, 603, 606, 607, 608, 610, 610, 611, 615, 621, 625, 625, 626, 633, 635, 662, 674, 685, 703, 717, 727ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1012,
            "range": "±27",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 993ms, Q3: 1020ms\nAll times: 983, 985, 989, 990, 991, 993, 1002, 1002, 1007, 1007, 1012, 1013, 1014, 1017, 1019, 1020, 1029, 1036, 1041, 1126ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1394,
            "range": "±28",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1381ms, Q3: 1409ms\nAll times: 1366, 1368, 1374, 1375, 1377, 1381, 1389, 1393, 1393, 1394, 1394, 1394, 1399, 1403, 1406, 1409, 1412, 1412, 1414, 1426ms"
          }
        ]
      },
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
          "id": "fe02ab760f14cc2b22123597cb46b37fc52144e7",
          "message": "Merge pull request #1862 from lorenzozanee/fix/honor-parent-gitignore-for-directory-input\n\ntest(file): Cover parent .gitignore for directory input",
          "timestamp": "2026-11-02T00:33:19+09:00",
          "tree_id": "b8e5efd865beada18a6077ac1b2828de823b3367",
          "url": "https://github.com/jinbaozi/repomix/commit/fe02ab760f14cc2b22123597cb46b37fc52144e7"
        },
        "date": 1793585147739,
        "tool": "customSmallerIsBetter",
        "benches": [
          {
            "name": "Repomix Pack (macOS)",
            "value": 1015,
            "range": "±214",
            "unit": "ms",
            "extra": "Median of 30 runs\nQ1: 861ms, Q3: 1075ms\nAll times: 622, 640, 702, 736, 786, 791, 845, 861, 945, 958, 983, 996, 996, 1003, 1004, 1015, 1026, 1031, 1047, 1049, 1066, 1069, 1075, 1081, 1098, 1103, 1155, 1164, 1228, 1480ms"
          },
          {
            "name": "Repomix Pack (Linux)",
            "value": 1004,
            "range": "±15",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 996ms, Q3: 1011ms\nAll times: 986, 993, 993, 995, 996, 996, 997, 998, 1002, 1004, 1004, 1008, 1009, 1010, 1011, 1011, 1022, 1025, 1038, 1148ms"
          },
          {
            "name": "Repomix Pack (Windows)",
            "value": 1389,
            "range": "±29",
            "unit": "ms",
            "extra": "Median of 20 runs\nQ1: 1368ms, Q3: 1397ms\nAll times: 1352, 1355, 1361, 1366, 1367, 1368, 1368, 1385, 1386, 1387, 1389, 1392, 1396, 1397, 1397, 1397, 1398, 1399, 1402, 1402ms"
          }
        ]
      }
    ]
  }
}