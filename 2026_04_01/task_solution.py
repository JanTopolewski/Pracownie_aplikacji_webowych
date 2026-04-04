from dataclasses import dataclass
from typing import List
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

@dataclass
class Course:
    name: str


@dataclass
class Student:
    id: int
    name: str
    surname: str
    age: int
    courses: List[Course]

    def add_course(self, course_name):
        course_already_added = False
        for course in self.courses:
            if course.name == course_name:
                course_already_added = True

        if not course_already_added:
            self.courses.append(Course(course_name))

    def __str__(self):
        courses_string = ""
        for course in self.courses:
            if courses_string != "":
                courses_string += ", " + course.name
            else:
                courses_string += course.name

        return f"{self.name} {self.surname} ({self.age} lat): " + courses_string



students_list = []

with open(os.path.join(BASE_DIR, "students.txt"), "r", encoding="utf-8") as students_file:
    for student_line in students_file:
        student_data = student_line.split(",")
        students_list.append(Student(int(student_data[0]), student_data[1], student_data[2], int(student_data[3].strip()), []))

with open(os.path.join(BASE_DIR, "courses.txt"), "r", encoding="utf-8") as courses_file:
    for course_line in courses_file:
        course_data = course_line.split(",")
        for student in students_list:
            if student.id == int(course_data[0]):
                student.add_course(course_data[1].strip())

for student in students_list:
    print(student)
    
    with open(os.path.join(BASE_DIR, f"students_result/{student.name.lower()}_{student.surname.lower()}.txt"), "w") as result_file:
        result_file.write("Kursy:\n")
        
        for course in student.courses:
            if course == student.courses[-1]:
                result_file.write("- " + course.name)
            else:
                result_file.write("- " + course.name + ",\n")