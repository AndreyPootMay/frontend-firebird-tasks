import http from "../http-common";

class TaskDataService {
    getAll() {
        return http.get("/tasks/");
    }

    get(id) {
        return http.get(`/task/${id}`);
    }

    create(data) {
        return http.post("/tasks/", data);
    }

    update(id, data) {
        return http.put(`/tasks/${id}`, data);
    }

    inactivate(id) {
        return http.delete(`/tasks/reActivate/${id}`);
    }

    reActivate(id) {
        return http.delete(`/tasks/reActivate/${id}`);
    }
}

export default new TaskDataService();
