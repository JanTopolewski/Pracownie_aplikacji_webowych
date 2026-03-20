max_different_letters_number = 0
result_word = ""

with open("sygnaly.txt", "r", encoding="utf-8") as file:
    for i, line in enumerate(file):
        different_letters_number = 0
        text = line.strip()

        for letter_index in range(len(text)):
            if text[letter_index] not in text[:letter_index:]:
                different_letters_number += 1

        if different_letters_number > max_different_letters_number:
            max_different_letters_number = different_letters_number
            result_word = text

print(result_word, max_different_letters_number)