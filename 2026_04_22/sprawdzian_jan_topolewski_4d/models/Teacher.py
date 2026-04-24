__copyright__ = "Zespół Szkół Komunikacji"
__author__ = "Jan Topolewski 4D"

class Teacher:
    def __init__(self, _id: int, name: str, surname: str):
        self._id: int = _id
        self.name: str = name
        self.surname: str = surname

    @property
    def id(self) -> int:
        return self._id

    def __str__(self) -> str:
        return f"{self.name} {self.surname}"
