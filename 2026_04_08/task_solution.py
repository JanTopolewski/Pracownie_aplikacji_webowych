def read_graph(filename: str) -> tuple[list[list[int]], int]:
    with open(filename, "r") as file:
        vertices_number: int = int(file.readline().strip())
        adjacency_list: list[list[int]] = [[] for _ in range(vertices_number)]

        for vertices_data in file:
            vertices_data_list: list[str] = vertices_data.split()
            for i in range(1, len(vertices_data_list)):
                adjacency_list[int(vertices_data_list[0])].append(int(vertices_data_list[i]))

        return adjacency_list, vertices_number


def write_neighbours_list(adjacency_list: list[list[int]]) -> None:
    print("Lista sąsiedztwa:")
    for i in range(0, len(adjacency_list)):
        print(f"Sąsiadami wierzchołka {i} są: {", ".join(map(str, adjacency_list[i]))}")


def list_to_matrix(adjacency_list: list[list[int]]) -> list[list[int]]:
    vertices_number: int = len(adjacency_list)
    matrix: list[list[int]] = [[0 for _ in range(vertices_number)] for _ in range(vertices_number)]

    for i in range(0, len(adjacency_list)):
        for vertex in adjacency_list[i]:
            matrix[i][vertex] = 1

    return matrix


def write_matrix(matrix: list[list[int]]) -> None:
    print("Macierz sąsiedztwa:")
    vertices_number: int = len(matrix)

    print("   ", end="")
    for i in range(vertices_number):
        print("%3d" % i, end="")

    print()

    for i in range(vertices_number):
        print("%3d" % i, end="")
        for j in range(vertices_number):
            print("%3d" % matrix[i][j], end="")
        print()


def main():
    adjacency_list: list[list[int]]
    vertices_number: int

    adjacency_list, vertices_number = read_graph("graph.txt")
    write_neighbours_list(adjacency_list)
    print()
    write_matrix(list_to_matrix(adjacency_list))


if __name__ == "__main__":
    main()
