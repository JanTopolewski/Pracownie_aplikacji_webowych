__copyright__ = "Zespół Szkół Komunikacji"
__author__ = "Jan Topolewski 4D"

import datetime
import json
import os

from models import Teacher, Student, Subject, Grades
from year_grade import year_grade

base_path = os.path.dirname(__file__)

teachers: list[Teacher] = []
subjects: list[Subject] = []
students: list[Student] = []
grades: list[Grades] = []

with open(os.path.join(base_path, "teachers.txt"), "r") as file:
    for line in file:
        data: list[str] = line.strip().split()
        if data:
            teachers.append(Teacher(int(data[0]), data[1], data[2]))

with open(os.path.join(base_path, "subjects.txt"), "r") as file:
    for line in file:
        data: list[str] = line.strip().split()
        if data:
            for teacher in teachers:
                if teacher.id == int(data[2]):
                    subjects.append(Subject(int(data[0]), data[1], teacher))
                    break

with open(os.path.join(base_path, "students.txt"), "r") as file:
    for line in file:
        data: list[str] = line.strip().split()
        if data:
            students.append(Student(int(data[0]), data[1], data[2], datetime.datetime.strptime(data[3], "%Y-%m-%d").date()))

with open(os.path.join(base_path, "grades.txt"), "r") as file:
    for line in file:
        data: list[str] = line.strip().split()

        if data:
            for student in students:
                if student.id == int(data[0]):
                    for subject in subjects:
                        if subject.id == int(data[1]):
                            subject_grades: Grades = Grades(student, subject)

                            for grade in data[2].split(","):
                                subject_grades.add_grade(int(grade))

                            grades.append(subject_grades)
                            break
                    break

print("Oceny i średnie poszczególnych uczniów")

for student in students:
    print(f"{student}:")

    for subject_grades in grades:
        if subject_grades.student == student:
            print(" " * 3 + subject_grades.subject.name + ":")
            print(" " * 8 + "Oceny: " + ", ".join(map(str, subject_grades.get_grades())))
            print(" " * 8 + "Średnia: " + str(round(subject_grades.get_average(), 2)))
            print(" " * 8 + "Ocena końcowa: " + str(year_grade(subject_grades.get_average())))

    print()

with open(os.path.join(base_path, "students.json"), "w") as file:
    result: list[dict] = []
    for student in students:
        student_result: dict = {}
        subjects_result: dict = {}

        for subject_grades in grades:
            if subject_grades.student == student:
                subject_result: dict = {"Oceny": ", ".join(map(str, subject_grades.get_grades())),
                                        "Srednia": round(subject_grades.get_average(), 2),
                                        "Ocena roczna": year_grade(subject_grades.get_average())}

                subjects_result[subject_grades.subject.name] = subject_result

        student_result[str(student)] = subjects_result
        result.append(student_result)

    json.dump(result, file, indent=4, ensure_ascii=False)

print("=" * 50)
print()

for subject in subjects:
    print(subject.name + ":")
    print(" " * 5 + "Nauczyciel: " + str(subject.teacher))

    grades_list: list[int] = []
    for subject_grades in grades:
        if subject_grades.subject == subject:
            grades_list += subject_grades.get_grades()
    print(" " * 5 + ", ".join(map(str, grades_list)))

    grades_sum: int = 0
    for grade in grades_list:
        grades_sum += grade
    print(" " * 5 + "Średnia: " + str(round(grades_sum / len(grades_list), 2)))

    print()

with open(os.path.join(base_path, "subjects.json"), "w") as file:
    result: list[dict] = []
    for subject in subjects:
        full_subject_result: dict = {}
        subject_result: dict = {"Nauczyciel": str(subject.teacher)}

        grades_list: list[int] = []
        for subject_grades in grades:
            if subject_grades.subject == subject:
                grades_list += subject_grades.get_grades()
        subject_result["Oceny"] = grades_list

        grades_sum: int = 0
        for grade in grades_list:
            grades_sum += grade
        subject_result["Srednia"] = round(grades_sum / len(grades_list), 2)

        full_subject_result[subject.name] = subject_result
        result.append(full_subject_result)

    json.dump(result, file, indent=4, ensure_ascii=False)