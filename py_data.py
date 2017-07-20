print("===日期 & 时间===")
import time;
print(time.time());
print(time.strftime('%Y-%m-%d %H:%M:%S', time.localtime()));
print("时间",time.strftime('%H:%M:%S', time.localtime()));
print("日期",time.strftime('%Y-%m-%d', time.localtime()));
import calendar;
print(calendar.month(2017, 7));