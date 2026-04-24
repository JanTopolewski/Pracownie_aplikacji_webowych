__copyright__ = "Zespół Szkół Komunikacji"
__author__ = "Jan Topolewski 4D"

from .Teacher import Teacher

class Subject:
    def __init__(self, _id: int, name: str, teacher: Teacher):
        self._id: int = _id
        self.name: str = name
        self.teacher: Teacher = teacher

    @property
    def id(self) -> int:
        return self._id

    def __str__(self) -> str:
        return f"{self.name} {self.teacher}"
