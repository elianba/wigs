<!--

thisDay = new Date(); //現在の日時
timeStamp = thisDay.getTime();  //1970年1月1日午前0時からの経過時間をミリ秒で返します。
myMonth = thisDay.getMonth() + 1;
myDate  = thisDay.getDate();
myHours = thisDay.getHours();
myDay   = thisDay.getDay();
myWeekTbl = new Array( "日","月","火","水","木","金","土" );

/*　nday･･･曜日
  nofw･･･第何週か
*/

function isHoliday (year, month, date, nday) {
  nofw    = Math.floor((date - 1) / 7) + 1;
  shunbun = Math.floor(20.8431+0.242194*(year-1980)-Math.floor((year-1980)/4)); //春分の日を算出
  syubun  = Math.floor(23.2488+0.242194*(year-1980)-Math.floor((year-1980)/4)); //秋分の日を算出
  if (month ==  1 && nday ==  1 && nofw ==  2) { return 1; } // 成人の日
  if (month ==  2 && date == 11)               { return 1; } // 建国記念の日
  if (month ==  2 && date == 15)               { return 1; } // 社員研修
  if (month ==  3 && date == shunbun)          { return 1; } // 春分の日
  if (month ==  4 && date == 29)               { return 1; } // みどりの日
  if (month ==  4 && date == 30)               { return 1; } // みどりの日(振替休日)

/*  if (month ==  5 && date == 1)               { return 1; } //2012ゴールデンウィーク
  if (month ==  5 && date == 2)               { return 1; } //2012ゴールデンウィーク
*/
  if (month ==  5 && date >=  3 && date <=  5) { return 1; } // 憲法記念日～こどもの日
  if (month ==  7 && nday ==  1 && nofw ==  3) { return 1; } // 海の日
  if (month ==  9 && nday ==  1 && nofw ==  3) { return 1; } // 敬老の日
  if (month ==  9 && date == syubun)           { return 1; } // 秋分の日
  if (month ==  9 && nday ==  2 && nofw ==  3 
                  && date+1 == syubun) { return 1; } // 9月第3火曜の翌日が秋分の日→国民の休日
  if (month == 10 && nday ==  1 && nofw ==  2) { return 1; } // 体育の日
  if (month == 11 && date ==  3)               { return 1; } // 文化の日
  if (month == 11 && date == 23)               { return 1; } // 勤労感謝の日
  if (month == 12 && date == 23)               { return 1; } // 天皇誕生日
  if (month == 12 && date == 24)               { return 1; } // 2012年天皇誕生日の振替休日
  if (nday  ==  0)                             { return 2; } // 日曜
//  if (nday  ==  1)                             { return 3; } // 月曜
  if (nday  ==  6)                             { return 2; } // 土曜
//  if (month ==  9 && date ==  22)             { return 1; } // 2008振替休日
//  if (month ==  3 && date ==  22)             { return 1; } // 2010振替休日
  
  if (month ==  8 && date ==  13)             { return 1; } // 盆
  if (month ==  8 && date ==  14)             { return 1; } // 盆
  if (month ==  8 && date ==  15)             { return 1; } // 盆

  if (month ==  12 && date ==  27)             { return 1; } // 年末年始
  if (month ==  12 && date ==  28)             { return 1; } // 年末年始
  if (month ==  12 && date ==  29)             { return 1; } // 年末年始
  if (month ==  12 && date ==  30)             { return 1; } // 年末年始
  if (month ==  12 && date ==  31)             { return 1; } // 年末年始
  if (month ==  1 && date ==  1)             { return 1; } // 年末年始
  if (month ==  1 && date ==  2)             { return 1; } // 年末年始
  if (month ==  1 && date ==  3)             { return 1; } // 年末年始
/** 縮小営業日だけど発送はできるらしいのでコメントアウトしときます
  if (month ==  1 && date ==  4)             { return 1; } // 年末年始
  if (month ==  5 && date ==  6)               { return 1; } //2011ゴールデンウィーク
  if (month ==  12 && date ==  28)             { return 1; } // 年末年始
**/
  return 0;
}



