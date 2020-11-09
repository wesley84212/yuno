const testBaseUrl = 'http://localhost:3000';
const baseUrl = 'https://psi-system.herokuapp.com';
const sendSuccess = async (response) => {
    const data = await response.json();
    return data
}

const sendError = async (response) => {
    console.log(response)
    const data = await response.json();
    return data
}

export const GetSaleListFromServer = async () => {
    const request = new Request(
        `${baseUrl}/sale`,
        {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            }),
        }
    )

    const response = await fetch(request)
    if (response.ok) {
        return sendSuccess(response)
    } else {
        return sendError(response)
    }
}

export const GetDataFromServer = async () => {
    const request = new Request(
        `${baseUrl}/purchase`,
        {
            method: 'GET',
            mode: 'cors',
            credentials: 'include',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json; charset=utf-8'
            }),
        }
    )
    const response = await fetch(request)
    if (response.ok) {
        return sendSuccess(response)
    } else {
        return sendError(response)
    }
}

export const UpdateProduct = async (input, id) => {
    const request = new Request(
        `${baseUrl}/product/${id}`,
        {
            method: 'PUT',
            body: JSON.stringify(input),
            mode: 'cors',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        }
    )

    const response = await fetch(request)

    if (response.ok) {
        return sendSuccess(response)
    } else {
        return sendError(response)
    }
}

export const UpdatePurchase = async (input, id) => {
    const request = new Request(
        `${baseUrl}/purchase/${id}`,
        {
            method: 'PUT',
            body: JSON.stringify(input),
            mode: 'cors',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        }
    )

    const response = await fetch(request)

    if (response.ok) {
        return sendSuccess(response)
    } else {
        return sendError(response)
    }
}

export const UpdateSale = async (input, id) => {
    const request = new Request(
        `${baseUrl}/sale/${id}`,
        {
            method: 'PUT',
            body: JSON.stringify(input),
            mode: 'cors',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        }
    )

    const response = await fetch(request)

    if (response.ok) {
        return sendSuccess(response)
    } else {
        return sendError(response)
    }
}

export const CreatePurchase = async (input) => {
    const request = new Request(
        `${baseUrl}/purchase`,
        {
            method: 'POST',
            body: JSON.stringify(input),
            mode: 'cors',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        }
    )

    const response = await fetch(request)

    if (response.ok) {
        return sendSuccess(response)
    } else {
        return sendError(response)
    }
}

export const CreateSale = async (input) => {
    const request = new Request(
        `${baseUrl}/sale`,
        {
            method: 'POST',
            body: JSON.stringify(input),
            mode: 'cors',
            credentials: 'include',
            headers: { 'Content-Type': 'application/json; charset=utf-8' }
        }
    )

    const response = await fetch(request)

    if (response.ok) {
        return sendSuccess(response)
    } else {
        return sendError(response)
    }
}