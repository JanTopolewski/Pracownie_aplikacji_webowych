result = ""

with open("sygnaly.txt", "r", encoding="utf-8") as file:
    for i, line in enumerate(file):
        if (i + 1) % 40 == 0:
            result += line[9]

print(result)
