<?php

/**
 * This controller provides methods to perform CRUD operations, including
 * listing, creating, retrieving by ID, updating, and deleting a person.
 * It returns JSON responses with appropriate HTTP status codes.
 */
class PersonController
{
    /**
     * Retrieves and returns a list of all registers.
     *
     * @return void
     */
    public function index(): void
    {
        $person = new PersonModel();

        $data = $person->fetchAll();

        if (!is_array($data)) {
            HttpResponseHandler::sendResponse(500, $data);
        }

        HttpResponseHandler::sendResponse(200, $data);
    }

    /**
     * Creates a new register with the provided data.
     *
     * @return void
     */
    public function store(): void
    {
        $data = json_decode(
            file_get_contents('php://input'),
            true
        );

        $person = new PersonModel();

        $action = $person->store($data);

        HttpResponseHandler::sendResponse(
            $action['success'] ? 201 : 400,
            $action['data']
        );
    }

    /**
     * Retrieves and returns a register by ID.
     *
     * @param array $id An array containing the register ID.
     *
     * @return void
     */
    public function show(array $id): void
    {
        $person = new PersonModel();

        $data = $person->fetchById($id[0]);

        if (!$data) {
            HttpResponseHandler::sendResponse(500, 'An error occurred fetching by id. Please try again later.');
        }

        HttpResponseHandler::sendResponse(200, $data);
    }

    /**
     * Updates an existing person with the provided data.
     *
     * @param array $id An array containing the person ID.
     *
     * @return void
     */
    public function update(array $id): void
    {
        $data = json_decode(
            file_get_contents('php://input'),
            true
        );

        $person = new PersonModel();
        
        $action = $person->update($id[0], $data);

        HttpResponseHandler::sendResponse(
            $action['success'] ? 200 : 400,
            $action['data']
        );
    }

    /**
     * Deletes a person by ID.
     *
     * @param array $id An array containing the person ID.
     *
     * @return void
     */
    public function destroy(array $id): void
    {
        $person = new PersonModel();

        $action = $person->destroy($id[0]);

        if (!$action) {
            HttpResponseHandler::sendResponse(422, 'Cannot process request. The item might not exist.');
        }

        HttpResponseHandler::sendResponse(200, 'Deleted Successfully');
    }
}
