async function handleLogin(e: Event) {
    try {
        e.preventDefault();
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        console.log(data);

        const response = await fetch('http://localhost:3000/user/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        const jsonResponse = await response.json();
        console.log(jsonResponse);

        if (jsonResponse.ok) {
            window.location.href = './../home/home.html';
        } else {
            alert(jsonResponse.error);
        }
    } catch (error) {
        console.error(error);
    }
}