/*** あす楽用暫定対応（11.6.3）ここから ***/
function isHoliday2 (year, month, date, nday) {
  nofw    = Math.floor((date - 1) / 7) + 1;
  shunbun = Math.floor(20.8431+0.242194*(year-1980)-Math.floor((year-1980)/4)); //春分の日を算出
  syubun  = Math.floor(23.2488+0.242194*(year-1980)-Math.floor((year-1980)/4)); //秋分の日を算出
  if (month ==  1 && nday ==  1 && nofw ==  2) { return 1; } // 成人の日
  if (month ==  2 && date == 11)               { return 1; } // 建国記念の日
  if (month ==  2 && date == 15)               { return 1; } // 社員研修
  if (month ==  3 && date == shunbun)          { return 1; } // 春分の日
  if (month ==  4 && date == 29)               { return 1; } // みどりの日
  if (month ==  4 && date == 30)               { return 1; } // みどりの日(振替休日)*/
  if (month ==  5 && date == 1)               { return 1; } //2012ゴールデンウィーク
  if (month ==  5 && date == 2)               { return 1; } //2012ゴールデンウィーク

  if (month ==  5 && date >=  3 && date <=  5) { return 1; } // 憲法記念日～こどもの日
  if (month ==  7 && nday ==  1 && nofw ==  3) { return 1; } // 海の日
  if (month ==  7 && date == 19)               { return 1; } // 海の日翌日
  if (month ==  9 && nday ==  1 && nofw ==  3) { return 1; } // 敬老の日
  if (month ==  9 && date == 20)               { return 1; } // 敬老の日翌日
  if (month ==  9 && date == syubun)           { return 1; } // 秋分の日
  if (month ==  9 && nday ==  2 && nofw ==  3 
                  && date+1 == syubun) { return 1; } // 9月第3火曜の翌日が秋分の日→国民の休日
  if (month == 10 && nday ==  1 && nofw ==  2) { return 1; } // 体育の日
  if (month == 10 && date ==  2)               { return 1; } // 体育の日翌日
  if (month == 11 && date ==  3)               { return 1; } // 文化の日
  if (month == 11 && date ==  4)               { return 1; } // 文化の日翌日
  if (month == 11 && date == 23)               { return 1; } // 勤労感謝の日
  if (month == 11 && date == 24)               { return 1; } // 勤労感謝の日翌日
  if (month == 12 && date == 23)               { return 1; } // 天皇誕生日
  if (nday  ==  0)                             { return 2; } // 日曜
  if (nday  ==  1)                             { return 2; } // 月曜
  if (nday  ==  6)                             { return 2; } // 土曜
  
  if (month ==  8 && date ==  15)             { return 1; } // 盆
  
  if (month ==  10 && date ==  9)             { return 1; } // 2012/10/9

  if (month ==  12 && date ==  28)             { return 1; } // 年末年始
  if (month ==  12 && date ==  29)             { return 1; } // 年末年始
  if (month ==  12 && date ==  30)             { return 1; } // 年末年始
  if (month ==  12 && date ==  31)             { return 1; } // 年末年始
  if (month ==  1 && date ==  1)             { return 1; } // 年末年始
  if (month ==  1 && date ==  2)             { return 1; } // 年末年始
  if (month ==  1 && date ==  3)             { return 1; } // 年末年始
  if (month ==  1 && date ==  4)             { return 1; } // 年末年始
  return 0;
}

function dispDate1Wz (h) {
  return dispDate1z(h, 1);
}
function dispDate1z (h, w) {
  return dispDate2z(0, h, w);
}
function dispDate2z (n, h, w) {
  var i = 0;
  while (i <= n) {
    thisDay.setTime(timeStamp + (1000*60*60*24 * i));
    myYear2  = thisDay.getFullYear();
    myMonth2 = thisDay.getMonth() + 1;
    myDate2  = thisDay.getDate();
    myDay2   = thisDay.getDay();
    if (isHoliday2(myYear2,myMonth2,myDate2,myDay2) == 0 && i == 0 && h <= myHours) { n++; }  // 

//翌日扱い
    if (isHoliday2(myYear2,myMonth2,myDate2,myDay2) >= 1){ n++; }  // 休日
    if (isHoliday2(myYear2,myMonth2,myDate2,myDay2) == 1 && myDay2 == 0){ n++; }  // 振替休日
    i++;
  }
  return dateFormat(myMonth2,myDate2,myDay2,w);
}

