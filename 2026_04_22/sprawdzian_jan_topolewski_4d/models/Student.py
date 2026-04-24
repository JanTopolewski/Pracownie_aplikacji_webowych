__copyright__ = "Zespół Szkół Komunikacji"
__author__ = "Jan Topolewski 4D"

from datetime import date

class Student:
    def __init__(self, _id: int, first_name: str, last_name: str, birth_date: date):
        self._id: int = _id
        self.first_name: str = first_name
        self.last_name: str = last_name
        self.birth_date: date = birth_date

    @property
    def age(self) -> int:
        return date.today().year - self.birth_date.year

    @property
    def id(self) -> int:
        return self._id

    def __str__(self) -> str:
        return f"{self.first_name} {self.last_name} ({self.age})"