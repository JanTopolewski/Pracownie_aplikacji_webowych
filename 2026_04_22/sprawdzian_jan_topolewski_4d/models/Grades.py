__copyright__ = "Zespół Szkół Komunikacji"
__author__ = "Jan Topolewski 4D"

from .Subject import Subject
from .Student import Student

class Grades:
    def __init__(self, student: Student, subject: Subject):
        self.grades: list[int] = []
        self.student: Student = student
        self.subject: Subject = subject

    def add_grade(self, grade: int) -> None:
        if grade < 1 or grade > 6:
            raise ValueError("Grade must be between 1 and 6")
        else:
            self.grades.append(grade)

    def get_grades(self) -> list[int]:
        return self.grades

    def get_average(self) -> float:
        grades_sum: int = 0
        for grade in self.grades:
            grades_sum += grade

        return grades_sum / len(self.grades)