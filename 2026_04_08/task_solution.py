def read_graph(filename: str):
    with open(filename, "r") as file:
        vertices_number = int(file.readline().strip())
        adjacency_list = [[]] * vertices_number

        for vertices_data in file:
            vertices_data_list = vertices_data.split()
            for i in range(1, len(vertices_data_list)):
                adjacency_list[int(vertices_data_list[0])].append(int(vertices_data_list[i]))

        return adjacency_list, vertices_number


def write_neighbours_list(adjacency_list):
    print("Lista sąsiedztwa:")
    vertex_result = ""
    for i in range (0, len(adjacency_list)):
        for vertex in adjacency_list[i][:-1]:
            vertex_result += str(vertex) + ", "
        vertex_result += str(adjacency_list[i][-1])

        print(f"Sąsiadami wierzchołka {i} są: {vertex_result}")
        vertex_result = ""


def list_to_matrix(adjacency_list):
    vertices_number = len(adjacency_list)
    matrix = [[0 for _ in range(vertices_number)] for _ in range (vertices_number)]

    for i in range(0, len(adjacency_list)):
        for vertex in adjacency_list[i]:
            matrix[i][vertex] = 1
    
    return matrix


def write_matrix(matrix):
    print("Macierz sąsiedztwa:")
    vertices_number = len(matrix)

    print("   ", end="")
    for i in range(vertices_number):
        print("%3d" % i, end="")

    print()
    print()

    for i in range(vertices_number):
        print("%3d" % i, end="")
        for j in range(vertices_number):
            print("%3d" % matrix[i][j], end="")
        print()


def main():
    adjacency_list, vertces_number = read_graph("graph.txt")
    write_neighbours_list(adjacency_list)
    matrix = list_to_matrix(adjacency_list)
    write_matrix(matrix)


if __name__ == "__main__":
    main()