function dispDate4Wz (n, h, k) {
  return dispDate4z(n, h, k, 1);
}
function dispDate4z (n, h, k, w) {
  var i = 0;
  while (i <= n) {
    thisDay.setTime(timeStamp + (1000*60*60*24 * i));
    myYear2  = thisDay.getFullYear();
    myMonth2 = thisDay.getMonth() + 1;
    myDate2  = thisDay.getDate();
    myDay2   = thisDay.getDay();
    if (isHoliday2(myYear2,myMonth2,myDate2,myDay2) == 0 && i == 0 && h <= myHours) { n++; }  // 翌日扱い
    if (isHoliday2(myYear2,myMonth2,myDate2,myDay2) >= 1){ n++; }  // 休日
    if (isHoliday2(myYear2,myMonth2,myDate2,myDay2) == 1 && myDay2 == 0){ n++; }  // 振替休日
    i++;
  }
    l = i + k - 1
    thisDay.setTime(timeStamp + (1000*60*60*24 * l));
    myYear4  = thisDay.getFullYear();
    myMonth4 = thisDay.getMonth() + 1;
    myDate4  = thisDay.getDate();
    myDay4   = thisDay.getDay();
  return dateFormat(myMonth4,myDate4,myDay4,w);
}
function dispDate12Wz (h) {
  return dispDate12z(h, 1);
}
function dispDate12z (h, w) {
  return dispDate2z(1, h, w);
}
function dispDate2Wz (n, h) {
  return dispDate2z(n, h, 1);
}
function dispDate22Wz (n, h) {
  return dispDate2z(n+1, h, 1);
}

/*** あす楽用暫定対応（11.6.3）ここまで ***/


function dispDateW () {
  return dispDate(1);
}

function dispDateTW () {
  return dispDateT(1);
}

function dispDate1W (h) {
  return dispDate1(h, 1);
}

function dispDate12W (h) {
  return dispDate12(h, 1);
}

function dispDate2W (n, h) {
  return dispDate2(n, h, 1);
}
function dispDate22W (n, h) {
  return dispDate2(n+1, h, 1);
}


function dispDate3W (n, h) {
  return dispDate3(n, h, 1);
}
function dispDate32W (n, h) {
  return dispDate3(n+1, h, 1);
}


function dispDate4W (n, h, k) {
  return dispDate4(n, h, k, 1);
}


function dispDate (w) {
  return dateFormat(myMonth,myDate,myDay,w);
}
function dispDateT (w) {
    thisDay.setTime(timeStamp + (1000*60*60*24 * 1));
    myYearT  = thisDay.getFullYear();
    myMonthT = thisDay.getMonth() + 1;
    myDateT  = thisDay.getDate();
    myDayT   = thisDay.getDay();
return dateFormat(myMonthT,myDateT,myDayT,w);
}

function dispDate1 (h, w) {
  return dispDate2(0, h, w);
}

function dispDate12 (h, w) {
  return dispDate2(1, h, w);
}


function dispDate2 (n, h, w) {
  var i = 0;
  while (i <= n) {
    thisDay.setTime(timeStamp + (1000*60*60*24 * i));
    myYear2  = thisDay.getFullYear();
    myMonth2 = thisDay.getMonth() + 1;
    myDate2  = thisDay.getDate();
    myDay2   = thisDay.getDay();
    if (isHoliday(myYear2,myMonth2,myDate2,myDay2) == 0 && i == 0 && h <= myHours) { n++; }  // 

//翌日扱い
    if (isHoliday(myYear2,myMonth2,myDate2,myDay2) >= 1){ n++; }  // 休日
//    if (isHoliday(myYear2,myMonth2,myDate2,myDay2) == 1 && myDay2 == 0){ n++; }  // 振替休日
    i++;
  }
  return dateFormat(myMonth2,myDate2,myDay2,w);
}


