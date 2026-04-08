class ListElement:
    def __init__(self):
        self.next = None
        self.v = 0

def read_graph(filename: str):
    with open(filename, "r") as file:
        v_number = int(file.readline().strip())
        v_tab = [None] * v_number
        for vertex_data in file:
            vertex_data_list = vertex_data.split()
            previous_vertex = None
            for i in range(len(vertex_data_list) - 1, 0, -1):
                p = ListElement()
                p.v = int(vertex_data_list[i])

                if previous_vertex:
                    p.next = previous_vertex

                previous_vertex = p

            v_tab[int(vertex_data_list[0])] = previous_vertex
        return v_tab, v_number


def write_neighbours_list(first_connected_vertex: ListElement):
    result = ""
    connected_vertex = first_connected_vertex
    while connected_vertex.next:
        result += str(connected_vertex.v) + ", "
        connected_vertex = connected_vertex.next
    result += str(connected_vertex.v)

    return result