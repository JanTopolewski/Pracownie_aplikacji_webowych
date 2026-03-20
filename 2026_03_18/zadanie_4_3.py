with open("sygnaly.txt", "r", encoding="utf-8") as file:
    for i, line in enumerate(file):
        text = line.strip()
        should_stop = False

        for first_letter_index in range(len(text) - 1):
            for second_letter_index in range(first_letter_index + 1, len(text)):
                if abs(ord(text[first_letter_index]) - ord(text[second_letter_index])) > 10:
                    should_stop = True
                    break

            if should_stop:
                break

        if not should_stop:
            print(text)
