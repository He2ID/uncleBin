import time;
import calendar;
dict = {
	'hello' : 'Hi~ q(≧▽≦q)',
	'You are handsome' : '(*/ω＼*)',
	'How old are you' : '(●ˇ∀ˇ●) only one',
	'Thank you' : '(*^_^*) You are welcome come!',
	'Time?' : '→_→ '+ time.strftime('%H:%M:%S', time.localtime()),
	'Date?' : time.strftime('%Y-%m-%d', time.localtime())
}
# t-train c-chat l- leave
flag = 'c'
work =True
print('Hi o(*￣▽￣*)ブ My name is Python')
print('Do you want to chat with me?')
while flag =='c' or 't':
	flag = input("Chart(c) or Train(t), or Leave(l)?(c/t/l)")
	#train
	if flag =="t":
		question = input("输入key:")
		answer = input("输入value:")
		dict[str(question)] = str(answer)
		print("训练成功,现在我已经会%d个问题了！"% len(dict))
		continue
	#chart
	elif flag == 'c':
		if len(dict)==0:
			print("我还不会任何问题，快输入t教教我")
			continue
		#aearch key
		chat_word = input("你想和我聊点啥？:")
		for key in sorted(dict.keys()):
			if str(chat_word) == key:
				work = True
				print(dict[key])
				break
			else:
				work = False
		if work == False:
			print("抱歉，我回答不上来")
			work = True
	#leave
	elif flag == 'l':
		print("好的，下次见")
		break
	else:
		print("请输入提示的指令")
		continue

