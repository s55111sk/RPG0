let flag = true;
let plyName = prompt("名前を入力してください");
plySt0.textContent = plyName;
//プレイヤーデータ
let plyLv = 1;
let plyHp = 5;
let plyHpMax = 5;
let plyAtt = 1;
let plyHeal = 1;
let plyExp = 0;
let plyExpNext = 5;
let plyExpNeed = [5, 10, 15, 30, 55, 100, 200, 350, 500, 1000];
let plyImg = document.getElementById("plyImg");
let eneImg = document.getElementById("eneImg");
//plySt0~6
for (i = 0; i > 6; i++) {
    let plySti = document.getElementById("plySt" + i);
}

//プレイヤー回復
plyImg.addEventListener("mousedown", () => {
    if (flag) {
        plyImg.src = "RPG/playerC.png"
    }
});
plyImg.addEventListener("mouseup", () => {
    if (flag) {
        plyImg.src = "RPG/playerA.png"
        plyHp += plyHeal;
        plySt2.textContent = "ＨＰ：" + plyHp;
        if (plyHp > plyHpMax) {
            plyHp = plyHpMax;
            plySt2.textContent = "ＨＰ：" + plyHp;
        }
        plySt2.textContent = "ＨＰ：" + plyHp;
    }
}
);
//エネミーデータ 配列を使う
let eneLv = 0;
let eneHp = [5, 10, 20, 30, 40, 50, 60, 70, 80, 100];
let eneHpMax0 = [5, 10, 20, 30, 40, 50, 60, 70, 80, 100];
let eneAtt0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let eneKill0 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let eneExp0 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
let eneCnt0 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
let eneCntMax0 = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
let eneName0 = ["スライム", "コウモリ", "ネズミ", "ヘビ", "ノライヌ", "コオニ", "ゴースト", "オーク", "ファイアスピリット", "クマ"]
//eneSt0~4
for (i = 0; i > 4; i++) {
    let eneSti = document.getElementById("eneSt" + i)
}
//敵を攻撃
eneImg.addEventListener("mousedown", () => {
    if (flag) {
        i = eneLv;
        eneImg.src = "RPG/enemyB" + i + ".png";
    }
});
eneImg.addEventListener("mouseup", () => {
    if (flag) {
        eneImg.src = "RPG/enemyA" + i + ".png";
        if (eneHp[eneLv] > 0) {
            eneHp[eneLv] -= plyAtt;
        } else {
            //ゲームクリアー
            if (eneLv == 9) {
                flag = false;
                eneImg.src = "RPG/clear.png";
            }
            eneHp[eneLv] = eneHpMax0[eneLv];
            eneKill0[eneLv]++;
            eneSt4.textContent = "倒した回数：" + eneKill0[eneLv];
            //経験値の処理
            plyExp += eneExp0[eneLv];
            plySt5.textContent = "経験値：" + plyExp;
            plyExpNext -= eneExp0[eneLv];
            //レベルアップの処理
            if (plyExpNext < 0) {
                plyExpNext = plyExpNeed[plyLv];
                plyLv++;
                plySt1.textContent = "レベル：" + plyLv;
                plyHpMax += 5;
                plyHp = plyHpMax;
                plySt2.textContent = "ＨＰ：" + plyHp;
                plyAtt++;
                plySt3.textContent = "攻撃力：" + plyAtt;
                plyHeal++;
                plySt4.textContent = "回復魔法：" + plyHeal;
            }
            plySt6.textContent = "次のレベルまでの経験値：" + plyExpNext + "ポイント";
        }
        eneSt2.textContent = "ＨＰ：" + eneHp[eneLv];
    }
});
//次のモンスター
right.addEventListener("mouseup", () => {
    if (flag) {
        i = eneLv;
        eneImg.src = "RPG/enemyA" + i + ".png";
    }
});
right.addEventListener("mousedown", () => {
    if (flag) {
        eneLv++;
        if (eneLv > 9) {
            eneLv = 9;
            eneSt0.textContent = eneName0[eneLv];
            eneSt1.textContent = "レベル：" + eneLv;
            eneSt2.textContent = "ＨＰ：" + eneHpMax0[eneLv];
            eneSt3.textContent = "攻撃力：" + eneAtt0[eneLv];
            enest4.textContent = "倒した回数：" + eneKill0[eneLv];
        }
    }
    eneSt0.textContent = eneName0[eneLv];
    eneSt1.textContent = "レベル：" + eneLv;
    eneSt2.textContent = "ＨＰ：" + eneHpMax0[eneLv];
    eneSt3.textContent = "攻撃力：" + eneAtt0[eneLv];
    enest4.textContent = "倒した回数：" + eneKill0[eneLv];
}
)
//逃げる
left.addEventListener("mouseup", () => {
    if (flag) {
        i = eneLv;
        eneImg.src = "RPG/enemyA" + i + ".png";
    }
});
left.addEventListener("mousedown", () => {
    if (flag) {
        eneLv--;
        if (eneLv < 0) {
            eneLv = 0;
            eneSt0.textContent = eneName0[eneLv];
            eneSt2.textContent = "ＨＰ：" + eneHpMax0[eneLv];
            eneSt3.textContent = "攻撃力：" + eneAtt0[eneLv];
            enest4.textContent = "倒した回数：" + eneKill0[eneLv];
        }
        eneSt0.textContent = eneName0[eneLv];
        eneSt2.textContent = "ＨＰ：" + eneHpMax0[eneLv];
        eneSt3.textContent = "攻撃力：" + eneAtt0[eneLv];
        enest4.textContent = "倒した回数：" + eneKill0[eneLv];
    }
})
//敵が時間ごとに攻撃
let eneSec = document.getElementById("eneSec");
let loop = setInterval(() => {
    if (flag) {
        if (eneCnt0[eneLv] > 0) {
            eneCnt0[eneLv]--;
            eneSec.textContent = "モンスターの攻撃まで" + eneCnt0[eneLv] + "秒";
        } else {
            plyImg.src = "RPG/playerB.png";
            plyHp -= eneAtt0[eneLv];
            eneCnt0[eneLv] = 5;
        }
        if (plyHp > 0) {
            plySt2.textContent = "ＨＰ：" + plyHp;
            eneSec.textContent = "モンスターの攻撃まで" + eneCnt0[eneLv] + "秒";
        } else {
            plyHp = 0;
            clearInterval(loop);
            flag = false;
            plySt2.textContent = "ＨＰ：" + plyHp;
            eneSec.textContent = "ゲームオーバー";
        }
        setTimeout(() => {
            if (flag) {
                plyImg.src = "RPG/playerA.png";
                eneSec.textContent = "モンスターの攻撃まで" + eneCnt0[eneLv] + "秒";
            }

        }, 500);
    }
}, 1000);