//取り置きの日付計算（10日後の日付を取得、休業日の場合は前営業日まで期限を縮小）
/*******2011.01.06仕様変更
10日後が休業日で期限を縮小する際、7日より短くなる場合は
期限を翌営業日に延長するよう変更
********/
function dispDate3 (n, h, w) {
  var i = 0;
  while (i <= 2) {
    
  thisDay.setTime(timeStamp + (1000*60*60*24 * (n-i)));　　//ミリ秒に計算して設定
    myYear3  = thisDay.getFullYear();
    myMonth3 = thisDay.getMonth() + 1;
    myDate3  = thisDay.getDate();
    myDay3   = thisDay.getDay();
    if (isHoliday(myYear3,myMonth3,myDate3,myDay3) >= 1){ i++; }  // 取得した日付が休日だった場合
  
  thisDay.setTime(timeStamp + (1000*60*60*24 * (n-i)));
    myYear3  = thisDay.getFullYear();
    myMonth3 = thisDay.getMonth() + 1;
    myDate3  = thisDay.getDate();
    myDay3   = thisDay.getDay();
    if (isHoliday(myYear3,myMonth3,myDate3,myDay3) == 0){ break }  
i++;
  }
  
  if(i >=3 ){   //7日より短くなる場合は期限を翌営業日に延長
    var i = 0;
    while (i <= 10) {
    
    thisDay.setTime(timeStamp + (1000*60*60*24 * (n+i)));　　//ミリ秒に計算して設定
    myYear3  = thisDay.getFullYear();
    myMonth3 = thisDay.getMonth() + 1;
    myDate3  = thisDay.getDate();
    myDay3   = thisDay.getDay();
    if (isHoliday(myYear3,myMonth3,myDate3,myDay3) >= 1){ i++; }  // 取得した日付が休日だった場合
    
    thisDay.setTime(timeStamp + (1000*60*60*24 * (n+i)));
    myYear3  = thisDay.getFullYear();
    myMonth3 = thisDay.getMonth() + 1;
    myDate3  = thisDay.getDate();
    myDay3   = thisDay.getDay();
    if (isHoliday(myYear3,myMonth3,myDate3,myDay3) == 0){ break }  
  i++;
    }
  }
return dateFormat(myMonth3,myDate3,myDay3,w);  //結果を表示
}

/********+* 2011.01.06仕様変更前
function dispDate3 (n, h, w) {
  var i = 0;
  while (i <= 10) {
    thisDay.setTime(timeStamp + (1000*60*60*24 * (n-i)));
    myYear3  = thisDay.getFullYear();
    myMonth3 = thisDay.getMonth() + 1;
    myDate3  = thisDay.getDate();
    myDay3   = thisDay.getDay();
    if (isHoliday(myYear3,myMonth3,myDate3,myDay3) >= 1){ i++; }  // 休日
  
    thisDay.setTime(timeStamp + (1000*60*60*24 * (n-i)));
    myYear3  = thisDay.getFullYear();
    myMonth3 = thisDay.getMonth() + 1;
    myDate3  = thisDay.getDate();
    myDay3   = thisDay.getDay();
    if (isHoliday(myYear3,myMonth3,myDate3,myDay3) == 0){ break }  
    i++;
  }
  return dateFormat(myMonth3,myDate3,myDay3,w);
}
**********/




function dispDate4 (n, h, k, w) {
  var i = 0;
  while (i <= n) {
    thisDay.setTime(timeStamp + (1000*60*60*24 * i));
    myYear2  = thisDay.getFullYear();
    myMonth2 = thisDay.getMonth() + 1;
    myDate2  = thisDay.getDate();
    myDay2   = thisDay.getDay();
    if (isHoliday(myYear2,myMonth2,myDate2,myDay2) == 0 && i == 0 && h <= myHours) { n++; }  // 翌日扱い
    if (isHoliday(myYear2,myMonth2,myDate2,myDay2) >= 1){ n++; }  // 休日
    if (isHoliday(myYear2,myMonth2,myDate2,myDay2) == 1 && myDay2 == 0){ n++; }  // 振替休日
    i++;
  }
    l = i + k - 1
    thisDay.setTime(timeStamp + (1000*60*60*24 * l));
    myYear4  = thisDay.getFullYear();
    myMonth4 = thisDay.getMonth() + 1;
    myDate4  = thisDay.getDate();
    myDay4   = thisDay.getDay();
  return dateFormat(myMonth4,myDate4,myDay4,w);
}





function dateFormat (month, date, week, w) {
  if (w == 1) { return month+"月"+date+"日（"+myWeekTbl[week]+"）"; }
  else { return month+"月"+date+"日"; }
}


//-->