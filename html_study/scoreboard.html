<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>⚽ 프리미어리그 실시간 순위표 ⚽</title>
    <style>
        body {
          font-family: 'Segoe UI', sans-serif;
          background: #fff;
          text-align: center;
          padding: 30px;
          color: #333;
        }
        header img {
          width: 120px;
          display: block;
          margin: 0 auto 10px;
        }
        h1 {
          margin: 0;
          color: #222;
        }
        table {
          margin: 25px auto;
          border-collapse: separate;
          border-spacing: 0;
          width: 95%;
          background: white;
          border-radius: 15px;
          box-shadow: 0 0 15px rgba(0,0,0,0.1);
          overflow: hidden;
        }
        th, td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: center;
        }
        th {
          background: #212529;
          color: white;
        }
        tr:nth-child(even) {
          background: #f9f9f9;
        }
        .champions { background-color: #d8e8ff !important; }
        .europa { background-color: #ffe4cc !important; }
        .conference { background-color: #dfffe2 !important; }
        .relegation { background-color: #ffcccc !important; } /* 🔴 하위 3팀 색상 */
        img.team-logo {
          width: 28px;
          vertical-align: middle;
          margin-right: 8px;
          border-radius: 4px;
        }
        .league-icon {
          width: 20px;
          vertical-align: middle;
          margin-left: 6px;
        }
        .trophy-icon {
          width: 22px;
          vertical-align: middle;
          margin-left: 6px;
        }
    </style>
</head>
<body>
<header>
    <img src="https://upload.wikimedia.org/wikipedia/en/f/f2/Premier_League_Logo.svg" alt="Premier League Logo">
    <h1>⚽ 프리미어리그 실시간 순위표 ⚽</h1>
</header>

<p>📡 실시간 EPL 순위를 불러오는 중...</p>

<table id="leagueTable" style="display:none;">
    <thead>
    <tr>
        <th>순위</th>
        <th>팀 이름</th>
        <th>경기</th>
        <th>승</th>
        <th>무</th>
        <th>패</th>
        <th>득점</th>
        <th>실점</th>
        <th>득실</th>
        <th>승점</th>
    </tr>
    </thead>
    <tbody id="tableBody"></tbody>
</table>

<script>
    const API_KEY = "c93ae110e28640269ad20e6316ab68b3";
    const API_URL = "https://api.football-data.org/v4/competitions/PL/standings";
    const PROXY = "https://corsproxy.io/?";

    async function loadEPL() {
      try {
        const res = await fetch(PROXY + API_URL, {
          headers: { "X-Auth-Token": API_KEY }
        });
        if (!res.ok) throw new Error("API 요청 실패: " + res.status);
        const data = await res.json();
        const teams = data.standings[0].table;

        const tbody = document.getElementById("tableBody");
        const table = document.getElementById("leagueTable");
        const loadingText = document.querySelector("p");

        tbody.innerHTML = "";
        teams.forEach(t => {
          const rank = t.position;
          let rowClass = "";
          let badge = "";

          // 🏆 상위권 표시
          if (rank === 1) {
            rowClass = "champions";
            badge = `<img class="trophy-icon" src="https://upload.wikimedia.org/wikipedia/commons/2/2c/Premier_league_trophy_icon.png" alt="Trophy">`;
          } else if (rank >= 2 && rank <= 4) {
            rowClass = "champions";
            badge = `<img class="league-icon" src="https://upload.wikimedia.org/wikipedia/ko/2/23/UEFA_%EC%B1%94%ED%94%BC%EC%96%B8%EC%8A%A4%EB%A6%AC%EA%B7%B8_%EB%A1%9C%EA%B3%A0.svg" alt="UCL">`;
          } else if (rank === 5) {
            rowClass = "europa";
            badge = `<img class="league-icon" src="https://upload.wikimedia.org/wikipedia/commons/1/1b/UEFA_Europa_League_logo_%282024_version%29.svg" alt="UEL">`;
          } else if (rank === 6) {
            rowClass = "conference";
            badge = `<img class="league-icon" src="https://upload.wikimedia.org/wikipedia/commons/4/4b/UEFA_Conference_League_full_logo_%282024_version%29.svg" alt="UECL">`;
          }
          // 🔴 하위 3팀 강등권 표시
          else if (rank >= 18) {
            rowClass = "relegation";
          }

          const row = `
            <tr class="${rowClass}">
              <td>${rank}${badge}</td>
              <td><img class="team-logo" src="${t.team.crest}" alt="">${t.team.name}</td>
              <td>${t.playedGames}</td>
              <td>${t.won}</td>
              <td>${t.draw}</td>
              <td>${t.lost}</td>
              <td>${t.goalsFor}</td>
              <td>${t.goalsAgainst}</td>
              <td>${t.goalDifference}</td>
              <td>${t.points}</td>
            </tr>`;
          tbody.insertAdjacentHTML("beforeend", row);
        });

        loadingText.style.display = "none";
        table.style.display = "table";

      } catch (err) {
        document.querySelector("p").innerText = "❌ 데이터를 불러오지 못했습니다.";
        console.error(err);
      }
    }
    loadEPL();
</script>
</body>
</html>
